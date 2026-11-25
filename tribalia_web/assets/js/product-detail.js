(function () {
  const products = window.TRIBALIA_PRODUCTS || [];
  const productId = document.body.getAttribute('data-product-id');
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  function getLang() {
    return localStorage.getItem('tribalia_lang') || 'es';
  }

  function getVal(obj, field, lang) {
    if (lang === 'en' && obj[`${field}_en`]) return obj[`${field}_en`];
    return obj[field];
  }

  function getHref(slug) {
    const isLocal =
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.protocol === 'file:';
    return isLocal ? `${slug}.html` : `/${slug}`;
  }

  function renderDetail() {
    const lang = getLang();
    const isEn = lang === 'en';

    const hero = document.getElementById('detailHero');
    if (hero) {
      hero.style.setProperty('--active-accent', product.accentColor);
      hero.style.setProperty('--active-bridge', product.bridgeColor);
    }

    const backBtn = document.getElementById('detailBackBtn');
    const titleEl = document.getElementById('detailTitle');
    const taglineEl = document.getElementById('detailTagline');
    const descEl = document.getElementById('detailDesc');
    const logoImg = document.getElementById('detailLogo');
    const subdomainLink = document.getElementById('detailSubdomainLink');
    const accessBtn = document.getElementById('detailAccessBtn');
    const storeBtn = document.getElementById('detailStoreBtn');
    const featEyebrow = document.getElementById('detailFeatEyebrow');
    const featTitle = document.getElementById('detailFeatTitle');
    const featGrid = document.getElementById('detailFeaturesGrid');
    const mediaEyebrow = document.getElementById('detailMediaEyebrow');
    const mediaTitle = document.getElementById('detailMediaTitle');
    const videoBox = document.getElementById('detailVideoBox');
    const screensBox = document.getElementById('detailScreensBox');
    const otherTitle = document.getElementById('detailOtherTitle');
    const otherGrid = document.getElementById('detailOtherGrid');

    if (backBtn) backBtn.textContent = isEn ? '← Back to Ecosystem' : '← Volver al Ecosistema';
    if (titleEl) titleEl.textContent = product.name;
    if (taglineEl) taglineEl.textContent = getVal(product, 'tagline', lang);
    if (descEl) descEl.textContent = getVal(product, 'fullDescription', lang);

    if (logoImg) {
      logoImg.src = product.logo;
      logoImg.alt = product.name;
    }

    if (subdomainLink) {
      subdomainLink.href = product.subdomain;
      subdomainLink.textContent = product.subdomain.replace('https://', '');
    }

    if (accessBtn) {
      accessBtn.href = product.subdomain;
      accessBtn.textContent = isEn ? 'Launch Application ↗' : 'Ingresar a la Aplicación ↗';
    }

    if (storeBtn) {
      storeBtn.href = product.storeUrl;
      storeBtn.textContent = isEn
        ? 'Get License (Monthly / Annual)'
        : 'Adquirir Licencia (Mensual / Anual)';
    }

    if (featEyebrow) featEyebrow.textContent = isEn ? 'Key Capabilities' : 'Capacidades Clave';
    if (featTitle) {
      featTitle.textContent = isEn
        ? `What can you do with ${product.name}?`
        : `¿Qué puedes hacer con ${product.name}?`;
    }

    if (featGrid) {
      const features = getVal(product, 'features', lang) || [];
      featGrid.style.setProperty('--active-accent', product.accentColor);
      featGrid.innerHTML = features
        .map(
          (f) => `
        <article class="feature-detail-card">
          <h3>${f.title}</h3>
          <p>${f.desc}</p>
        </article>`
        )
        .join('');
    }

    if (mediaEyebrow) mediaEyebrow.textContent = isEn ? 'Demo & Interface' : 'Demostración e Interfaz';
    if (mediaTitle) {
      mediaTitle.textContent = isEn
        ? `See ${product.name} in action`
        : `Conoce ${product.name} en acción`;
    }

    if (videoBox) {
      if (product.videoUrl) {
        videoBox.innerHTML = `<iframe src="${product.videoUrl}" allowfullscreen title="${product.name}"></iframe>`;
      } else {
        videoBox.innerHTML = `
          <div style="width:64px;height:64px;border-radius:50%;background:rgba(255,255,255,0.14);display:grid;place-items:center;font-size:1.6rem;margin-bottom:14px;">▶</div>
          <h3 style="color:#FFFFFF;margin-bottom:8px;">${isEn ? 'Demo video coming soon' : 'Video demostrativo en preparación'}</h3>
          <p style="color:rgba(255,255,255,0.8);max-width:420px;font-size:0.92rem;">
            ${
              isEn
                ? `This space is ready to embed the walkthrough video for ${product.name}.`
                : `Este espacio está listo para incrustar el video explicativo de ${product.name}.`
            }
          </p>
        `;
      }
    }

    if (screensBox) {
      if (product.screenshots && product.screenshots.length > 0) {
        screensBox.innerHTML = product.screenshots
          .map(
            (src) =>
              `<img src="${src}" alt="${product.name}" style="width:100%;border-radius:12px;border:1px solid var(--border-light);">`
          )
          .join('');
      } else {
        screensBox.innerHTML = `
          <span style="font-size:2rem;">🖥️</span>
          <h4 style="color:var(--azul-noche);">${isEn ? 'Interface Screenshots' : 'Capturas de la Aplicación'}</h4>
          <p style="font-size:0.88rem;">
            ${
              isEn
                ? 'Upload real app screenshots to assets/img/screenshots/ to display them here.'
                : 'Cuando agregues capturas reales en assets/img/screenshots/, aparecerán en esta galería.'
            }
          </p>
          <a href="${product.subdomain}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding:8px 16px;font-size:0.82rem;">
            ${isEn ? 'Open Cloud Portal ↗' : 'Abrir Portal en la Nube ↗'}
          </a>
        `;
      }
    }

    if (otherTitle) {
      otherTitle.textContent = isEn
        ? 'Explore other Tribalia solutions'
        : 'Explora otras soluciones del Ecosistema Tribalia';
    }

    if (otherGrid) {
      const others = products.filter((p) => p.id !== product.id).slice(0, 3);
      otherGrid.innerHTML = others
        .map(
          (p) => `
        <article class="product-card" style="--card-accent: ${p.accentColor}">
          <div>
            <div class="product-card-top">
              <img src="${p.logo}" alt="${p.name}" style="height:44px;width:auto;max-width:72%;object-fit:contain;">
            </div>
            <h3 style="margin:12px 0 8px;">${getVal(p, 'tagline', lang)}</h3>
            <p>${getVal(p, 'description', lang)}</p>
          </div>
          <div class="product-card-actions">
            <a href="${getHref(p.slug)}" class="btn btn-outline">${isEn ? 'Learn more' : 'Más información'}</a>
            <a href="${p.storeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background:${p.accentColor};box-shadow:none;">${isEn ? 'Get license' : 'Adquirir licencia'}</a>
          </div>
        </article>`
        )
        .join('');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderDetail();
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        setTimeout(renderDetail, 0);
      });
    }
  });
})();
