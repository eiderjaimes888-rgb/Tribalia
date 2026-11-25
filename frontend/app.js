// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Client Portal Modal Control
const portalModal = document.getElementById('portalModal');

function openClientPortal() {
    portalModal.classList.add('active');
}

function closeClientPortal() {
    portalModal.classList.remove('active');
}

// Purchase Simulation Modal Control
const purchaseModal = document.getElementById('purchaseModal');
const planTypeInput = document.getElementById('planType');
const modalTitle = document.getElementById('modalTitle');
const purchaseForm = document.getElementById('purchaseForm');
const loadingState = document.getElementById('loadingState');
const resultState = document.getElementById('resultState');

// Predefined UUIDs for products/licenses mapped from database/schema.sql
const MOCK_LICENSE_TYPES = {
    monthly: {
        id: "d9b23b1c-9b64-4bf8-b99f-0ff7686529e1", // Placeholder LicenseType UUID for monthly
        name: "Plan Mensual",
        amount_cents: 14900000
    },
    annual: {
        id: "a310c85c-43f1-4df2-a3bf-5683935db552", // Placeholder LicenseType UUID for annual
        name: "Plan Anual",
        amount_cents: 143000000
    }
};

function triggerPurchase(plan) {
    if (!purchaseModal) return;
    
    // Clear previous simulation states
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

// Submit payment simulation payload to the backend FastAPI webhook
async function submitMockPurchase(event) {
    event.preventDefault();
    
    const email = document.getElementById('customerEmail').value;
    const plan = planTypeInput.value;
    const planData = MOCK_LICENSE_TYPES[plan];
    
    if (!email || !planData) return;
    
    // 1. Show Loading State
    purchaseForm.style.display = 'none';
    loadingState.style.display = 'block';
    
    // 2. Generate random gateway reference simulating Stripe/Wompi
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
        // Fetch to local api server
        const response = await fetch('http://127.0.0.1:8000/api/v1/payments/webhook', {
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
            // Standard fallback if server is offline or returns error
            showFallbackSuccess(email, planData);
        }
        
    } catch (error) {
        // Fallback simulation when API server is not running
        console.warn("Backend API not reachable. Simulating offline provisioning...", error);
        setTimeout(() => {
            loadingState.style.display = 'none';
            resultState.style.display = 'block';
            showFallbackSuccess(email, planData);
        }, 1500);
    }
}

// Fallback UI generator when api is offline
function showFallbackSuccess(email, planData) {
    const mockLicenseKey = 'ELEVA-' + Array.from({length: 4}, () => Math.random().toString(36).substring(2, 6).toUpperCase()).join('-');
    const mockUser = email.split('@')[0] + '_dev';
    
    resultState.innerHTML = `
        <div class="success-card">
            <h5>¡Simulación Exitosa (Offline)!</h5>
            <p style="margin-bottom: 12px; font-size: 0.95rem;">El backend no está en ejecución, se generó un demo local:</p>
            <div style="text-align: left; font-size: 0.85rem;">
                <strong>Clave de Licencia Demo:</strong>
                <div class="credential-item">${mockLicenseKey}</div>
                <strong>Usuario Creado:</strong>
                <div class="credential-item">${mockUser}</div>
                <strong>Tipo Licencia:</strong>
                <div class="credential-item">${planData.name} (Demo)</div>
            </div>
            <button onclick="closePurchaseModal()" class="btn btn-secondary" style="margin-top: 16px; width:100%;">Cerrar Ventana</button>
        </div>
    `;
}

// Close modals when clicking outside the content area
window.addEventListener('click', (event) => {
    if (event.target === portalModal) closeClientPortal();
    if (event.target === purchaseModal) closePurchaseModal();
});
