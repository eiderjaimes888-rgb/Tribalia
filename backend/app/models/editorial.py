import uuid
from datetime import datetime
from sqlalchemy import Column, String, Text, Integer, DateTime, Date
from sqlalchemy.dialects.postgresql import UUID
from app.database import Base

class Article(Base):
    __tablename__ = "articles"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String(255), nullable=False)
    slug = Column(String(255), unique=True, nullable=False, index=True)
    summary = Column(Text, nullable=True)
    content = Column(Text, nullable=False)
    cover_image_url = Column(String(512), nullable=True)
    status = Column(String(50), default="draft")  # draft, published, scheduled
    published_at = Column(DateTime(timezone=True), nullable=True, index=True)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    updated_at = Column(DateTime(timezone=True), default=datetime.utcnow, onupdate=datetime.utcnow)


class Magazine(Base):
    __tablename__ = "magazines"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String(255), nullable=False)
    edition_number = Column(Integer, nullable=False)
    pdf_url = Column(String(512), nullable=False)
    cover_image_url = Column(String(512), nullable=True)
    publish_date = Column(Date, nullable=False)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
