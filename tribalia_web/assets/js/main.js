(function () {
  const products = window.TRIBALIA_PRODUCTS || [];
  let activeIndex = 0;
  let autoplayTimer = null;
  let currentLang = localStorage.getItem('tribalia_lang') || 'es';

  const I18N_DICT = {
    es: {
      nav_home: 'Inicio',
      nav_products: 'Productos',
      nav_about: 'Quiénes Somos',
      nav_news: 'Noticias',
      nav_magazine: 'Revista',
      nav_store: 'Tienda',
      nav_contact: 'Contacto',
      btn_access: 'Acceso Aplicaciones ▾',
      hero_more_info: 'Más información →',
      hero_get_license: 'Adquirir licencia (Mensual / Anual)',
      hero_palette_label: 'Paleta oficial:',
      hero_badge_prefix: 'Ecosistema Tribalia',
      ecosystem_eyebrow: 'Portafolio Oficial',
      ecosystem_title: 'Ecosistema Tecnológico Tribalia',
      ecosystem_subtitle:
        'Cada solución cuenta con su propia identidad cromática, acceso directo en la nube, página informativa con demostraciones y licenciamiento mensual o anual.',
      card_more_info: 'Más información',
      card_get_license: 'Adquirir licencia',
      news_eyebrow: 'Actualidad Tribalia',
      news_title: 'Noticias y Novedades Normativas',
      news_subtitle:
        'Actualizaciones tributarias, lanzamientos del ecosistema Tribalia y guías prácticas para contadores y empresas.',
      news_empty: 'Próximamente publicaremos aquí las noticias y actualizaciones oficiales de Tribalia.',
      mag_eyebrow: 'Publicación Especializada',
      mag_title: 'Revista Tribalia',
      mag_subtitle:
        'Ediciones digitales interactivas tipo libro físico con cambio de página animado y descarga directa en PDF.',
      mag_empty: 'Próximamente estará disponible la primera edición interactiva de la Revista Tribalia.',
      mag_open_btn: 'Leer revista interactiva →',
      store_badge: 'Licenciamiento Flexible',
      store_title: 'Adquiere tu licencia Mensual o Anual en la Tienda Tribalia',
      store_desc:
        'Activa cualquiera de nuestras 10 soluciones en la nube de forma inmediata con planes flexibles adaptados a contadores independientes, firmas y empresas.',
      store_btn: 'Ir a la Tienda Tribalia ↗',
      contact_eyebrow: 'Hablemos',
      contact_title: 'Contacto Directo Tribalia',
      contact_subtitle:
        '¿Necesitas una demostración personalizada o asesoría para elegir tu plan? Nuestro equipo está listo para atenderte.',
      contact_channels: 'Canales Oficiales',
      contact_channels_desc: 'Comunícate directamente con Tribalia Soluciones Informáticas S.A.S.',
      form_name: 'Nombre completo',
      form_email: 'Correo electrónico',
      form_phone: 'Teléfono / WhatsApp',
      form_product: 'Aplicación de interés',
      form_message: 'Mensaje',
      form_submit: 'Enviar mensaje',
      about_eyebrow: 'Nuestra Identidad',
      about_title: 'Tribalia Soluciones Informáticas S.A.S.',
      about_subtitle:
        'Tributo + Aliado + Balance + Tribu: ingeniería de software pensada desde la práctica profesional para transformar la complejidad operativa en eficiencia real.',
      about_who_title: 'Quiénes Somos',
      about_who_p1:
        'Tribalia Soluciones Informáticas S.A.S. (Tribalia S.A.S.) es una compañía colombiana de ingeniería, diseño y maquetación de software, especializada en transformar la complejidad operativa en eficiencia real. Nacimos con el propósito de modernizar y potenciar la gestión de contadores públicos, administradores, auditores y de la comunidad empresarial en general.',
      about_who_p2:
        'Actualmente contamos con un portafolio consolidado de 10 herramientas tecnológicas propias en comercialización activa, combinando arquitectura de software intuitiva, rigor técnico y avances en Inteligencia Artificial para automatizar tareas mecánicas y liberar tiempo para el análisis estratégico, el control y la toma de decisiones.',
      about_mission_title: 'Misión',
      about_mission_text:
        'En Tribalia transformamos la carga operativa en capacidad analítica y decisiones estratégicas. Diseñamos herramientas tecnológicas e integraciones de Inteligencia Artificial orientadas a contadores públicos, auditores, firmas financieras y empresas, simplificando procesos complejos y eliminando tareas mecánicas.',
      about_vision_title: 'Visión',
      about_vision_text:
        'Proyectamos consolidarnos como una compañía referente y líder en el mercado colombiano de software contable, tributario y de gestión empresarial, escalando a mediano y largo plazo nuestro ecosistema tecnológico hacia mercados internacionales con rigor técnico e innovación práctica.',
      about_back_home: '← Volver al Ecosistema de Aplicaciones'
    },
    en: {
      nav_home: 'Home',
      nav_products: 'Products',
      nav_about: 'About Us',
      nav_news: 'News',
      nav_magazine: 'Magazine',
      nav_store: 'Store',
      nav_contact: 'Contact',
      btn_access: 'App Portal ▾',
      hero_more_info: 'Learn more →',
      hero_get_license: 'Get License (Monthly / Annual)',
      hero_palette_label: 'Official palette:',
      hero_badge_prefix: 'Tribalia Ecosystem',
      ecosystem_eyebrow: 'Official Portfolio',
      ecosystem_title: 'Tribalia Technology Ecosystem',
      ecosystem_subtitle:
        'Each solution features its own brand color identity, direct cloud access, product showcase with demos, and flexible monthly or annual licensing.',
      card_more_info: 'Learn more',
      card_get_license: 'Get license',
      news_eyebrow: 'Tribalia Insights',
      news_title: 'News & Regulatory Updates',
      news_subtitle:
        'Tax updates, Tribalia ecosystem releases, and practical guides for accountants and businesses.',
      news_empty: 'Official Tribalia news and updates will be published here soon.',
      mag_eyebrow: 'Specialized Publication',
      mag_title: 'Tribalia Magazine',
      mag_subtitle:
        'Interactive digital editions with realistic page-flip animation and direct PDF download.',
      mag_empty: 'The first interactive edition of Tribalia Magazine will be available here soon.',
      mag_open_btn: 'Read interactive magazine →',
      store_badge: 'Flexible Licensing',
      store_title: 'Get your Monthly or Annual license at the Tribalia Store',
      store_desc:
        'Activate any of our 10 cloud solutions instantly with flexible plans tailored for independent CPAs, accounting firms, and enterprises.',
      store_btn: 'Go to Tribalia Store ↗',
      contact_eyebrow: 'Get in Touch',
      contact_title: 'Direct Tribalia Contact',
      contact_subtitle:
        'Need a personalized demo or guidance choosing your plan? Our team is ready to help.',
      contact_channels: 'Official Channels',
      contact_channels_desc: 'Reach out directly to Tribalia Soluciones Informáticas S.A.S.',
      form_name: 'Full name',
      form_email: 'Email address',
      form_phone: 'Phone / WhatsApp',
      form_product: 'Application of interest',
      form_message: 'Message',
      form_submit: 'Send message',
      about_eyebrow: 'Our Identity',
      about_title: 'Tribalia Soluciones Informáticas S.A.S.',
      about_subtitle:
        'Tax + Ally + Balance + Tribe: software engineering crafted from professional practice to turn operational complexity into real efficiency.',
      about_who_title: 'About Us',
      about_who_p1:
        'Tribalia Soluciones Informáticas S.A.S. (Tribalia S.A.S.) is a Colombian software engineering, design, and architecture company specialized in turning operational complexity into real efficiency. We were born to modernize and empower public accountants, managers, auditors, and the broader business community.',
      about_who_p2:
        'We currently offer a consolidated portfolio of 10 proprietary software tools in active commercialization, combining intuitive software architecture, technical rigor, and Artificial Intelligence to automate routine tasks and free up time for strategic analysis, control, and decision-making.',
      about_mission_title: 'Mission',
      about_mission_text:
        'At Tribalia we transform operational workload into analytical capacity and strategic decisions. We design software tools and AI integrations for public accountants, auditors, financial firms, and businesses, simplifying complex processes and eliminating mechanical tasks.',
      about_vision_title: 'Vision',
      about_vision_text:
        'We aim to consolidate our position as a leading benchmark in the Colombian accounting, tax, and business management software market, scaling our technology ecosystem internationally in the medium and long term with technical rigor and practical innovation.',
      about_back_home: '← Back to Applications Ecosystem'
    }
  };

  function getField(product, field) {
    if (currentLang === 'en' && product[`${field}_en`]) {
      return product[`${field}_en`];
    }
    return product[field];
  }

  function getProductHref(slug) {
    const isLocal =
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.protocol === 'file:';
    return isLocal ? `${slug}.html` : `/${slug}`;
  }

  function renderProductLogoSVG(product) {
    const gradId = `grad-${product.id}`;
    return `
      <svg viewBox="0 0 220 110" width="180" height="90" aria-hidden="true">
        <defs>
          <linearGradient id="${gradId}" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stop-color="#0B2853" />
            <stop offset="55%" stop-color="${product.bridgeColor}" />
            <stop offset="100%" stop-color="${product.accentColor}" />
          </linearGradient>
        </defs>
        <path d="M58 88 C28 88, 12 68, 12 46 C12 22, 32 10, 56 12 C76 14, 92 34, 110 50 C128 66, 146 84, 170 84 C194 84, 208 66, 208 46 C208 26, 192 14, 174 16 C164 17, 156 22, 150 28 C144 18, 132 12, 118 14 C104 16, 94 28, 84 40 L60 72"
              fill="none" stroke="url(#${gradId})" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M38 30 H76 M57 30 L49 74"
              fill="none" stroke="#0B2853" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="136" cy="24" r="4" fill="${product.accentColor}" />
        <circle cx="147" cy="18" r="3.5" fill="${product.accentColor}" />
        <circle cx="176" cy="68" r="4" fill="${product.accentColor}" />
        <circle cx="187" cy="60" r="3.5" fill="${product.accentColor}" />
      </svg>
    `;
  }

  function renderHeaderDropdowns() {
    const prodMenu = document.getElementById('navProductsDropdown');
    const accessMenu = document.getElementById('navAccessDropdown');

    if (prodMenu) {
      const headerLabel =
        currentLang === 'en' ? 'Tribalia Ecosystem (10 Apps)' : 'Ecosistema Tribalia (10 Apps)';
      prodMenu.innerHTML =
        `<li class="dropdown-header">${headerLabel}</li>` +
        products
          .map(
            (p) => `
          <li class="dropdown-item">
            <a href="${getProductHref(p.slug)}">
              <span>${p.name}</span>
              <span class="dot-indicator" style="background:${p.accentColor}"></span>
            </a>
          </li>`
          )
          .join('');
    }

    if (accessMenu) {
      const portalLabel =
        currentLang === 'en'
          ? 'Cloud Portal (*.tribalia.com.co)'
          : 'Portal en la Nube (*.tribalia.com.co)';
      accessMenu.innerHTML =
        `<li class="dropdown-header">${portalLabel}</li>` +
        products
          .map(
            (p) => `
          <li class="dropdown-item">
            <a href="${p.subdomain}" target="_blank" rel="noopener noreferrer">
              <span>${p.shortName}</span>
              <span style="font-size:0.72rem; color:#64748B;">${p.subdomain.replace('https://', '')} ↗</span>
            </a>
          </li>`
          )
          .join('');
    }
  }

  function renderHero(index) {
    const product = products[index];
    if (!product) return;

    const t = I18N_DICT[currentLang];
    const heroEl = document.querySelector('.hero-showcase');
    if (!heroEl) return;

    const badgeEl = document.getElementById('heroBadge');
    const titleEl = document.getElementById('heroTitle');
    const descEl = document.getElementById('heroDesc');
    const chipsEl = document.getElementById('heroChips');
    const btnInfo = document.getElementById('heroBtnInfo');
    const btnStore = document.getElementById('heroBtnStore');
    const cardEl = document.getElementById('heroVisualCard');
    const logoBox = document.getElementById('heroProductLogo');
    const cardTitle = document.getElementById('heroCardTitle');
    const cardTagline = document.getElementById('heroCardTagline');
    const cardSubdomain = document.getElementById('heroCardSubdomain');
    const swatchesEl = document.getElementById('heroSwatches');

    heroEl.style.setProperty('--active-accent', product.accentColor);
    heroEl.style.setProperty('--active-bridge', product.bridgeColor);

    if (badgeEl) badgeEl.textContent = `${t.hero_badge_prefix} · ${index + 1} / ${products.length}`;
    if (titleEl) {
      titleEl.textContent = product.name;
      titleEl.classList.remove('animate-swap');
      void titleEl.offsetWidth;
      titleEl.classList.add('animate-swap');
    }
    if (descEl) descEl.textContent = getField(product, 'description');

    if (chipsEl) {
      const highlights = getField(product, 'highlights') || [];
      chipsEl.innerHTML = highlights.map((h) => `<span class="hero-chip">✓ ${h}</span>`).join('');
    }

    if (btnInfo) {
      btnInfo.href = getProductHref(product.slug);
      btnInfo.textContent = t.hero_more_info;
    }
    if (btnStore) {
      btnStore.href = product.storeUrl;
      btnStore.textContent = t.hero_get_license;
    }

    if (cardEl) {
      cardEl.classList.remove('animate-swap');
      void cardEl.offsetWidth;
      cardEl.classList.add('animate-swap');
    }

    if (logoBox) {
      logoBox.innerHTML = `
        <img src="${product.logo}" alt="${product.name}" style="height:150px;width:100%;object-fit:contain;">
      `;
    }

    if (cardTitle) cardTitle.textContent = product.name;
    if (cardTagline) cardTagline.textContent = getField(product, 'tagline');
    if (cardSubdomain) {
      cardSubdomain.textContent = product.subdomain.replace('https://', '');
      cardSubdomain.href = product.subdomain;
    }

    if (swatchesEl) {
      swatchesEl.innerHTML = `
        <span>${t.hero_palette_label}</span>
        <span class="swatch-dot" style="background:#0B2853" title="#0B2853"></span>
        <span class="swatch-dot" style="background:${product.bridgeColor}" title="${product.bridgeColor}"></span>
        <span class="swatch-dot" style="background:${product.accentColor}" title="${product.accentColor}"></span>
      `;
    }

    document.querySelectorAll('.hero-dot-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === index);
    });
  }

  function renderHeroDots() {
    const dotsContainer = document.getElementById('heroDots');
    if (!dotsContainer) return;
    dotsContainer.innerHTML = products
      .map(
        (p, i) => `
        <button type="button" class="hero-dot-btn ${i === activeIndex ? 'active' : ''}" data-index="${i}">
          <span class="dot-indicator" style="background:${p.accentColor}"></span>
          <span>${p.shortName}</span>
        </button>`
      )
      .join('');
  }

  function initHeroControls() {
    const dotsContainer = document.getElementById('heroDots');
    if (!dotsContainer) return;
    renderHeroDots();

    dotsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.hero-dot-btn');
      if (!btn) return;
      activeIndex = Number(btn.dataset.index);
      renderHero(activeIndex);
      restartAutoplay();
    });

    const prevBtn = document.getElementById('heroPrev');
    const nextBtn = document.getElementById('heroNext');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        activeIndex = (activeIndex - 1 + products.length) % products.length;
        renderHero(activeIndex);
        restartAutoplay();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        activeIndex = (activeIndex + 1) % products.length;
        renderHero(activeIndex);
        restartAutoplay();
      });
    }

    const heroEl = document.querySelector('.hero-showcase');
    if (heroEl) {
      heroEl.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
      heroEl.addEventListener('mouseleave', restartAutoplay);
    }

    renderHero(0);
    restartAutoplay();
  }

  function restartAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => {
      activeIndex = (activeIndex + 1) % products.length;
      renderHero(activeIndex);
    }, 5500);
  }

  function renderProductsGrid() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    const t = I18N_DICT[currentLang];

    grid.innerHTML = products
      .map(
        (p) => `
      <article class="product-card" style="--card-accent: ${p.accentColor}">
        <div>
          <div class="product-card-top">
            <img src="${p.logo}" alt="${p.name}" style="height:48px;width:auto;max-width:72%;object-fit:contain;">
            <span class="product-status">${getField(p, 'status')}</span>
          </div>
          <h3 style="margin:12px 0 8px;">${getField(p, 'tagline')}</h3>
          <p>${getField(p, 'description')}</p>
        </div>
        <div class="product-card-actions">
          <a href="${getProductHref(p.slug)}" class="btn btn-outline">${t.card_more_info}</a>
          <a href="${p.storeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background:${p.accentColor};box-shadow:none;">${t.card_get_license}</a>
        </div>
      </article>`
      )
      .join('');
  }

  function applyLanguage() {
    const t = I18N_DICT[currentLang];
    const btn = document.getElementById('langBtn');
    if (btn) btn.textContent = currentLang === 'es' ? 'EN' : 'ES';
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    renderHeaderDropdowns();
    renderHeroDots();
    renderHero(activeIndex);
    renderProductsGrid();
  }

  function initLanguageToggle() {
    const btn = document.getElementById('langBtn');
    if (btn) {
      btn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('tribalia_lang', currentLang);
        applyLanguage();
      });
    }
    applyLanguage();
  }

  function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('navMenu');
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
      });
    }

    document.querySelectorAll('.has-dropdown > .nav-link, .has-dropdown > button').forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 992 || trigger.tagName === 'BUTTON') {
          e.stopPropagation();
          trigger.parentElement.classList.toggle('open');
        }
      });
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.has-dropdown.open').forEach((el) => el.classList.remove('open'));
    });
  }

  function initContactForm() {
    const form = document.getElementById('tribaliaContactForm');
    const feedback = document.getElementById('contactFeedback');
    if (!form || !feedback) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const isLocal =
        window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

      if (isLocal) {
        feedback.style.display = 'block';
        feedback.textContent =
          currentLang === 'en'
            ? 'Message received in local preview. On Hostinger it will be sent via api/contact.php to contacto@tribalia.com.co.'
            : 'Solicitud recibida en vista local. En Hostinger se enviará mediante api/contact.php a contacto@tribalia.com.co.';
        form.reset();
        return;
      }

      try {
        const res = await fetch('api/contact.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: document.getElementById('cName')?.value || '',
            email: document.getElementById('cEmail')?.value || '',
            phone: document.getElementById('cPhone')?.value || '',
            product: document.getElementById('cProduct')?.value || 'General',
            message: document.getElementById('cMessage')?.value || ''
          })
        });
        const data = await res.json();
        feedback.style.display = 'block';
        feedback.style.color = data.ok ? '#008B7A' : '#DC2626';
        feedback.textContent = data.ok
          ? (currentLang === 'en' ? 'Message sent successfully!' : '¡Mensaje enviado correctamente!')
          : (data.error || 'Error');
        if (data.ok) form.reset();
      } catch (err) {
        feedback.style.display = 'block';
        feedback.style.color = '#DC2626';
        feedback.textContent =
          currentLang === 'en' ? 'Connection error. Please try again.' : 'Error de conexión. Intenta nuevamente.';
      }
    });
  }

  async function loadEditorialContent() {
    const newsBox = document.getElementById('newsContainer');
    const magBox = document.getElementById('magazineContainer');
    if (!newsBox && !magBox) return;

    try {
      const res = await fetch('data/editorial.json?v=' + Date.now());
      if (!res.ok) return;
      const data = await res.json();

      if (newsBox && Array.isArray(data.news) && data.news.length > 0) {
        newsBox.style = '';
        newsBox.className = 'editorial-grid';
        newsBox.innerHTML = data.news
          .map(
            (n) => `
          <article class="editorial-card">
            <div class="editorial-cover">
              <span class="editorial-tag">${n.tag || 'Tribalia'}</span>
            </div>
            <div class="editorial-body">
              <span class="editorial-meta">${n.date || ''}</span>
              <h3>${n.title}</h3>
              <p>${n.summary}</p>
              ${n.url ? `<a href="${n.url}" target="_blank" rel="noopener noreferrer" class="editorial-link">${currentLang === 'en' ? 'Read more →' : 'Leer más →'}</a>` : ''}
            </div>
          </article>`
          )
          .join('');
      }

      if (magBox && Array.isArray(data.magazines) && data.magazines.length > 0) {
        magBox.style = '';
        magBox.className = 'editorial-grid';
        magBox.innerHTML = data.magazines
          .map(
            (m) => `
          <article class="editorial-card">
            <div class="editorial-cover" style="background:linear-gradient(135deg,#071b3a 0%,#00A8E8 100%);">
              <span class="editorial-tag">${m.edition || 'Revista Tribalia'}</span>
            </div>
            <div class="editorial-body">
              <span class="editorial-meta">${m.date || ''}</span>
              <h3>${m.title}</h3>
              <p>${m.summary}</p>
              <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px;">
                <a href="revista.html?id=${encodeURIComponent(m.id)}" class="btn btn-primary" style="padding:8px 14px;font-size:0.82rem;">${I18N_DICT[currentLang].mag_open_btn}</a>
                ${m.pdf_url ? `<a href="${m.pdf_url}" download class="btn btn-outline" style="padding:8px 14px;font-size:0.82rem;">PDF ↓</a>` : ''}
              </div>
            </div>
          </article>`
          )
          .join('');
      }
    } catch (e) {
      // Mantiene estado vacío por defecto
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initHeroControls();
    initMobileMenu();
    initLanguageToggle();
    initContactForm();
    loadEditorialContent();
  });
})();
