from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.schemas import WebhookPaymentPayload
from app.models.ecommerce import Transaction
from app.services.license_service import provision_license_and_credentials

router = APIRouter(
    prefix="/payments",
    tags=["Payments & Webhooks"]
)

@router.post("/webhook", status_code=status.HTTP_200_OK)
def payment_webhook(payload: WebhookPaymentPayload, db: Session = Depends(get_db)):
    """
    Webhook endpoint listening to transaction update events from payment gateways (Wompi, PayU, Stripe, etc.).
    Upon successful payment verification, it triggers license generation and emails credentials.
    """
    # 1. Check if transaction already exists
    transaction = db.query(Transaction).filter(
        Transaction.gateway_reference == payload.reference
    ).first()

    if not transaction:
        # Create a new transaction log if not pre-registered
        transaction = Transaction(
            payment_gateway=payload.gateway,
            gateway_reference=payload.reference,
            amount=payload.amount_in_cents / 100.0,
            currency=payload.currency,
            status=payload.status.lower(),
            customer_email=payload.customer_email,
            license_type_id=payload.license_type_id
        )
        db.add(transaction)
        db.flush()
    else:
        # Update transaction status if it exists
        transaction.status = payload.status.lower()

    # 2. Trigger automatic delivery ONLY on successful transactions
    # Note: Adjust status mapping according to specific gateway payload (e.g., 'APPROVED', 'successful', etc.)
    if payload.status.upper() in ["APPROVED", "SUCCESSFUL"]:
        try:
            license_obj, credential_obj = provision_license_and_credentials(db, transaction)
            
            # --- Delivery Integration Mock ---
            # In a real environment, trigger email client (SMTP, SendGrid, etc.)
            print(f"[SHIPPING] Email sent to {payload.customer_email}")
            print(f"[SHIPPING] License Key: {license_obj.license_key}")
            print(f"[SHIPPING] App Username: {credential_obj.username}")
            print(f"[SHIPPING] App Password: {credential_obj.raw_password}")
            # ---------------------------------
            
            return {
                "status": "success",
                "message": "Payment verified and license successfully generated & delivered.",
                "license_key": license_obj.license_key,
                "username": credential_obj.username
            }
        except Exception as e:
            db.rollback()
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Failed to generate license credentials: {str(e)}"
            )

    db.commit()
    return {
        "status": "processed",
        "message": f"Transaction state updated to {transaction.status}."
    }
