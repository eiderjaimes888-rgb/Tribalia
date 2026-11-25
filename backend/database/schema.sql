-- Relational Database Schema for JB Consulting & Co SAS (JBEleva Platform)
-- Designed for PostgreSQL / Standard SQL

-- ==========================================
-- 1. EDITORIAL MODULE
-- ==========================================

-- Table for News/Editorial Articles
CREATE TABLE articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    summary TEXT,
    content TEXT NOT NULL,
    cover_image_url VARCHAR(512),
    status VARCHAR(50) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'scheduled')),
    published_at TIMESTAMP WITH TIME ZONE NULL, -- Can be programmed for future publication
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table for periodic Corporate Magazine PDF loads
CREATE TABLE magazines (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    edition_number INT NOT NULL,
    pdf_url VARCHAR(512) NOT NULL,
    cover_image_url VARCHAR(512),
    publish_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- 2. E-COMMERCE MODULE (Eleva Ecosystem)
-- ==========================================

-- Table for digital products (e.g. Eleva base, Eleva Exógena)
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    sku VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    current_version VARCHAR(50) NOT NULL DEFAULT '1.0.0',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table for product license tiers / durations
CREATE TABLE license_types (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL, -- e.g., "Mensual", "Anual"
    price DECIMAL(12, 2) NOT NULL,
    duration_days INT NOT NULL, -- 30, 365, etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table for issued customer licenses
CREATE TABLE licenses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    license_type_id UUID NOT NULL REFERENCES license_types(id),
    license_key VARCHAR(255) UNIQUE NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'expired', 'suspended')),
    issued_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table for automatically generated credentials for licensed users
CREATE TABLE credentials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    license_id UUID NOT NULL REFERENCES licenses(id) ON DELETE CASCADE,
    username VARCHAR(150) UNIQUE NOT NULL,
    encrypted_password VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'suspended')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- 3. EXTERNAL PORTAL URL ROUTING
-- ==========================================

-- Table to manage redirection URLs for external apps
CREATE TABLE external_apps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) UNIQUE NOT NULL, -- e.g., "Eleva Exógena Portal"
    redirect_url VARCHAR(512) NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table to map client permissions to external apps
CREATE TABLE client_app_access (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_email VARCHAR(255) NOT NULL,
    app_id UUID NOT NULL REFERENCES external_apps(id) ON DELETE CASCADE,
    granted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP WITH TIME ZONE NULL,
    UNIQUE (client_email, app_id)
);

-- ==========================================
-- 4. TRANSACTIONS / PAYMENTS LOG
-- ==========================================

-- Table to track gateway payment attempts and events
CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    payment_gateway VARCHAR(100) NOT NULL, -- e.g., "Wompi", "PayU", "Stripe"
    gateway_reference VARCHAR(255) UNIQUE NOT NULL, -- ID returned by the gateway
    amount DECIMAL(12, 2) NOT NULL,
    currency VARCHAR(10) NOT NULL DEFAULT 'COP',
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'successful', 'failed', 'refunded')),
    customer_email VARCHAR(255) NOT NULL,
    license_type_id UUID NOT NULL REFERENCES license_types(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexing for performance
CREATE INDEX idx_articles_status_published ON articles(status, published_at);
CREATE INDEX idx_licenses_email ON licenses(customer_email);
CREATE INDEX idx_licenses_key ON licenses(license_key);
CREATE INDEX idx_transactions_reference ON transactions(gateway_reference);
CREATE INDEX idx_client_app_access_email ON client_app_access(client_email);
