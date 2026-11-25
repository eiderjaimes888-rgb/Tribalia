require('dotenv').config();
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const express = require('express');
const session = require('express-session');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Evitar que errores asíncronos no capturados tumben el proceso Node.js con 503
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Asegurar carpetas de subida
const newsUploadDir = path.join(__dirname, 'public', 'uploads', 'news');
const magUploadDir = path.join(__dirname, 'public', 'uploads', 'magazines');
fs.mkdirSync(newsUploadDir, { recursive: true });
fs.mkdirSync(magUploadDir, { recursive: true });

// Pool de conexión MySQL (Hostinger)
const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'u774936641_tribalia_web',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8mb4'
});

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', 1);

app.use(
  express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      } else if (filePath.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css; charset=utf-8');
      } else if (filePath.endsWith('.svg')) {
        res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
      }
    }
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'tribalia-session-secret-2026',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 12
    }
  })
);

// Configuración Multer para subir PNG/JPG, EPUB y PDF
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (req.path.includes('/news')) return cb(null, newsUploadDir);
    return cb(null, magUploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${Date.now()}-${crypto.randomBytes(4).toString('hex')}${ext}`);
  }
});
const upload = multer({ storage });

// Inicializar usuario Admin (Admin / 210522) si no existe en MySQL
async function ensureAdminUser() {
  try {
    const [rows] = await pool.query('SELECT id FROM users WHERE username = ?', ['Admin']);
    if (rows.length === 0) {
      const hash = await bcrypt.hash('210522', 10);
      await pool.query(
        'INSERT INTO users (username, email, password_hash, role, full_name, is_active) VALUES (?, ?, ?, ?, ?, 1)',
        ['Admin', 'admin@tribalia.com.co', hash, 'admin', 'Administrador Tribalia']
      );
      console.log('Usuario Admin inicializado en MySQL.');
    }
  } catch (err) {
    console.error('Aviso al verificar usuario Admin:', err.message);
  }
}

function requireAuth(req, res, next) {
  if (req.session && req.session.user) return next();
  return res.redirect(`/login?next=${encodeURIComponent(req.originalUrl)}`);
}

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || `noticia-${Date.now()}`;
}

async function getProposalWithItems(code) {
  const [props] = await pool.query('SELECT * FROM commercial_proposals WHERE code = ?', [code]);
  if (props.length === 0) return null;
  const proposal = props[0];

  const [items] = await pool.query(
    `SELECT pi.id, pi.quantity, lt.id AS license_type_id, lt.name AS plan_name,
            lt.billing_cycle, lt.price AS unit_price, p.id AS product_id,
            p.name AS product_name, p.slug AS product_slug,
            p.accent_color, p.bridge_color
     FROM proposal_items pi
     JOIN license_types lt ON lt.id = pi.license_type_id
     JOIN products p ON p.id = lt.product_id
     WHERE pi.proposal_id = ?`,
    [proposal.id]
  );

  let subtotal = 0;
  items.forEach((it) => {
    it.line_total = Number(it.unit_price) * Number(it.quantity);
    subtotal += it.line_total;
  });

  const discountPercent = Number(proposal.discount_percent || 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const totalPrice = Math.max(0, subtotal - discountAmount);

  proposal.items = items;
  proposal.subtotal = subtotal;
  proposal.discount_amount = discountAmount;
  proposal.total_price = totalPrice;
  return proposal;
}

// Diagnóstico de salud (para verificar conexión MySQL en Hostinger)
app.get('/health', async (req, res) => {
  try {
    const [tables] = await pool.query('SHOW TABLES');
    res.json({ ok: true, db: 'connected', tables_count: tables.length });
  } catch (err) {
    res.status(500).json({ ok: false, db: 'error', message: err.message });
  }
});

// ============================================================================
// RUTAS PÚBLICAS
// ============================================================================

app.get('/', asyncHandler(async (req, res) => {
  try {
    const [articles] = await pool.query(
      "SELECT * FROM articles WHERE status = 'published' ORDER BY published_at DESC, created_at DESC LIMIT 6"
    );
    const [magazines] = await pool.query(
      'SELECT * FROM magazines WHERE is_published = 1 ORDER BY publish_date DESC, edition_number DESC LIMIT 6'
    );
    const [products] = await pool.query(
      'SELECT * FROM products WHERE is_active = 1 ORDER BY display_order ASC'
    );
    res.render('home', { articles, magazines, products });
  } catch (err) {
    res.render('home', { articles: [], magazines: [], products: [] });
  }
}));

app.get('/quienes-somos', (req, res) => {
  res.render('quienes-somos', { pageTitle: 'Quiénes Somos | Tribalia Soluciones Informáticas S.A.S.' });
});

app.get('/noticias/:slug', asyncHandler(async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM articles WHERE slug = ? AND status = 'published'", [
    req.params.slug
  ]);
  if (rows.length === 0) return res.status(404).send('Noticia no encontrada');
  res.render('article', { article: rows[0], pageTitle: `${rows[0].title} | Noticias Tribalia` });
}));

app.get('/revista/:id', asyncHandler(async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM magazines WHERE id = ? AND is_published = 1', [
    req.params.id
  ]);
  if (rows.length === 0) return res.status(404).send('Revista no encontrada');
  res.render('revista', { magazine: rows[0], pageTitle: `${rows[0].title} | Revista Tribalia` });
}));

app.post('/api/contact/', asyncHandler(async (req, res) => {
  const { name, company, phone, email, product_interest, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ status: 'error', message: 'Por favor completa nombre, correo y mensaje.' });
  }
  await pool.query(
    `INSERT INTO contact_messages (id, name, company, phone, email, product_interest, message, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, 'nuevo')`,
    [uuidv4(), name.trim(), (company || '').trim(), (phone || '').trim(), email.trim(), (product_interest || 'General').trim(), message.trim()]
  );
  res.json({ status: 'success', message: '¡Mensaje recibido! Nuestro equipo comercial se pondrá en contacto pronto.' });
}));

// ============================================================================
// TIENDA Y PROPUESTAS COMERCIALES
// ============================================================================

app.get('/tienda', asyncHandler(async (req, res) => {
  const [products] = await pool.query('SELECT * FROM products WHERE is_active = 1 ORDER BY display_order ASC');
  const [plans] = await pool.query('SELECT * FROM license_types WHERE is_active = 1');

  const catalog = products.map((p) => ({
    product: p,
    monthly: plans.find((l) => l.product_id === p.id && l.billing_cycle === 'monthly') || null,
    annual: plans.find((l) => l.product_id === p.id && l.billing_cycle === 'annual') || null
  }));

  const proposal = req.query.proposal ? await getProposalWithItems(String(req.query.proposal).trim()) : null;
  res.render('store', {
    pageTitle: 'Tienda Oficial | Tribalia',
    catalog,
    proposal,
    selectedPlanId: req.query.plan || '',
    checkoutResult: null
  });
}));

app.post('/tienda', asyncHandler(async (req, res) => {
  const { customer_email, plan_id, proposal_code, payment_gateway } = req.body;
  let checkoutResult = null;
  const gateway = payment_gateway || 'Wompi';
  const ref = `TRB-PAY-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;

  if (proposal_code && customer_email) {
    const prop = await getProposalWithItems(proposal_code.trim());
    if (prop) {
      const firstItem = prop.items[0] || null;
      await pool.query(
        `INSERT INTO transactions (id, payment_gateway, gateway_reference, amount, currency, status, customer_email, license_type_id, proposal_id)
         VALUES (?, ?, ?, ?, 'COP', 'pending', ?, ?, ?)`,
        [uuidv4(), gateway, ref, prop.total_price, customer_email.trim(), firstItem ? firstItem.license_type_id : null, prop.id]
      );
      checkoutResult = { reference: ref, amount: prop.total_price, gateway, email: customer_email.trim() };
    }
  } else if (plan_id && customer_email) {
    const [planRows] = await pool.query('SELECT * FROM license_types WHERE id = ? AND is_active = 1', [plan_id]);
    if (planRows.length > 0) {
      const plan = planRows[0];
      await pool.query(
        `INSERT INTO transactions (id, payment_gateway, gateway_reference, amount, currency, status, customer_email, license_type_id)
         VALUES (?, ?, ?, ?, 'COP', 'pending', ?, ?)`,
        [uuidv4(), gateway, ref, plan.price, customer_email.trim(), plan.id]
      );
      checkoutResult = { reference: ref, amount: plan.price, gateway, email: customer_email.trim() };
    }
  }

  const [products] = await pool.query('SELECT * FROM products WHERE is_active = 1 ORDER BY display_order ASC');
  const [plans] = await pool.query('SELECT * FROM license_types WHERE is_active = 1');
  const catalog = products.map((p) => ({
    product: p,
    monthly: plans.find((l) => l.product_id === p.id && l.billing_cycle === 'monthly') || null,
    annual: plans.find((l) => l.product_id === p.id && l.billing_cycle === 'annual') || null
  }));

  res.render('store', {
    pageTitle: 'Tienda Oficial | Tribalia',
    catalog,
    proposal: null,
    selectedPlanId: '',
    checkoutResult
  });
}));

app.get('/propuesta/:code', asyncHandler(async (req, res) => {
  const proposal = await getProposalWithItems(req.params.code);
  if (!proposal) return res.status(404).send('Propuesta comercial no encontrada');

  const firstItem = proposal.items[0] || null;
  const primaryProduct = firstItem
    ? { name: firstItem.product_name, slug: firstItem.product_slug }
    : null;
  const accentColor = firstItem ? firstItem.accent_color : '#00A8E8';
  const bridgeColor = firstItem ? firstItem.bridge_color : '#0B2853';

  res.render('proposal', {
    pageTitle: `Propuesta ${proposal.code} | Tribalia`,
    proposal,
    primaryProduct,
    accentColor,
    bridgeColor,
    checkoutUrl: `/tienda?proposal=${encodeURIComponent(proposal.code)}`
  });
}));

// ============================================================================
// AUTENTICACIÓN, ÁREA COMERCIAL Y PANEL ADMIN
// ============================================================================

app.get('/login', (req, res) => {
  res.render('login', { error: null, nextUrl: req.query.next || '/admin', pageTitle: 'Iniciar Sesión | Tribalia' });
});

app.post('/login', asyncHandler(async (req, res) => {
  const { username, password, next } = req.body;
  try {
    await ensureAdminUser();
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ? AND is_active = 1', [username]);
    if (rows.length > 0 && (await bcrypt.compare(password, rows[0].password_hash))) {
      req.session.user = { id: rows[0].id, username: rows[0].username, role: rows[0].role, full_name: rows[0].full_name };
      return res.redirect(next || '/admin');
    }
    return res.render('login', { error: 'Usuario o contraseña incorrectos.', nextUrl: next || '/admin', pageTitle: 'Iniciar Sesión | Tribalia' });
  } catch (err) {
    console.error('Error en /login:', err);
    return res.render('login', {
      error: `Error de base de datos: ${err.message}. Verifica las variables DB_HOST, DB_USER, DB_PASSWORD, DB_NAME en Hostinger.`,
      nextUrl: next || '/admin',
      pageTitle: 'Iniciar Sesión | Tribalia'
    });
  }
}));

app.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
});

app.get('/comercial', requireAuth, asyncHandler(async (req, res) => {
  const [plans] = await pool.query(
    `SELECT lt.*, p.name AS product_name FROM license_types lt
     JOIN products p ON p.id = lt.product_id
     WHERE lt.is_active = 1 ORDER BY p.display_order ASC, lt.duration_days ASC`
  );
  const [rawProps] = await pool.query('SELECT * FROM commercial_proposals ORDER BY created_at DESC LIMIT 20');
  const proposals = [];
  for (const rp of rawProps) {
    proposals.push(await getProposalWithItems(rp.code));
  }
  const [leads] = await pool.query('SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 30');

  res.render('commercial', {
    pageTitle: 'Área Comercial | Tribalia',
    user: req.session.user,
    plans,
    proposals,
    leads,
    createdProposal: null,
    baseUrl: `${req.protocol}://${req.get('host')}`
  });
}));

app.post('/comercial/propuesta', requireAuth, asyncHandler(async (req, res) => {
  const { client_name, client_company, client_email, client_phone, discount_percent, valid_until, notes } = req.body;
  let planIds = req.body.plan_ids || [];
  if (!Array.isArray(planIds)) planIds = [planIds];

  let createdProposal = null;
  if (client_name && client_email && planIds.length > 0) {
    const propId = uuidv4();
    const code = `TRB-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
    const discount = Math.max(0, Math.min(100, Number(discount_percent || 0)));

    await pool.query(
      `INSERT INTO commercial_proposals (id, code, commercial_user_id, commercial_name, client_name, client_company, client_email, client_phone, discount_percent, notes, valid_until, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'sent')`,
      [propId, code, req.session.user.id, req.session.user.full_name || req.session.user.username, client_name.trim(), (client_company || '').trim(), client_email.trim(), (client_phone || '').trim(), discount, (notes || '').trim(), valid_until || null]
    );

    for (const pid of planIds) {
      const qty = Math.max(1, parseInt(req.body[`qty_${pid}`] || '1', 10));
      await pool.query('INSERT INTO proposal_items (id, proposal_id, license_type_id, quantity) VALUES (?, ?, ?, ?)', [
        uuidv4(),
        propId,
        pid,
        qty
      ]);
    }
    createdProposal = await getProposalWithItems(code);
  }

  const [plans] = await pool.query(
    `SELECT lt.*, p.name AS product_name FROM license_types lt
     JOIN products p ON p.id = lt.product_id
     WHERE lt.is_active = 1 ORDER BY p.display_order ASC, lt.duration_days ASC`
  );
  const [rawProps] = await pool.query('SELECT * FROM commercial_proposals ORDER BY created_at DESC LIMIT 20');
  const proposals = [];
  for (const rp of rawProps) proposals.push(await getProposalWithItems(rp.code));
  const [leads] = await pool.query('SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 30');

  res.render('commercial', {
    pageTitle: 'Área Comercial | Tribalia',
    user: req.session.user,
    plans,
    proposals,
    leads,
    createdProposal,
    baseUrl: `${req.protocol}://${req.get('host')}`
  });
}));

app.post('/comercial/lead', requireAuth, asyncHandler(async (req, res) => {
  const { lead_id, status, commercial_notes } = req.body;
  if (lead_id && status) {
    await pool.query('UPDATE contact_messages SET status = ?, commercial_notes = ? WHERE id = ?', [
      status,
      commercial_notes || '',
      lead_id
    ]);
  }
  res.redirect('/comercial');
}));

app.get('/admin', requireAuth, asyncHandler(async (req, res) => {
  const [articles] = await pool.query('SELECT * FROM articles ORDER BY created_at DESC');
  const [magazines] = await pool.query('SELECT * FROM magazines ORDER BY publish_date DESC, edition_number DESC');
  const [plans] = await pool.query(
    `SELECT lt.*, p.name AS product_name FROM license_types lt
     JOIN products p ON p.id = lt.product_id
     ORDER BY p.display_order ASC, lt.duration_days ASC`
  );
  res.render('admin', {
    pageTitle: 'Panel Administrativo | Tribalia',
    articles,
    magazines,
    plans,
    notice: req.query.notice || null
  });
}));

app.post('/admin/news', requireAuth, upload.single('cover_image'), asyncHandler(async (req, res) => {
  const { title, tag, summary, content } = req.body;
  const coverPath = req.file ? `/uploads/news/${req.file.filename}` : null;
  const slug = `${slugify(title)}-${crypto.randomBytes(2).toString('hex')}`;
  await pool.query(
    `INSERT INTO articles (id, title, slug, tag, summary, content, cover_image_path, status, published_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, 'published', NOW())`,
    [uuidv4(), title.trim(), slug, (tag || 'Actualidad Tribalia').trim(), summary || '', content.trim(), coverPath]
  );
  res.redirect('/admin?notice=Noticia+publicada+correctamente');
}));

app.post('/admin/news/delete', requireAuth, asyncHandler(async (req, res) => {
  await pool.query('DELETE FROM articles WHERE id = ?', [req.body.id]);
  res.redirect('/admin?notice=Noticia+eliminada');
}));

app.post(
  '/admin/magazines',
  requireAuth,
  upload.fields([
    { name: 'cover_image', maxCount: 1 },
    { name: 'epub_file', maxCount: 1 },
    { name: 'pdf_file', maxCount: 1 }
  ]),
  asyncHandler(async (req, res) => {
    const { title, edition_number, summary } = req.body;
    const files = req.files || {};
    const coverPath = files.cover_image ? `/uploads/magazines/${files.cover_image[0].filename}` : null;
    const epubPath = files.epub_file ? `/uploads/magazines/${files.epub_file[0].filename}` : null;
    const pdfPath = files.pdf_file ? `/uploads/magazines/${files.pdf_file[0].filename}` : null;

    await pool.query(
      `INSERT INTO magazines (id, title, edition_number, summary, cover_image_path, epub_path, pdf_path, publish_date, is_published)
       VALUES (?, ?, ?, ?, ?, ?, ?, CURDATE(), 1)`,
      [uuidv4(), title.trim(), Number(edition_number || 1), summary || '', coverPath, epubPath, pdfPath]
    );
    res.redirect('/admin?notice=Revista+subida+correctamente');
  })
);

app.post('/admin/magazines/delete', requireAuth, asyncHandler(async (req, res) => {
  await pool.query('DELETE FROM magazines WHERE id = ?', [req.body.id]);
  res.redirect('/admin?notice=Revista+eliminada');
}));

app.post('/admin/plans/update', requireAuth, asyncHandler(async (req, res) => {
  const { id, price } = req.body;
  await pool.query('UPDATE license_types SET price = ? WHERE id = ?', [Number(price || 0), id]);
  res.redirect('/admin?notice=Precio+actualizado+en+la+tienda');
}));

// ============================================================================
// PÁGINA INDIVIDUAL DE CADA PRODUCTO (/:slug)
// ============================================================================

app.get('/:slug', asyncHandler(async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM products WHERE slug = ? AND is_active = 1', [req.params.slug]);
  if (rows.length === 0) return res.status(404).send('Página no encontrada');
  const product = rows[0];
  const [plans] = await pool.query('SELECT * FROM license_types WHERE product_id = ? AND is_active = 1', [product.id]);
  const monthlyPlan = plans.find((p) => p.billing_cycle === 'monthly') || null;
  const annualPlan = plans.find((p) => p.billing_cycle === 'annual') || null;

  res.render('product-detail', {
    pageTitle: `${product.name} | Tribalia`,
    pageDesc: product.description,
    product,
    monthlyPlan,
    annualPlan
  });
}));

// Manejador global de errores para nunca tumbar el servidor con 503
app.use((err, req, res, next) => {
  console.error('Express error:', err);
  res.status(500).send(`Error interno del servidor: ${err.message}`);
});

// Iniciar servidor
ensureAdminUser().finally(() => {
  app.listen(PORT, () => {
    console.log(`Tribalia Node.js escuchando en puerto ${PORT}`);
  });
});
