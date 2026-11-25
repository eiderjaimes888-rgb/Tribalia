import uuid
from datetime import datetime, timedelta
from sqlalchemy import Column, String, Text, Integer, DateTime, Numeric, Boolean, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    sku = Column(String(100), unique=True, nullable=False, index=True)
    description = Column(Text, nullable=True)
    current_version = Column(String(50), nullable=False, default="1.0.0")
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    updated_at = Column(DateTime(timezone=True), default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    license_types = relationship("LicenseType", back_populates="product", cascade="all, delete-orphan")


class LicenseType(Base):
    __tablename__ = "license_types"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    product_id = Column(UUID(as_uuid=True), ForeignKey("products.id", ondelete="CASCADE"), nullable=False)
    name = Column(String(100), nullable=False)  # e.g. "Mensual", "Anual"
    price = Column(Numeric(12, 2), nullable=False)
    duration_days = Column(Integer, nullable=False)  # e.g. 30, 365
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)

    # Relationships
    product = relationship("Product", back_populates="license_types")
    licenses = relationship("License", back_populates="license_type")
    transactions = relationship("Transaction", back_populates="license_type")


class License(Base):
    __tablename__ = "licenses"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    license_type_id = Column(UUID(as_uuid=True), ForeignKey("license_types.id"), nullable=False)
    license_key = Column(String(255), unique=True, nullable=False, index=True)
    customer_email = Column(String(255), nullable=False, index=True)
    status = Column(String(50), default="active")  # active, expired, suspended
    issued_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    expires_at = Column(DateTime(timezone=True), nullable=False)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    updated_at = Column(DateTime(timezone=True), default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    license_type = relationship("LicenseType", back_populates="licenses")
    credentials = relationship("Credential", back_populates="license", cascade="all, delete-orphan")


class Credential(Base):
    __tablename__ = "credentials"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    license_id = Column(UUID(as_uuid=True), ForeignKey("licenses.id", ondelete="CASCADE"), nullable=False)
    username = Column(String(150), unique=True, nullable=False, index=True)
    encrypted_password = Column(String(255), nullable=False)
    status = Column(String(50), default="active")  # active, suspended
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    updated_at = Column(DateTime(timezone=True), default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    license = relationship("License", back_populates="credentials")


class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    payment_gateway = Column(String(100), nullable=False)  # Wompi, PayU, Stripe
    gateway_reference = Column(String(255), unique=True, nullable=False, index=True)
    amount = Column(Numeric(12, 2), nullable=False)
    currency = Column(String(10), nullable=False, default="COP")
    status = Column(String(50), default="pending")  # pending, successful, failed, refunded
    customer_email = Column(String(255), nullable=False)
    license_type_id = Column(UUID(as_uuid=True), ForeignKey("license_types.id"), nullable=False)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    updated_at = Column(DateTime(timezone=True), default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    license_type = relationship("LicenseType", back_populates="transactions")
