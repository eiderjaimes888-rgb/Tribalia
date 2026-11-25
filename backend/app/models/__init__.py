from app.database import Base
from app.models.editorial import Article, Magazine
from app.models.ecommerce import Product, LicenseType, License, Credential, Transaction
from app.models.portal import ExternalApp, ClientAppAccess

__all__ = [
    "Base",
    "Article",
    "Magazine",
    "Product",
    "LicenseType",
    "License",
    "Credential",
    "Transaction",
    "ExternalApp",
    "ClientAppAccess",
]
