import uuid
from datetime import datetime
from sqlalchemy import Column, String, Text, Boolean, DateTime, ForeignKey, UniqueConstraint
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.database import Base

class ExternalApp(Base):
    __tablename__ = "external_apps"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(100), unique=True, nullable=False, index=True)
    redirect_url = Column(String(512), nullable=False)
    description = Column(Text, nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)

    # Relationships
    client_accesses = relationship("ClientAppAccess", back_populates="app", cascade="all, delete-orphan")


class ClientAppAccess(Base):
    __tablename__ = "client_app_access"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    client_email = Column(String(255), nullable=False, index=True)
    app_id = Column(UUID(as_uuid=True), ForeignKey("external_apps.id", ondelete="CASCADE"), nullable=False)
    granted_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    expires_at = Column(DateTime(timezone=True), nullable=True)

    # Relationships
    app = relationship("ExternalApp", back_populates="client_accesses")

    # Constraints
    __table_args__ = (
        UniqueConstraint("client_email", "app_id", name="uq_client_email_app_id"),
    )
