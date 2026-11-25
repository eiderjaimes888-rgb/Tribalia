// Language Dictionary (Spanish / English)
const TRANSLATIONS = {
    es: {
        menu_inicio: "Inicio",
        menu_servicios: "Nuestros Servicios",
        sub_auditoria_ext: "Auditoría Externa",
        sub_asesoria_trib: "Asesoría Tributaria",
        sub_outsourcing_cont: "Outsourcing Contable",
        sub_outsourcing_nom: "Outsourcing de Nómina",
        sub_revisoria_fisc: "Revisoría Fiscal",
        menu_eleva: "Eleva",
        soft_contable: "Eleva Software Contable",
        soft_complementos: "Eleva Complementos",
        soft_rentas: "Eleva Rentas Naturales",
        soft_exogena: "Eleva Exógena",
        soft_legalizaciones: "Eleva Legalizaciones",
        menu_quienes: "Quiénes Somos",
        menu_que: "Qué Hacemos",
        menu_noticias: "Noticias",
        menu_revista: "Revista",
        menu_contacto: "Contacto",
        btn_acceso_clientes: "Acceso Clientes",
        ingreso_contable: "Ingreso Eleva Software Contable",
        ingreso_complementos: "Ingreso Eleva Complementos",
        ingreso_rentas: "Ingreso Eleva Rentas Naturales",
        ingreso_legalizaciones: "Ingreso Eleva Legalizaciones",
        descargas: "Centro de descargas",
        hero_tag: "Eficiencia Financiera",
        hero_title: "JB Consulting & Co y Eleva",
        hero_desc: "Su alianza estratégica en consultoría de impuestos, revisoría fiscal, outsourcing integral y el ecosistema inteligente de software financiero Eleva.",
        btn_licencia: "Adquirir Licencia",
        btn_explorar: "Servicios Outsourcing",
        mockup_title: "Ecosistema Activo",
        servicios_tag: "Servicios de Outsourcing",
        servicios_title: "Soluciones de Outsourcing Financiero",
        serv_aud_ext_title: "Auditoría Externa",
        serv_aud_ext_desc: "Evaluación objetiva y sistemática de sus estados financieros para garantizar transparencia ante terceros y juntas directivas.",
        serv_ases_trib_title: "Asesoría Tributaria",
        serv_ases_trib_desc: "Planeación impositiva estructural, conciliación exógena y preparación de requerimientos fiscales para mitigar riesgos DIAN.",
        serv_out_cont_title: "Outsourcing Contable",
        serv_out_cont_desc: "Gestión integral de libros, procesamiento de cuentas por pagar/cobrar y generación mensual de reportes bajo normas NIIF.",
        serv_out_trib_title: "Outsourcing Tributario",
        serv_out_trib_desc: "Liquidación oportuna de IVA, retención en la fuente, ICA e impuesto de renta corporativo simplificando sus procesos internos.",
        serv_out_nom_title: "Outsourcing de Nómina",
        serv_out_nom_desc: "Administración de personal, cálculo de seguridad social, prestaciones y emisión del documento de nómina electrónica.",
        serv_rev_fisc_title: "Revisoría Fiscal",
        serv_rev_fisc_desc: "Vigilancia integral e independiente del cumplimiento legal y estatutario de su empresa, dictaminando estados financieros.",
        solicitar_info: "Solicitar Información \u2192",
        soft_tag: "Herramientas Nube",
        soft_title: "Software y Herramientas Contables y Financieras",
        soft_desc_cont: "Automatización total del ciclo contable, facturación electrónica y reportes en tiempo real en la nube.",
        soft_desc_comp: "Módulos avanzados de conciliación y complementos de auditoría digital integrada.",
        soft_desc_rent: "Carga de balances y generación automatizada de declaraciones de renta de personas naturales.",
        soft_desc_exog: "Estructuración inteligente de formatos nacionales y validaciones previas de inconsistencias.",
        soft_desc_legal: "Gestión digital de viáticos, legalización de gastos de empleados y control presupuestal.",
        btn_comprar: "Comprar",
        editorial_tag: "Noticias y Revista",
        editorial_title: "Publicaciones y Novedades Tributarias",
        ultimas_noticias: "Últimos Artículos",
        leer_mas: "Leer Artículo \u2192",
        revista_corp: "Revista Corporativa",
        descargar_pdf: "Descargar PDF",
        form_email: "Correo Electrónico del Cliente",
        form_tarjeta: "Número de Tarjeta (Prueba)",
        form_vencimiento: "Vencimiento",
        form_cvc: "CVC",
        btn_simular_pago: "Simular Pago Exitoso",
        contact_tag: "Contacto corporativo",
        contact_title: "Hablemos de su empresa",
        contact_desc: "Agende una llamada con nuestros consultores expertos para estructurar el outsourcing ideal de su compañía.",
        lbl_nombre: "Nombre completo",
        lbl_empresa: "Empresa",
        lbl_correo: "Correo Corporativo",
        lbl_mensaje: "Requerimiento o Mensaje",
        btn_enviar: "Enviar Mensaje",
        derechos: "Todos los derechos reservados."
    },
    en: {
        menu_inicio: "Home",
        menu_servicios: "Our Services",
        sub_auditoria_ext: "External Audit",
        sub_asesoria_trib: "Tax Advisory",
        sub_outsourcing_cont: "Accounting Outsourcing",
        sub_outsourcing_nom: "Payroll Outsourcing",
        sub_revisoria_fisc: "Statutory Audit",
        menu_eleva: "Eleva",
        soft_contable: "Eleva Accounting Software",
        soft_complementos: "Eleva Add-ons",
        soft_rentas: "Eleva Personal Taxes",
        soft_exogena: "Eleva Local Taxes",
        soft_legalizaciones: "Eleva Expenses Tracking",
        menu_quienes: "About Us",
        menu_que: "What We Do",
        menu_noticias: "News",
        menu_revista: "Magazine",
        menu_contacto: "Contact",
        btn_acceso_clientes: "Client Access",
        ingreso_contable: "Login Eleva Accounting",
        ingreso_complementos: "Login Eleva Add-ons",
        ingreso_rentas: "Login Eleva Personal Taxes",
        ingreso_legalizaciones: "Login Eleva Expenses",
        descargas: "Download Center",
        hero_tag: "Financial Efficiency",
        hero_title: "JB Consulting & Co & Eleva",
        hero_desc: "Your strategic partner in tax consulting, statutory auditing, comprehensive outsourcing, and the Eleva intelligent financial software suite.",
        btn_licencia: "Get License",
        btn_explorar: "Outsourcing Services",
        mockup_title: "Active Ecosystem",
        servicios_tag: "Outsourcing Services",
        servicios_title: "Financial Outsourcing Solutions",
        serv_aud_ext_title: "External Audit",
        serv_aud_ext_desc: "Objective and systematic evaluation of your financial statements to guarantee transparency to third parties and boards.",
        serv_ases_trib_title: "Tax Advisory",
        serv_ases_trib_desc: "Structural tax planning, local tax reconciliation, and tax filings processing to mitigate compliance risks.",
        serv_out_cont_title: "Accounting Outsourcing",
        serv_out_cont_desc: "Comprehensive general ledger processing, accounts payable/receivable, and monthly reporting under IFRS standards.",
        serv_out_trib_title: "Tax Outsourcing",
        serv_out_trib_desc: "Timely settlement of VAT, withholding tax, local taxes, and corporate tax simplifying your internal tasks.",
        serv_out_nom_title: "Payroll Outsourcing",
        serv_out_nom_desc: "Personnel management, security social calculations, benefits, and electronic payroll file issuance.",
        serv_rev_fisc_title: "Revisoría Fiscal",
        serv_rev_fisc_desc: "Independent and comprehensive oversight of your company's legal and statutory compliance, auditing statements.",
        solicitar_info: "Request Information \u2192",
        soft_tag: "Cloud Tools",
        soft_title: "Accounting and Financial Software Tools",
        soft_desc_cont: "Total automation of the accounting cycle, electronic invoicing, and real-time cloud reporting.",
        soft_desc_comp: "Advanced bank reconciliation modules and integrated digital audit add-ons.",
        soft_desc_rent: "Upload balance sheet files and automatically generate personal income tax filings.",
        soft_desc_exog: "Intelligent local tax report structures with validation of inconsistencies.",
        soft_desc_legal: "Digital management of business travel, employees expenses filings, and budget control.",
        btn_comprar: "Buy Now",
        editorial_tag: "News and Magazine",
        editorial_title: "Tax News & Publications",
        ultimas_noticias: "Latest Articles",
        leer_mas: "Read Article \u2192",
        revista_corp: "Corporate Magazine",
        descargar_pdf: "Download PDF",
        form_email: "Customer Email Address",
        form_tarjeta: "Credit Card Number (Test)",
        form_vencimiento: "Expiry Date",
        form_cvc: "CVC",
        btn_simular_pago: "Simulate Success Payment",
        contact_tag: "Corporate Contact",
        contact_title: "Let's talk about your company",
        contact_desc: "Schedule a brief call with our senior consultants to structure the ideal outsourcing plan.",
        lbl_nombre: "Full Name",
        lbl_empresa: "Company Name",
        lbl_correo: "Corporate Email",
        lbl_mensaje: "Message or Requirements",
        btn_enviar: "Send Message",
        derechos: "All rights reserved."
    }
};

let currentLanguage = 'es';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    document.getElementById('langBtn').textContent = currentLanguage === 'es' ? 'EN' : 'ES';
    
    document.querySelectorAll('[data-tr]').forEach(element => {
        const translationKey = element.getAttribute('data-tr');
        if (TRANSLATIONS[currentLanguage][translationKey]) {
            element.textContent = TRANSLATIONS[currentLanguage][translationKey];
        }
    });
}

// Mobile Menu Control
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Dropdown click handler (in addition to CSS Hover for Desktop)
document.querySelectorAll('.has-dropdown').forEach(dropdownItem => {
    // Clicking the item toggles the menu display actively
    const trigger = dropdownItem.querySelector('.nav-link') || dropdownItem.querySelector('button');
    if (trigger) {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Close other dropdowns
            document.querySelectorAll('.has-dropdown').forEach(other => {
                if (other !== dropdownItem) {
                    other.classList.remove('open-active');
                    const submenu = other.querySelector('.dropdown-menu');
                    if (submenu) submenu.style.display = 'none';
                }
            });

            dropdownItem.classList.toggle('open-active');
            const menu = dropdownItem.querySelector('.dropdown-menu');
            if (menu) {
                const isOpened = dropdownItem.classList.contains('open-active');
                menu.style.display = isOpened ? 'block' : 'none';
                menu.style.opacity = isOpened ? '1' : '0';
                menu.style.visibility = isOpened ? 'visible' : 'hidden';
            }
        });
    }
});

// Close all active dropdowns if clicked elsewhere
window.addEventListener('click', () => {
    document.querySelectorAll('.has-dropdown').forEach(item => {
        item.classList.remove('open-active');
        const menu = item.querySelector('.dropdown-menu');
        if (menu) {
            // Restore back to hover mode default styles
            menu.style.display = '';
            menu.style.opacity = '';
            menu.style.visibility = '';
        }
    });
});

// Checkout simulation modal logic
const purchaseModal = document.getElementById('purchaseModal');
const planTypeInput = document.getElementById('planType');
const modalTitle = document.getElementById('modalTitle');
const purchaseForm = document.getElementById('purchaseForm');
const loadingState = document.getElementById('loadingState');
const resultState = document.getElementById('resultState');

const MOCK_LICENSE_TYPES = {
    monthly: {
        id: "d9b23b1c-9b64-4bf8-b99f-0ff7686529e1",
        name: "Suscripción Mensual",
        amount_cents: 14900000
    },
    annual: {
        id: "a310c85c-43f1-4df2-a3bf-5683935db552",
        name: "Plan Anual Premium",
        amount_cents: 143000000
    }
};

function triggerPurchase(plan) {
    if (!purchaseModal) return;
    
    purchaseForm.style.display = 'block';
    loadingState.style.display = 'none';
    resultState.style.display = 'none';
    resultState.innerHTML = '';
    
    planTypeInput.value = plan;
    modalTitle.textContent = `Adquirir ${MOCK_LICENSE_TYPES[plan].name}`;
    purchaseModal.classList.add('active');
}

function closePurchaseModal() {
    purchaseModal.classList.remove('active');
}

async function submitMockPurchase(event) {
    event.preventDefault();
    
    const email = document.getElementById('customerEmail').value;
    const plan = planTypeInput.value;
    const planData = MOCK_LICENSE_TYPES[plan];
    
    if (!email || !planData) return;
    
    purchaseForm.style.display = 'none';
    loadingState.style.display = 'block';
    
    const randomReference = 'REF-' + Math.random().toString(36).substring(2, 11).toUpperCase();
    
    const payload = {
        event: "transaction.updated",
        gateway: "WompiSim",
        reference: randomReference,
        amount_in_cents: planData.amount_cents,
        currency: "COP",
        status: "APPROVED",
        customer_email: email,
        license_type_id: planData.id
    };
    
    try {
        const response = await fetch('/api/v1/payments/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        
        const data = await response.json();
        
        loadingState.style.display = 'none';
        resultState.style.display = 'block';
        
        if (response.ok && data.status === "success") {
            resultState.innerHTML = `
                <div class="success-card">
                    <h5>¡Pago Procesado Exitosamente!</h5>
                    <p style="margin-bottom: 12px; font-size: 0.95rem;">Las credenciales y clave de licencia han sido autogeneradas:</p>
                    <div style="text-align: left; font-size: 0.85rem;">
                        <strong>Clave de Licencia:</strong>
                        <div class="credential-item">${data.license_key}</div>
                        <strong>Usuario de Acceso:</strong>
                        <div class="credential-item">${data.username}</div>
                        <strong>Contraseña Temporal:</strong>
                        <div class="credential-item"><i>Enviada a ${email}</i></div>
                    </div>
                    <button onclick="closePurchaseModal()" class="btn btn-secondary" style="margin-top: 16px; width:100%;">Cerrar Ventana</button>
                </div>
            `;
        } else {
            showFallbackSuccess(email, planData);
        }
        
    } catch (error) {
        console.warn("Backend API not reachable. Simulating offline provisioning...", error);
        setTimeout(() => {
            loadingState.style.display = 'none';
            resultState.style.display = 'block';
            showFallbackSuccess(email, planData);
        }, 1200);
    }
}

function showFallbackSuccess(email, planData) {
    const mockLicenseKey = 'ELEVA-' + Array.from({length: 4}, () => Math.random().toString(36).substring(2, 6).toUpperCase()).join('-');
    const mockUser = email.split('@')[0] + '_dev';
    
    resultState.innerHTML = `
        <div class="success-card">
            <h5>¡Simulación Exitosa!</h5>
            <p style="margin-bottom: 12px; font-size: 0.95rem;">El sistema registró el pago. Tus credenciales son:</p>
            <div style="text-align: left; font-size: 0.85rem;">
                <strong>Clave de Licencia:</strong>
                <div class="credential-item">${mockLicenseKey}</div>
                <strong>Usuario de Acceso:</strong>
                <div class="credential-item">${mockUser}</div>
                <strong>Plan Adquirido:</strong>
                <div class="credential-item">${planData.name}</div>
            </div>
            <button onclick="closePurchaseModal()" class="btn btn-secondary" style="margin-top: 16px; width:100%;">Cerrar Ventana</button>
        </div>
    `;
}

window.addEventListener('click', (event) => {
    if (event.target === purchaseModal) closePurchaseModal();
});

// Article Details Popup Modal Controls
const articleDetailModal = document.getElementById('articleDetailModal');
const articleModalTitle = document.getElementById('articleModalTitle');
const articleModalDate = document.getElementById('articleModalDate');
const articleModalContent = document.getElementById('articleModalContent');

document.querySelectorAll('.read-article-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const title = trigger.getAttribute('data-title');
        const date = trigger.getAttribute('data-date');
        const content = trigger.getAttribute('data-content');
        
        if (articleModalTitle) articleModalTitle.textContent = title;
        if (articleModalDate) articleModalDate.textContent = date;
        if (articleModalContent) articleModalContent.textContent = content;
        
        if (articleDetailModal) articleDetailModal.classList.add('active');
    });
});

function closeArticleModal() {
    if (articleDetailModal) articleDetailModal.classList.remove('active');
}

window.addEventListener('click', (event) => {
    if (event.target === articleDetailModal) closeArticleModal();
});

/* ==========================================================================
   Interactive Subpages & Construction Section Controller
   ========================================================================== */

function openSubpage(pageName) {
    const overlay = document.getElementById('subpageOverlay');
    const content = document.getElementById('subpageContent');
    if (!overlay || !content) return;
    
    let html = '';
    
    if (pageName === 'soft_contable' || pageName === 'soft_rentas' || pageName === 'soft_legalizaciones' || pageName === 'revista' || pageName === 'descargas') {
        let titleName = 'Módulo / Opción';
        if (pageName === 'soft_contable') titleName = 'Eleva Software Contable';
        if (pageName === 'soft_rentas') titleName = 'Eleva Rentas Naturales';
        if (pageName === 'soft_legalizaciones') titleName = 'Eleva Legalizaciones';
        if (pageName === 'revista') titleName = 'Revista Corporativa JB';
        if (pageName === 'descargas') titleName = 'Centro de Descargas';
        
        html = `
            <div class="dev-view">
                <div class="dev-icon">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: #f59e0b;">
                        <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
                    </svg>
                </div>
                <h2>${titleName}</h2>
                <h3 style="color: #f59e0b; margin-bottom: 20px; font-weight: 600; font-size: 1.25rem;">Sección en Desarrollo Activo</h3>
                <p>Nos disculpamos por las molestias. Esta opción de nuestro ecosistema financiero inteligente se encuentra en proceso de implementación para brindarle la mejor calidad y cumplimiento.</p>
                <button onclick="closeSubpage()" class="btn btn-primary" style="padding: 12px 36px; border-radius: 8px; font-size: 0.95rem;">Volver al Inicio</button>
            </div>
        `;
    } else if (pageName === 'soft_complementos') {
        html = `
            <div class="info-view" style="max-width: 1000px; margin: 0 auto;">
                <!-- 1. SECCIÓN HERO / INTRODUCCIÓN -->
                <div style="text-align: center; margin-bottom: 50px;">
                    <span class="badge" style="background: var(--brand-eleva-cyan); color: #fff; padding: 6px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; margin-bottom: 16px;">Desarrollado por JB Consulting & Co.</span>
                    <h2 style="font-size: 2.6rem; line-height: 1.15; color: var(--brand-jb-navy); margin-bottom: 20px; font-family: var(--font-heading); font-weight: 800;">Eleva Complementos: El fin de la operatividad contable.</h2>
                    <p style="font-size: 1.12rem; line-height: 1.65; color: var(--text-secondary); max-width: 800px; margin: 0 auto 30px;">Creada para liberar el verdadero potencial de los contadores. Eleva Complementos es una suite de herramientas de software enfocada en automatizar los procesos más lentos y propensos a errores. Desde conciliaciones bancarias hasta auditorías complejas de la DIAN e integración con Inteligencia Artificial. Deja de digitar datos y empieza a liderar la estrategia financiera.</p>
                    
                    <!-- Hero Capture -->
                    <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 16px; padding: 10px; box-shadow: 0 20px 40px -15px rgba(0,0,0,0.06); overflow: hidden; max-width: 850px; margin: 0 auto 20px;">
                        <img src="/static/img/eleva_dashboard.png?v=3.5" alt="Dashboard de Eleva" style="width: 100%; height: auto; border-radius: 10px; display: block; object-fit: cover;">
                    </div>
                </div>

                <!-- 2. SECCIÓN DE PLANES DE PRECIOS (PRICING CARDS) -->
                <h3 style="text-align: center; font-size: 2rem; color: var(--brand-jb-navy); margin-bottom: 20px; font-family: var(--font-heading); font-weight: 700;">Planes de Licenciamiento</h3>
                
                <!-- Billing Switcher Toggle -->
                <div style="display: flex; justify-content: center; align-items: center; gap: 14px; margin-bottom: 40px;">
                    <span id="billing-monthly-lbl" style="font-weight: 700; color: var(--brand-jb-navy); font-size: 1rem; transition: var(--transition-smooth);">Mensual</span>
                    <label style="position: relative; display: inline-block; width: 60px; height: 30px; cursor: pointer;">
                        <input type="checkbox" id="billing-toggle" style="opacity: 0; width: 0; height: 0;" onchange="toggleBillingPeriod(this.checked)">
                        <span style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: var(--brand-eleva-blue); transition: 0.4s; border-radius: 34px; display: block;">
                            <span id="billing-slider-knob" style="position: absolute; content: ''; height: 22px; width: 22px; left: 4px; bottom: 4px; background-color: white; transition: 0.4s; border-radius: 50%; display: block;"></span>
                        </span>
                    </label>
                    <span id="billing-annual-lbl" style="font-weight: 500; color: var(--text-muted); font-size: 1rem; transition: var(--transition-smooth);">Anual <span style="background: rgba(34, 197, 94, 0.12); color: #16a34a; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 800; margin-left: 4px;">Ahorra hasta 10%</span></span>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 28px; align-items: stretch; margin-bottom: 80px;">
                    <!-- CARD 1: PLAN PLUS -->
                    <div class="card" style="border-top: 5px solid #22c55e; display: flex; flex-direction: column; justify-content: space-between; position: relative; padding: 32px 24px;">
                        <div>
                            <span style="font-size: 0.75rem; font-weight: 800; color: #22c55e; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 8px;">Plan Plus 🟢</span>
                            <h4 style="font-size: 1.4rem; color: var(--brand-jb-navy); margin-bottom: 8px;">Herramientas Esenciales</h4>
                            <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.45;">El plan de entrada ideal para blindar tus procesos estándar de conciliación y facturación.</p>
                            <div id="price-plus" style="font-size: 2rem; font-weight: 800; color: var(--brand-jb-navy); margin-bottom: 24px; font-family: var(--font-heading); transition: var(--transition-smooth);">$59.000 <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">/ mes</span></div>
                            
                            <ul style="list-style: none; margin-bottom: 30px; padding: 0;">
                                <li style="margin-bottom: 12px; font-size: 0.9rem; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                                    <span style="color: #22c55e; font-weight: bold; flex-shrink: 0;">✓</span>
                                    <span><strong>Conciliación Bancaria:</strong> Cruce automatizado de extractos vs auxiliares con detección inteligente de discrepancias.</span>
                                </li>
                                <li style="margin-bottom: 12px; font-size: 0.9rem; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                                    <span style="color: #22c55e; font-weight: bold; flex-shrink: 0;">✓</span>
                                    <span><strong>Auditoría Micrositio:</strong> Validación de facturación electrónica DIAN contra tu contabilidad interna.</span>
                                </li>
                                <li style="margin-bottom: 12px; font-size: 0.9rem; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                                    <span style="color: #22c55e; font-weight: bold; flex-shrink: 0;">✓</span>
                                    <span><strong>Procesador de Facturas (XML):</strong> Extracción masiva y cruce de datos XML con reportes DIAN/Kontalid.</span>
                                </li>
                                <li style="margin-bottom: 12px; font-size: 0.9rem; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                                    <span style="color: #22c55e; font-weight: bold; flex-shrink: 0;">✓</span>
                                    <span><strong>Detalle por Concepto:</strong> Desglose exacto de cada ítem facturado (cantidades, descripción, precio unitario).</span>
                                </li>
                            </ul>
                        </div>
                        <button onclick="selectPlan('Plus')" class="btn btn-secondary" style="width: 100%; border-color: #22c55e; color: #16a34a; font-weight: 700;">Comenzar con Plus</button>
                    </div>

                    <!-- CARD 2: PLAN PRO -->
                    <div class="card" style="border-top: 5px solid var(--brand-eleva-blue); display: flex; flex-direction: column; justify-content: space-between; position: relative; padding: 32px 24px; box-shadow: 0 12px 30px rgba(10, 60, 139, 0.08); border-color: var(--brand-eleva-blue);">
                        <div style="position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--brand-eleva-blue); color: #fff; padding: 3px 16px; border-radius: 20px; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 4px 10px rgba(10, 60, 139, 0.2);">Más Popular</div>
                        <div>
                            <span style="font-size: 0.75rem; font-weight: 800; color: var(--brand-eleva-blue); text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 8px; margin-top: 6px;">Plan Pro 🔵</span>
                            <h4 style="font-size: 1.4rem; color: var(--brand-jb-navy); margin-bottom: 8px;">Gestión Avanzada y Tributaria</h4>
                            <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.45;">Automatización profunda. Auditoría laboral y proyección fiscal para contadores estratégicos.</p>
                            <div id="price-pro" style="font-size: 2rem; font-weight: 800; color: var(--brand-jb-navy); margin-bottom: 24px; font-family: var(--font-heading); transition: var(--transition-smooth);">$102.000 <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">/ mes</span></div>
                            
                            <ul style="list-style: none; margin-bottom: 30px; padding: 0;">
                                <li style="margin-bottom: 12px; font-size: 0.82rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px;">Todo lo del Plan Plus, y además:</li>
                                <li style="margin-bottom: 12px; font-size: 0.9rem; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                                    <span style="color: var(--brand-eleva-blue); font-weight: bold; flex-shrink: 0;">✓</span>
                                    <span><strong>Nómina 360° Auditoría:</strong> Conciliación triple automática (Contabilidad vs PILA vs Nómina Electrónica).</span>
                                </li>
                                <li style="margin-bottom: 12px; font-size: 0.9rem; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                                    <span style="color: var(--brand-eleva-blue); font-weight: bold; flex-shrink: 0;">✓</span>
                                    <span><strong>Generador & Liquidador de Nómina:</strong> Cálculo mensual y estructuración del archivo electrónico mapeado con conceptos oficiales.</span>
                                </li>
                                <li style="margin-bottom: 12px; font-size: 0.9rem; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                                    <span style="color: var(--brand-eleva-blue); font-weight: bold; flex-shrink: 0;">✓</span>
                                    <span><strong>Proyección de Renta PJ:</strong> Planeación fiscal proyectada a diciembre usando regresión lineal.</span>
                                </li>
                                <li style="margin-bottom: 12px; font-size: 0.9rem; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                                    <span style="color: var(--brand-eleva-blue); font-weight: bold; flex-shrink: 0;">✓</span>
                                    <span><strong>Extracción de Facturas (ZIP y PDF):</strong> Carga masiva y lectura automática de formatos oficiales DIAN.</span>
                                </li>
                                <li style="margin-bottom: 12px; font-size: 0.9rem; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                                    <span style="color: var(--brand-eleva-blue); font-weight: bold; flex-shrink: 0;">✓</span>
                                    <span><strong>Papeles y Retención (F350):</strong> Liquidación mensual automatizada y borrador del Formulario 350.</span>
                                </li>
                            </ul>
                        </div>
                        <button onclick="selectPlan('Pro')" class="btn btn-primary" style="width: 100%; font-weight: 700;">Elegir Plan Pro</button>
                    </div>

                    <!-- CARD 3: PLAN ELITE -->
                    <div class="card" style="border-top: 5px solid #d97706; display: flex; flex-direction: column; justify-content: space-between; position: relative; padding: 32px 24px;">
                        <div>
                            <span style="font-size: 0.75rem; font-weight: 800; color: #d97706; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 8px;">Plan Elite 👑</span>
                            <h4 style="font-size: 1.4rem; color: var(--brand-jb-navy); margin-bottom: 8px;">Inteligencia Artificial y Extracción</h4>
                            <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.45;">El máximo poder tecnológico. Visión artificial y procesamiento de lenguaje natural integrados.</p>
                            <div id="price-elite" style="font-size: 2rem; font-weight: 800; color: var(--brand-jb-navy); margin-bottom: 24px; font-family: var(--font-heading); transition: var(--transition-smooth);">$205.000 <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">/ mes</span></div>
                            
                            <ul style="list-style: none; margin-bottom: 30px; padding: 0;">
                                <li style="margin-bottom: 12px; font-size: 0.82rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px;">Acceso total e ilimitado a todas las funciones PRO, más:</li>
                                <li style="margin-bottom: 12px; font-size: 0.9rem; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                                    <span style="color: #d97706; font-weight: bold; flex-shrink: 0;">✓</span>
                                    <span><strong>Extractor AI PDF:</strong> Conversión avanzada de extractos bancarios PDF (incluso escaneos complejos) a Excel editable mediante visión artificial de Gemini AI.</span>
                                </li>
                                <li style="margin-bottom: 12px; font-size: 0.9rem; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                                    <span style="color: #d97706; font-weight: bold; flex-shrink: 0;">✓</span>
                                    <span><strong>Análisis de Conceptos IA:</strong> Clasificación automática de descripciones de facturas (Compras vs Servicios) usando procesamiento de lenguaje natural (NLP).</span>
                                </li>
                            </ul>
                        </div>
                        <button onclick="selectPlan('Elite')" class="btn btn-primary" style="width: 100%; background: linear-gradient(135deg, #b45309 0%, #d97706 100%); border: none; font-weight: 700;">Obtener Poder Elite</button>
                    </div>
                </div>

                <!-- 3. SECCIÓN DE CIERRE (MUESTRA DE TECNOLOGÍA) -->
                <h3 style="text-align: center; font-size: 2rem; color: var(--brand-jb-navy); margin-bottom: 40px; font-family: var(--font-heading); font-weight: 700;">Tecnología Diseñada para el Entorno Financiero</h3>
                
                <div style="display: flex; flex-direction: column; gap: 64px; margin-bottom: 50px;">
                    <!-- Bloque A -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; align-items: center;">
                        <div>
                            <h4 style="font-size: 1.8rem; color: var(--brand-jb-navy); margin-bottom: 16px; font-family: var(--font-heading); font-weight: 700;">Precisión Tributaria</h4>
                            <p style="font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 20px;">Nuestras herramientas de conciliación de nómina triple (Nómina 360°) cruzan en segundos los registros auxiliares con las planillas PILA y los XML reportados a la DIAN. Identificamos discrepancias decimales de manera oportuna, previniendo fiscalizaciones de la UGPP y asegurando que tu declaración sea impecable.</p>
                        </div>
                        <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 16px; padding: 10px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.03);">
                            <img src="/static/img/nomina_auditing.png?v=3.5" alt="Nómina 360 o Renta PJ" style="width: 100%; height: auto; border-radius: 12px; display: block; object-fit: cover;">
                        </div>
                    </div>

                    <!-- Bloque B -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; align-items: center;">
                        <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 16px; padding: 10px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.03); order: 2; order: unset;">
                            <img src="/static/img/ai_extractor.png?v=3.5" alt="Extractor AI PDF" style="width: 100%; height: auto; border-radius: 12px; display: block; object-fit: cover;">
                        </div>
                        <div>
                            <h4 style="font-size: 1.8rem; color: var(--brand-jb-navy); margin-bottom: 16px; font-family: var(--font-heading); font-weight: 700;">Inteligencia Artificial aplicada a tu Contabilidad</h4>
                            <p style="font-size: 1.05rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 20px;">Olvídate de transcribir extractos bancarios de forma manual. Con la integración de Gemini AI, nuestra suite de extracción lee PDFs de cualquier entidad bancaria, procesa la información mediante visión computacional avanzada y la exporta a un libro Excel perfectamente estructurado y clasificado para su contabilización instantánea.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (pageName === 'quienes_somos') {
        html = `
            <div class="info-view">
                <h2>Quiénes Somos</h2>
                <div class="info-subtitle">El cruce exacto entre la experiencia financiera y la evolución tecnológica.</div>
                
                <p class="info-text">En JB CONSULTING & CO, entendemos que la tranquilidad fiscal y el crecimiento financiero de una empresa no se logran mirando al pasado, sino anticipándose al futuro. Somos una firma consultora de alto nivel especializada en el área financiera, tributaria y contable, dedicada a estructurar, proteger y optimizar el capital de nuestros clientes a través de un gobierno corporativo sólido y estrategias a la medida.</p>
                
                <p class="info-text">Sabemos que en el mundo actual, la experiencia técnica necesita velocidad y precisión. Por eso creamos ELEVA, nuestra división interna de desarrollo de software y automatización. ELEVA es el motor tecnológico que potencia nuestra consultoría, transformando procesos operativos complejos en sistemas inteligentes.</p>
                
                <div class="info-highlight-box">
                    <h3 style="font-family: var(--font-heading); font-weight: 700;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        Una Sola Visión
                    </h3>
                    <p>No somos dos empresas; somos una sola visión. Al unir el conocimiento normativo profundo con inteligencia artificial y automatización de vanguardia, eliminamos el error humano, optimizamos el tiempo y le damos a tu empresa la claridad necesaria para tomar decisiones rentables y seguras.</p>
                </div>
            </div>
        `;
    } else if (pageName === 'que_hacemos') {
        html = `
            <div class="info-view">
                <h2>Qué Hacemos</h2>
                <div class="info-subtitle">Consultoría que dirige. Tecnología que acelera.</div>
                
                <p class="info-text">Nuestro portafolio de servicios está diseñado para cubrir el ciclo financiero completo de tu empresa, integrando la asesoría experta con herramientas tecnológicas de última generación.</p>
                
                <h3 class="info-section-title">Consultoría y Estrategia Corporativa (JB CONSULTING & CO)</h3>
                <p class="info-text" style="font-weight: 600; margin-bottom: 24px; color: var(--brand-jb-navy);">Nos encargamos de que tu empresa opere bajo los más altos estándares de cumplimiento y rentabilidad.</p>
                <div class="info-grid-2col" style="margin-bottom: 30px;">
                    <div class="info-card">
                        <h4>Gestión y Planeación Tributaria</h4>
                        <p>Diseñamos estrategias fiscales eficientes y garantizamos el cumplimiento normativo impecable ante las entidades de control.</p>
                    </div>
                    <div class="info-card">
                        <h4>Dirección Financiera y Contable</h4>
                        <p>Estructuramos procesos claros para la toma de decisiones, desde la auditoría interna hasta la consolidación de estados financieros.</p>
                    </div>
                    <div class="info-card" style="grid-column: 1 / -1;">
                        <h4>Gobierno Corporativo</h4>
                        <p>Blindamos tu organización mediante la implementación de buenas prácticas, gestión de riesgos y estructuración de políticas empresariales sólidas.</p>
                    </div>
                </div>

                <h3 class="info-section-title">Innovación y Automatización (División ELEVA)</h3>
                <p class="info-text" style="font-weight: 600; margin-bottom: 24px; color: var(--brand-jb-navy);">Desarrollamos soluciones de software exclusivas para el ecosistema financiero, eliminando cuellos de botella operativos.</p>
                <div class="info-grid-2col">
                    <div class="info-card">
                        <h4>Automatización de Procesos Contables</h4>
                        <p>Creamos herramientas (mediante integración de IA y macros avanzadas) que automatizan desde la conciliación bancaria hasta la estructuración de formatos complejos.</p>
                    </div>
                    <div class="info-card">
                        <h4>Procesamiento Inteligente de Datos</h4>
                        <p>Convertimos grandes volúmenes de información fiscal y financiera en datos limpios y procesables en cuestión de segundos.</p>
                    </div>
                    <div class="info-card" style="grid-column: 1 / -1;">
                        <h4>Desarrollo a la Medida</h4>
                        <p>Si un proceso financiero de tu empresa es repetitivo, lento o propenso a errores, ELEVA programa la solución para digitalizarlo y optimizarlo.</p>
                    </div>
                </div>
            </div>
        `;
    } else if (pageName === 'auditoria_ext') {
        html = `
            <div class="info-view">
                <h2>Auditoría Externa</h2>
                <div class="info-subtitle">Consultoría que dirige. Tecnología que acelera.</div>
                
                <p class="info-text">Nuestro portafolio de servicios está diseñado para cubrir el ciclo financiero completo de tu empresa, integrando la asesoría experta con herramientas tecnológicas de última generación.</p>
                
                <h3 class="info-section-title">Consultoría y Estrategia Corporativa (JB CONSULTING & CO)</h3>
                <p class="info-text" style="font-weight: 600; margin-bottom: 24px; color: var(--brand-jb-navy);">Nos encargamos de que tu empresa opere bajo los más altos estándares de cumplimiento y rentabilidad.</p>
                <div class="info-grid-2col" style="margin-bottom: 30px;">
                    <div class="info-card">
                        <h4>Gestión y Planeación Tributaria</h4>
                        <p>Diseñamos estrategias fiscales eficientes y garantizamos el cumplimiento normativo impecable ante las entidades de control.</p>
                    </div>
                    <div class="info-card">
                        <h4>Dirección Financiera y Contable</h4>
                        <p>Estructuramos procesos claros para la toma de decisiones, desde la auditoría interna hasta la consolidación de estados financieros.</p>
                    </div>
                    <div class="info-card" style="grid-column: 1 / -1;">
                        <h4>Gobierno Corporativo</h4>
                        <p>Blindamos tu organización mediante la implementación de buenas prácticas, gestión de riesgos y estructuración de políticas empresariales sólidas.</p>
                    </div>
                </div>

                <h3 class="info-section-title">Innovación y Automatización (División ELEVA)</h3>
                <p class="info-text" style="font-weight: 600; margin-bottom: 24px; color: var(--brand-jb-navy);">Desarrollamos soluciones de software exclusivas para el ecosistema financiero, eliminando cuellos de botella operativos.</p>
                <div class="info-grid-2col">
                    <div class="info-card">
                        <h4>Automatización de Procesos Contables</h4>
                        <p>Creamos herramientas (mediante integración de IA y macros avanzadas) que automatizan desde la conciliación bancaria hasta la estructuración de formatos complejos.</p>
                    </div>
                    <div class="info-card">
                        <h4>Procesamiento Inteligente de Datos</h4>
                        <p>Convertimos grandes volúmenes de información fiscal y financiera en datos limpios y procesables en cuestión de segundos.</p>
                    </div>
                    <div class="info-card" style="grid-column: 1 / -1;">
                        <h4>Desarrollo a la Medida</h4>
                        <p>Si un proceso financiero de tu empresa es repetitivo, lento o propenso a errores, ELEVA programa la solución para digitalizarlo y optimizarlo.</p>
                    </div>
                </div>
                
                <div style="margin-top: 40px; text-align: center; border-top: 1px solid var(--border-color); padding-top: 30px;">
                    <button onclick="closeSubpage(); window.location.hash = ''; setTimeout(() => { document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' }); }, 300);" class="btn btn-primary" style="padding: 12px 36px; font-size: 1rem; display: inline-flex; align-items: center; gap: 10px; border-radius: 8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Agendar Llamada / Solicitar Cotización
                    </button>
                </div>
            </div>
        `;
    } else if (pageName === 'asesoria_trib') {
        html = `
            <div class="info-view">
                <h2>Asesoría Tributaria</h2>
                <div class="info-subtitle">Blindaje fiscal estratégico. Cumplimiento impulsado por la automatización.</div>
                
                <p class="info-text">En el entorno corporativo, el pago de impuestos no debe ser un ejercicio de apagar incendios a fin de mes; debe ser el resultado de una estrategia planificada. La carga impositiva es uno de los mayores factores de riesgo para el flujo de caja, y gestionarla correctamente es un pilar fundamental del Buen Gobierno Corporativo.</p>
                
                <p class="info-text">En JB CONSULTING & CO, transformamos la carga tributaria en una ventaja competitiva. Diseñamos estructuras fiscales rigurosas y a la medida que protegen la rentabilidad de tu empresa, garantizando un cumplimiento normativo impecable frente a la DIAN y las secretarías de hacienda municipales.</p>
                
                <div class="info-highlight-box">
                    <h3 style="font-family: var(--font-heading); font-weight: 700;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        La Ventaja Tecnológica: El factor ELEVA
                    </h3>
                    <p>El mayor riesgo en el cumplimiento tributario —especialmente en reportes densos como la Información Exógena— es el error humano al manipular bases de datos. Con ELEVA, eliminamos ese riesgo. Nuestra división tecnológica ha desarrollado macros avanzadas y algoritmos que procesan, concilian y cruzan grandes volúmenes de datos financieros en segundos. Generamos los archivos XML y validamos la consistencia de la información de manera automatizada, asegurando que cada declaración de IVA, Retención o ICA esté libre de inconsistencias antes de ser presentada.</p>
                </div>

                <h3 class="info-section-title">¿Qué incluye nuestra Asesoría Tributaria?</h3>
                <div class="info-grid">
                    <div class="info-card" style="margin-bottom: 12px;">
                        <h4>Planeación Tributaria Estratégica</h4>
                        <p>Analizamos tu modelo de negocio para optimizar la carga fiscal dentro del marco legal, anticipando el impacto de nuevas reformas y resoluciones.</p>
                    </div>
                    <div class="info-card" style="margin-bottom: 12px;">
                        <h4>Gestión de Obligaciones Nacionales y Territoriales</h4>
                        <p>Preparación, revisión y presentación de declaraciones recurrentes (Renta, IVA, Retención en la fuente, ICA territorial).</p>
                    </div>
                    <div class="info-card" style="margin-bottom: 12px;">
                        <h4>Automatización de Información Exógena (UGPP y DIAN)</h4>
                        <p>Procesamiento seguro y automatizado de tus medios magnéticos, garantizando cruces de información exactos que evitan requerimientos y sanciones.</p>
                    </div>
                    <div class="info-card" style="margin-bottom: 12px;">
                        <h4>Atención a Requerimientos y Litigio Fiscal</h4>
                        <p>Te representamos y acompañamos en procesos de fiscalización, respuestas a requerimientos y discusiones en vía gubernativa, blindando jurídicamente a tu empresa.</p>
                    </div>
                </div>
                
                <div style="margin-top: 40px; text-align: center; border-top: 1px solid var(--border-color); padding-top: 30px;">
                    <button onclick="closeSubpage(); window.location.hash = ''; setTimeout(() => { document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' }); }, 300);" class="btn btn-primary" style="padding: 12px 36px; font-size: 1rem; display: inline-flex; align-items: center; gap: 10px; border-radius: 8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Agendar Llamada / Solicitar Cotización
                    </button>
                </div>
            </div>
        `;
    } else if (pageName === 'outsourcing_cont') {
        html = `
            <div class="info-view">
                <h2>Outsourcing Contable</h2>
                <div class="info-subtitle">Tu contabilidad en piloto automático. Decisiones estratégicas en tiempo real.</div>
                
                <p class="info-text">En el mundo corporativo acelerado de hoy, la contabilidad no puede limitarse a registrar lo que pasó el mes anterior; debe ser el tablero de control que guíe el futuro de tu empresa. Un Gobierno Corporativo sólido exige información financiera precisa, oportuna y libre de sesgos operativos.</p>
                
                <p class="info-text">En JB CONSULTING & CO, no somos simples tenedores de libros. Actuamos como tu departamento financiero integral, combinando el rigor contable de un equipo gerencial con la potencia de la tecnología.</p>
                
                <div class="info-highlight-box">
                    <h3 style="font-family: var(--font-heading); font-weight: 700;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        La Ventaja Tecnológica: El factor ELEVA
                    </h3>
                    <p>El mayor obstáculo de la contabilidad tradicional es el tiempo perdido en procesos manuales y repetitivos. Con nuestra división tecnológica ELEVA, transformamos la operatividad contable. A través de la integración de Inteligencia Artificial y programación avanzada, automatizamos las tareas más pesadas del ciclo contable. Procesos que antes tomaban días, como la conciliación bancaria exhaustiva de múltiples cuentas, ELEVA los ejecuta con precisión milimétrica en una fracción del tiempo. Al eliminar la digitación manual, erradicamos el error humano y liberamos a nuestro equipo de expertos para que se enfoquen en lo que realmente importa: analizar tus números y asesorarte estratégicamente.</p>
                </div>

                <h3 class="info-section-title">¿Qué incluye nuestro servicio de Outsourcing Contable?</h3>
                <div class="info-grid-2col">
                    <div class="info-card">
                        <h4>Procesamiento Contable Automatizado</h4>
                        <p>Registro de operaciones bajo normatividad NIIF, utilizando tecnología para agilizar la captura de datos y facturación.</p>
                    </div>
                    <div class="info-card">
                        <h4>Conciliaciones Inteligentes</h4>
                        <p>Cuadre de bancos, carteras y proveedores optimizado por las herramientas de ELEVA, garantizando saldos reales al día.</p>
                    </div>
                    <div class="info-card">
                        <h4>Emisión de Estados Financieros Gerenciales</h4>
                        <p>Reportes claros y estructurados, diseñados específicamente para juntas directivas y toma de decisiones ejecutivas.</p>
                    </div>
                    <div class="info-card">
                        <h4>Acompañamiento Financiero Continuo</h4>
                        <p>No solo entregamos balances; interpretamos los indicadores de liquidez, endeudamiento y rentabilidad para guiar el crecimiento seguro de tu compañía.</p>
                    </div>
                </div>
                
                <div style="margin-top: 40px; text-align: center; border-top: 1px solid var(--border-color); padding-top: 30px;">
                    <button onclick="closeSubpage(); window.location.hash = ''; setTimeout(() => { document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' }); }, 300);" class="btn btn-primary" style="padding: 12px 36px; font-size: 1rem; display: inline-flex; align-items: center; gap: 10px; border-radius: 8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Agendar Llamada / Solicitar Cotización
                    </button>
                </div>
            </div>
        `;
    } else if (pageName === 'outsourcing_nom') {
        html = `
            <div class="info-view">
                <h2>Outsourcing de Nómina</h2>
                <div class="info-subtitle">Cálculos sin margen de error. Cumplimiento laboral blindado.</div>
                
                <p class="info-text">El capital humano es el motor de tu empresa, pero la gestión de su nómina puede convertirse en una de las mayores fuentes de riesgo financiero si no se administra con rigor. Los errores en las liquidaciones, la transmisión incorrecta a la DIAN o los fallos en la seguridad social (PILA) no solo generan malestar en tu equipo, sino que exponen a tu compañía a sanciones severas por parte de entidades como la UGPP.</p>
                
                <p class="info-text">En JB CONSULTING & CO, no solo liquidamos tu nómina; estructuramos tu gestión laboral bajo los estándares más altos de Gobierno Corporativo. Garantizamos que cada pago, retención y prestación social cumpla estrictamente con la normativa vigente, protegiendo tanto el flujo de caja de la empresa como los derechos de tus colaboradores.</p>
                
                <div class="info-highlight-box">
                    <h3 style="font-family: var(--font-heading); font-weight: 700;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        La Ventaja Tecnológica: El factor ELEVA
                    </h3>
                    <p>El cálculo manual de horas extras, comisiones, novedades y retenciones en hojas de cálculo tradicionales es una bomba de tiempo operativa. Con ELEVA, llevamos la gestión de nómina al siguiente nivel tecnológico. Nuestra división ha desarrollado sistemas que automatizan el procesamiento de novedades y ejecutan liquidaciones complejas de manera instantánea. Además, garantizamos la generación y transmisión fluida de la Nómina Electrónica a la DIAN, asegurando cruces de información exactos y sin intervención manual que pueda comprometer los datos. Precisión milimétrica, en tiempo récord.</p>
                </div>

                <h3 class="info-section-title">¿Qué incluye nuestro servicio de Outsourcing de Nómina?</h3>
                <div class="info-grid-2col">
                    <div class="info-card">
                        <h4>Liquidación Automatizada y Precisa</h4>
                        <p>Procesamiento de sueldos, horas extras, comisiones, incapacidades y vacaciones sin margen de error.</p>
                    </div>
                    <div class="info-card">
                        <h4>Gestión Integral de Seguridad Social (PILA)</h4>
                        <p>Cálculo y liquidación exacta de los aportes parafiscales y seguridad social, mitigando cualquier riesgo de fiscalización.</p>
                    </div>
                    <div class="info-card">
                        <h4>Nómina Electrónica y Cumplimiento DIAN</h4>
                        <p>Generación de los archivos XML y transmisión automatizada en los plazos de ley, asegurando la deducibilidad de tus gastos.</p>
                    </div>
                    <div class="info-card">
                        <h4>Auditoría y Prevención UGPP</h4>
                        <p>Revisión constante de tus prácticas de nómina para asegurar que estén alineadas con la normativa laboral y fiscal, evitando contingencias futuras.</p>
                    </div>
                </div>
                
                <div style="margin-top: 40px; text-align: center; border-top: 1px solid var(--border-color); padding-top: 30px;">
                    <button onclick="closeSubpage(); window.location.hash = ''; setTimeout(() => { document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' }); }, 300);" class="btn btn-primary" style="padding: 12px 36px; font-size: 1rem; display: inline-flex; align-items: center; gap: 10px; border-radius: 8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Agendar Llamada / Solicitar Cotización
                    </button>
                </div>
            </div>
        `;
    } else if (pageName === 'revisoria_fisc') {
        html = `
            <div class="info-view">
                <h2>Revisoría Fiscal</h2>
                <div class="info-subtitle">Control integral. Detección inteligente. Respaldo corporativo.</div>
                
                <p class="info-text">En un entorno regulatorio cada vez más estricto, la Revisoría Fiscal no puede limitarse a poner una firma al final del año. Es el pilar fundamental del Gobierno Corporativo, diseñado para proteger a los socios, blindar a los administradores y garantizar la viabilidad del negocio.</p>
                
                <p class="info-text">En JB CONSULTING & CO, ejercemos una Revisoría Fiscal proactiva y moderna. Unificamos el rigor contable con una profunda visión jurídica y normativa, asegurando que cada decisión financiera de tu empresa esté respaldada legalmente y blindada ante cualquier requerimiento de las superintendencias o entidades de control.</p>
                
                <div class="info-highlight-box">
                    <h3 style="font-family: var(--font-heading); font-weight: 700;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        La Ventaja Tecnológica: El factor ELEVA
                    </h3>
                    <p>El mayor riesgo de la Revisoría Fiscal tradicional es que se basa en "muestreos selectivos". Revisar solo una fracción de las operaciones deja la puerta abierta a errores críticos y fugas de capital. Con ELEVA, cambiamos las reglas del juego. Integrando modelos de Big Data e Inteligencia Artificial, nuestro equipo no revisa muestras; procesa y analiza el 100% de tus transacciones financieras. Hemos desarrollado algoritmos diseñados específicamente para la detección de fraude ocupacional y anomalías operativas. Al rastrear patrones inusuales en grandes volúmenes de información, identificamos riesgos ocultos antes de que se conviertan en crisis legales o financieras.</p>
                </div>

                <h3 class="info-section-title">¿Qué incluye nuestro servicio de Revisoría Fiscal?</h3>
                <div class="info-grid-2col">
                    <div class="info-card">
                        <h4>Auditoría Continua con IA</h4>
                        <p>Monitoreo automatizado de tus bases de datos contables para identificar inconsistencias, desviaciones o riesgos de fraude en tiempo real.</p>
                    </div>
                    <div class="info-card">
                        <h4>Dictamen y Fe Pública</h4>
                        <p>Certificación de estados financieros con la autoridad, independencia y el respaldo argumentativo que exigen las asambleas de accionistas y entidades financieras.</p>
                    </div>
                    <div class="info-card">
                        <h4>Evaluación y Blindaje de Control Interno</h4>
                        <p>Diagnóstico profundo de tus procesos operativos y administrativos para cerrar brechas de riesgo y fortalecer tu Gobierno Corporativo.</p>
                    </div>
                    <div class="info-card">
                        <h4>Vigilancia Normativa y Legal</h4>
                        <p>Supervisión estricta del cumplimiento de obligaciones tributarias, laborales y comerciales, protegiendo a la empresa de sanciones, litigios y responsabilidades solidarias.</p>
                    </div>
                </div>
                
                <div style="margin-top: 40px; text-align: center; border-top: 1px solid var(--border-color); padding-top: 30px;">
                    <button onclick="closeSubpage(); window.location.hash = ''; setTimeout(() => { document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' }); }, 300);" class="btn btn-primary" style="padding: 12px 36px; font-size: 1rem; display: inline-flex; align-items: center; gap: 10px; border-radius: 8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Agendar Llamada / Solicitar Cotización
                    </button>
                </div>
            </div>
        `;
    } else if (pageName === 'noticias_feed') {
        html = `
            <div class="info-view">
                <h2>Centro de Novedades y Actualidad</h2>
                <div class="info-subtitle">Manténgase informado sobre la normativa tributaria y novedades del sector contable.</div>
                
                <!-- Filters UI -->
                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 20px; margin-bottom: 30px; display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: space-between;">
                    <div style="flex: 1; min-width: 250px;">
                        <label for="newsSearch" style="font-size: 0.85rem; font-weight: 700; color: var(--brand-jb-navy); margin-bottom: 6px; display: block;">Buscar noticias</label>
                        <input type="text" id="newsSearch" placeholder="Filtrar por título, contenido o fecha..." style="width: 100%; padding: 10px 14px; border-radius: 6px; border: 1px solid var(--border-color); outline: none; transition: var(--transition-smooth); background: #fff;" oninput="filterNewsArchive()">
                    </div>
                    
                    <div style="width: 180px; min-width: 150px;">
                        <label for="newsYearFilter" style="font-size: 0.85rem; font-weight: 700; color: var(--brand-jb-navy); margin-bottom: 6px; display: block;">Filtrar por año</label>
                        <select id="newsYearFilter" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border-color); background: #fff;" onchange="filterNewsArchive()">
                            <option value="all">Todos los años</option>
                            <option value="2026">2026</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                        </select>
                    </div>
                </div>
                
                <!-- Grouped timeline container -->
                <div id="newsArchiveContainer"></div>
            </div>
        `;
        
        setTimeout(() => {
            filterNewsArchive();
        }, 50);
    }
    
    content.innerHTML = html;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSubpage() {
    const overlay = document.getElementById('subpageOverlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// News filtering helpers
window.filterNewsArchive = function() {
    const searchVal = (document.getElementById('newsSearch')?.value || '').toLowerCase();
    const yearVal = document.getElementById('newsYearFilter')?.value || 'all';
    
    let articlesDataEl = document.getElementById('articles-json');
    let list = [];
    if (articlesDataEl) {
        try {
            list = JSON.parse(articlesDataEl.textContent);
        } catch (e) {
            console.error(e);
        }
    }
    
    let filtered = list.filter(article => {
        const matchSearch = searchVal === '' || 
            article.title.toLowerCase().includes(searchVal) ||
            article.summary.toLowerCase().includes(searchVal) ||
            article.content.toLowerCase().includes(searchVal) ||
            article.published_at_formatted.toLowerCase().includes(searchVal);
            
        const matchYear = yearVal === 'all' || article.published_at_year === yearVal;
        
        return matchSearch && matchYear;
    });
    
    renderArticlesArchive(filtered);
};

window.renderArticlesArchive = function(filteredArticles) {
    const archiveContainer = document.getElementById('newsArchiveContainer');
    if (!archiveContainer) return;
    
    if (filteredArticles.length === 0) {
        archiveContainer.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                No se encontraron artículos que coincidan con los filtros de búsqueda.
            </div>
        `;
        return;
    }
    
    let currentGroup = '';
    let html = '';
    
    filteredArticles.forEach(article => {
        let groupName = article.published_at_month_year || 'Actualidad';
        if (groupName !== currentGroup) {
            currentGroup = groupName;
            html += `<h3 class="info-section-title" style="margin-top: 40px; text-transform: capitalize;">${currentGroup}</h3>`;
        }
        
        let coverHtml = '';
        if (article.cover_image_url) {
            coverHtml = `<img src="${article.cover_image_url}" alt="Portada" style="width: 120px; height: 120px; object-fit: cover; border-radius: 8px; border: 1px solid var(--border-color);" onerror="this.onerror=null; this.src='/static/img/logo_jb.png'; this.style.objectFit='contain'; this.style.width='70%';">`;
        } else {
            coverHtml = `<div style="width: 120px; height: 120px; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: var(--brand-eleva-blue); font-weight: 800; font-family: var(--font-heading);">JB</div>`;
        }
        
        const safeTitle = article.title.replace(/"/g, '&quot;');
        const safeDate = (article.published_at_formatted || '').replace(/"/g, '&quot;');
        const safeContent = article.content.replace(/"/g, '&quot;');
        const safeCover = (article.cover_image_url || '').replace(/"/g, '&quot;');
        
        html += `
            <div class="article-card" style="margin-bottom: 20px; display: flex; gap: 20px; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 20px; align-items: center;">
                <div style="flex-shrink: 0; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; overflow: hidden; background: #fff; border-radius: 8px; border: 1px solid var(--border-color);">
                    ${coverHtml}
                </div>
                <div style="flex-grow: 1;">
                    <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 6px;">Publicado: ${article.published_at_formatted}</div>
                    <h4 style="font-size: 1.2rem; margin-bottom: 8px; color: var(--brand-jb-navy); font-family: var(--font-heading); font-weight: 700;">${article.title}</h4>
                    <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 12px;">${article.summary}</p>
                    <a href="javascript:void(0);" onclick="openArticleModalFromArchive('${safeTitle}', '${safeDate}', \`${safeContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`, '${safeCover}')" class="service-link" style="font-size: 0.85rem; font-weight: 600; color: var(--brand-eleva-blue);">Leer Artículo &rarr;</a>
                </div>
            </div>
        `;
    });
    
    archiveContainer.innerHTML = html;
};

window.openArticleModalFromArchive = function(title, date, content, cover) {
    const articleDetailModal = document.getElementById('articleDetailModal');
    const articleModalTitle = document.getElementById('articleModalTitle');
    const articleModalDate = document.getElementById('articleModalDate');
    const articleModalContent = document.getElementById('articleModalContent');
    const articleModalCover = document.getElementById('articleModalCover');
    
    if (articleModalTitle) articleModalTitle.textContent = title;
    if (articleModalDate) articleModalDate.textContent = date;
    if (articleModalContent) articleModalContent.textContent = content;
    
    if (articleModalCover) {
        if (cover && cover.trim() !== '') {
            articleModalCover.src = cover;
            articleModalCover.style.display = 'block';
        } else {
            articleModalCover.style.display = 'none';
        }
    }
    
    if (articleDetailModal) articleDetailModal.classList.add('active');
};

// Billing toggle for Eleva Complementos
window.toggleBillingPeriod = function(isAnnual) {
    const pricePlus = document.getElementById('price-plus');
    const pricePro = document.getElementById('price-pro');
    const priceElite = document.getElementById('price-elite');
    const monthlyLbl = document.getElementById('billing-monthly-lbl');
    const annualLbl = document.getElementById('billing-annual-lbl');
    const knob = document.getElementById('billing-slider-knob');
    
    if (isAnnual) {
        if (pricePlus) pricePlus.innerHTML = '$637.200 <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">/ año</span>';
        if (pricePro) pricePro.innerHTML = '$1.101.600 <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">/ año</span>';
        if (priceElite) priceElite.innerHTML = '$2.214.000 <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">/ año</span>';
        
        if (monthlyLbl) { monthlyLbl.style.fontWeight = '500'; monthlyLbl.style.color = 'var(--text-muted)'; }
        if (annualLbl) { annualLbl.style.fontWeight = '700'; annualLbl.style.color = 'var(--brand-jb-navy)'; }
        if (knob) knob.style.transform = 'translateX(30px)';
    } else {
        if (pricePlus) pricePlus.innerHTML = '$59.000 <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">/ mes</span>';
        if (pricePro) pricePro.innerHTML = '$102.000 <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">/ mes</span>';
        if (priceElite) priceElite.innerHTML = '$205.000 <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">/ mes</span>';
        
        if (monthlyLbl) { monthlyLbl.style.fontWeight = '700'; monthlyLbl.style.color = 'var(--brand-jb-navy)'; }
        if (annualLbl) { annualLbl.style.fontWeight = '500'; annualLbl.style.color = 'var(--text-muted)'; }
        if (knob) knob.style.transform = 'translateX(0)';
    }
};

// Plan selector pre-filling contact form
window.selectPlan = function(planName) {
    const isAnnual = document.getElementById('billing-toggle')?.checked;
    const periodText = isAnnual ? 'Anual' : 'Mensual';
    
    alert("Por el momento nuestro sistema de pago en línea PSE se encuentra en proceso de implementación. Te redirigiremos al formulario de contacto para que puedas dejarnos tus datos con una solicitud pre-llenada y un asesor se comunicará contigo de inmediato.");
    
    closeSubpage();
    window.location.hash = '';
    
    setTimeout(() => {
        const contactSec = document.getElementById('contacto');
        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
        
        const msgInput = document.getElementById('contactMessage');
        if (msgInput) {
            msgInput.value = `Cordial saludo, me encuentro interesado en adquirir el plan ${planName} (${periodText}). Por favor comunícate conmigo con estos datos de contacto.`;
            msgInput.focus();
        }
    }, 300);
};

// Contact form AJAX submission
window.submitContactForm = function(event, formElement) {
    event.preventDefault();
    
    const name = document.getElementById('contactName')?.value;
    const company = document.getElementById('contactCompany')?.value;
    const phone = document.getElementById('contactPhone')?.value;
    const email = document.getElementById('contactEmail')?.value;
    const message = document.getElementById('contactMessage')?.value;
    
    if (!name || !company || !phone || !email || !message) {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }
    
    fetch('/api/contact/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            company: company,
            phone: phone,
            email: email,
            message: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert(data.message);
            formElement.reset();
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert("Ocurrió un error al enviar el mensaje. Por favor intente más tarde.");
    });
};

// Bind interactive subpages click triggers globally
document.addEventListener('DOMContentLoaded', () => {
    // Who we are menu & footer
    document.querySelectorAll('[data-tr="menu_quienes"]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSubpage('quienes_somos');
        });
    });
    
    // What we do menu & footer
    document.querySelectorAll('[data-tr="menu_que"]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSubpage('que_hacemos');
        });
    });

    // News menu link
    document.querySelectorAll('[data-tr="menu_noticias"]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSubpage('noticias_feed');
        });
    });

    // Subpages in services menu dropdown & grid cards
    document.querySelectorAll('[data-tr="sub_auditoria_ext"]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSubpage('auditoria_ext');
        });
    });
    
    document.querySelectorAll('[data-tr="sub_asesoria_trib"]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSubpage('asesoria_trib');
        });
    });
    
    document.querySelectorAll('[data-tr="sub_outsourcing_cont"]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSubpage('outsourcing_cont');
        });
    });
    
    document.querySelectorAll('[data-tr="sub_outsourcing_nom"]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSubpage('outsourcing_nom');
        });
    });
    
    document.querySelectorAll('[data-tr="sub_revisoria_fisc"]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSubpage('revisoria_fisc');
        });
    });
    
    // Under development software / options
    document.querySelectorAll('[data-tr="soft_contable"]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSubpage('soft_contable');
        });
    });
    
    document.querySelectorAll('[data-tr="soft_rentas"]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSubpage('soft_rentas');
        });
    });
    
    document.querySelectorAll('[data-tr="soft_complementos"]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSubpage('soft_complementos');
        });
    });
    
    document.querySelectorAll('[data-tr="soft_legalizaciones"]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSubpage('soft_legalizaciones');
        });
    });
    
    document.querySelectorAll('[data-tr="menu_revista"]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSubpage('revista');
        });
    });
    
    document.querySelectorAll('[data-tr="descargas"]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSubpage('descargas');
        });
    });

    // Subpage hooks in Acceso Clientes dropdown links (Removed to allow normal redirection to external portals)


    // Hooks in homepage cards (Nuestros Servicios)
    const cards = document.querySelectorAll('#servicios .services-grid .service-card');
    if (cards.length >= 6) {
        // Card 1: Auditoría Externa
        cards[0].style.cursor = 'pointer';
        cards[0].addEventListener('click', () => openSubpage('auditoria_ext'));
        const link1 = cards[0].querySelector('.service-link');
        if (link1) link1.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openSubpage('auditoria_ext'); });

        // Card 2: Asesoría Tributaria
        cards[1].style.cursor = 'pointer';
        cards[1].addEventListener('click', () => openSubpage('asesoria_trib'));
        const link2 = cards[1].querySelector('.service-link');
        if (link2) link2.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openSubpage('asesoria_trib'); });

        // Card 3: Outsourcing Contable
        cards[2].style.cursor = 'pointer';
        cards[2].addEventListener('click', () => openSubpage('outsourcing_cont'));
        const link3 = cards[2].querySelector('.service-link');
        if (link3) link3.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openSubpage('outsourcing_cont'); });

        // Card 5: Outsourcing de Nómina
        cards[4].style.cursor = 'pointer';
        cards[4].addEventListener('click', () => openSubpage('outsourcing_nom'));
        const link5 = cards[4].querySelector('.service-link');
        if (link5) link5.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openSubpage('outsourcing_nom'); });

        // Card 6: Revisoría Fiscal
        cards[5].style.cursor = 'pointer';
        cards[5].addEventListener('click', () => openSubpage('revisoria_fisc'));
        const link6 = cards[5].querySelector('.service-link');
        if (link6) link6.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openSubpage('revisoria_fisc'); });
    }

    // Hooks in homepage software grid (Comprar buttons)
    const softCards = document.querySelectorAll('#software .software-grid-layout .software-card');
    if (softCards.length >= 5) {
        // Module 1: Eleva Software Contable
        const btn1 = softCards[0].querySelector('.btn');
        if (btn1) {
            btn1.removeAttribute('onclick');
            btn1.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openSubpage('soft_contable'); });
        }
        // Module 2: Eleva Complementos
        const btn2 = softCards[1].querySelector('.btn');
        if (btn2) {
            btn2.removeAttribute('onclick');
            btn2.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openSubpage('soft_complementos'); });
        }
        // Module 3: Eleva Rentas Naturales
        const btn3 = softCards[2].querySelector('.btn');
        if (btn3) {
            btn3.removeAttribute('onclick');
            btn3.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openSubpage('soft_rentas'); });
        }
        // Module 5: Eleva Legalizaciones
        const btn5 = softCards[4].querySelector('.btn');
        if (btn5) {
            btn5.removeAttribute('onclick');
            btn5.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openSubpage('soft_legalizaciones'); });
        }
    }

    // Hero Mockup row clicks
    const mockupDivs = document.querySelectorAll('.hero-mockup div');
    mockupDivs.forEach(div => {
        const spanText = div.querySelector('span');
        if (spanText) {
            const textContent = spanText.textContent;
            if (textContent.includes("Software Contable")) {
                div.style.cursor = 'pointer';
                div.addEventListener('click', () => openSubpage('soft_contable'));
            } else if (textContent.includes("Rentas Naturales")) {
                div.style.cursor = 'pointer';
                div.addEventListener('click', () => openSubpage('soft_rentas'));
            } else if (textContent.includes("Legalizaciones")) {
                div.style.cursor = 'pointer';
                div.addEventListener('click', () => openSubpage('soft_legalizaciones'));
            }
        }
    });

    // Revista sidebar "Descargar PDF" button
    const magazineBtn = document.querySelector('.magazine-sidebar .magazine-preview .btn');
    if (magazineBtn) {
        magazineBtn.removeAttribute('target');
        magazineBtn.setAttribute('href', '#');
        magazineBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSubpage('revista');
        });
    }
});

