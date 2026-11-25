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
      store_badge: 'Licenciamiento Flexible',
      store_title: 'Adquiere tu licencia Mensual o Anual en la Tienda Tribalia',
      store_desc:
        'Activa cualquiera de nuestras 10 soluciones en la nube de forma inmediata con planes flexibles adaptados a contadores independientes, firmas y empresas.',
      store_btn: 'Ir a la Tienda Tribalia →',
      contact_eyebrow: 'Hablemos',
      contact_title: 'Contacto Directo Tribalia',
      contact_subtitle:
        '¿Necesitas una demostración personalizada o asesoría para elegir tu plan? Nuestro equipo está listo para atenderte.',
      contact_channels: 'Canales Oficiales',
      contact_channels_desc: 'Comunícate directamente con Tribalia Soluciones Informáticas S.A.S.',
      form_name: 'Nombre completo',
      form_company: 'Empresa / Firma',
      form_email: 'Correo electrónico',
      form_phone: 'Teléfono / WhatsApp',
      form_product: 'Aplicación de interés',
      form_message: 'Mensaje',
      form_submit: 'Enviar mensaje'
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
      store_badge: 'Flexible Licensing',
      store_title: 'Get your Monthly or Annual license at the Tribalia Store',
      store_desc:
        'Activate any of our 10 cloud solutions instantly with flexible plans tailored for independent CPAs, accounting firms, and enterprises.',
      store_btn: 'Go to Tribalia Store →',
      contact_eyebrow: 'Get in Touch',
      contact_title: 'Direct Tribalia Contact',
      contact_subtitle:
        'Need a personalized demo or guidance choosing your plan? Our team is ready to help.',
      contact_channels: 'Official Channels',
      contact_channels_desc: 'Reach out directly to Tribalia Soluciones Informáticas S.A.S.',
      form_name: 'Full name',
      form_company: 'Company / Firm',
      form_email: 'Email address',
      form_phone: 'Phone / WhatsApp',
      form_product: 'Application of interest',
      form_message: 'Message',
      form_submit: 'Send message'
    }
  };

  function getField(product, field) {
    if (currentLang === 'en' && product[`${field}_en`]) {
      return product[`${field}_en`];
    }
    return product[field];
  }

  function logoUrl(p) {
    return `/static/img/logos/${p.slug}.svg`;
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
            <a href="/${p.slug}/">
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
      btnInfo.href = `/${product.slug}/`;
      btnInfo.textContent = t.hero_more_info;
    }
    if (btnStore) {
      btnStore.href = `/tienda/`;
      btnStore.textContent = t.hero_get_license;
    }

    if (cardEl) {
      cardEl.classList.remove('animate-swap');
      void cardEl.offsetWidth;
      cardEl.classList.add('animate-swap');
    }

    if (logoBox) {
      logoBox.innerHTML = `<img src="${logoUrl(product)}" alt="${product.name}" style="height:150px;width:100%;object-fit:contain;">`;
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
        <span class="swatch-dot" style="background:#0B2853"></span>
        <span class="swatch-dot" style="background:${product.bridgeColor}"></span>
        <span class="swatch-dot" style="background:${product.accentColor}"></span>
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
            <img src="${logoUrl(p)}" alt="${p.name}" style="height:48px;width:auto;max-width:72%;object-fit:contain;">
            <span class="product-status">${getField(p, 'status')}</span>
          </div>
          <h3 style="margin:12px 0 8px;">${getField(p, 'tagline')}</h3>
          <p>${getField(p, 'description')}</p>
        </div>
        <div class="product-card-actions">
          <a href="/${p.slug}/" class="btn btn-outline">${t.card_more_info}</a>
          <a href="/tienda/" class="btn btn-primary" style="background:${p.accentColor};box-shadow:none;">${t.card_get_license}</a>
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
      toggle.addEventListener('click', () => menu.classList.toggle('active'));
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
      try {
        const res = await fetch('/api/contact/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: document.getElementById('cName')?.value || '',
            company: document.getElementById('cCompany')?.value || '',
            email: document.getElementById('cEmail')?.value || '',
            phone: document.getElementById('cPhone')?.value || '',
            product_interest: document.getElementById('cProduct')?.value || 'General',
            message: document.getElementById('cMessage')?.value || ''
          })
        });
        const data = await res.json();
        feedback.style.display = 'block';
        feedback.style.color = data.status === 'success' ? '#008B7A' : '#DC2626';
        feedback.textContent = data.message;
        if (data.status === 'success') form.reset();
      } catch (err) {
        feedback.style.display = 'block';
        feedback.style.color = '#DC2626';
        feedback.textContent = 'Error de conexión. Intenta nuevamente.';
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initHeroControls();
    initMobileMenu();
    initLanguageToggle();
    initContactForm();
  });
})();
