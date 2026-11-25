from pydantic import BaseModel, EmailStr
from typing import Optional
from decimal import Decimal
from datetime import datetime

class WebhookPaymentPayload(BaseModel):
    event: str  # e.g., "transaction.updated"
    gateway: str  # e.g., "wompi", "payu", "stripe"
    reference: str  # Unique transaction ID from gateway
    amount_in_cents: int
    currency: str  # e.g., "COP"
    status: str  # e.g., "APPROVED", "DECLINED", "PENDING"
    customer_email: EmailStr
    license_type_id: str  # UUID as string
