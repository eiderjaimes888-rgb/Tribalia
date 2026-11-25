import secrets
import string
from datetime import datetime, timedelta
from sqlalchemy.orm import Session
from app.models.ecommerce import LicenseType, License, Credential, Transaction

def generate_license_key(prefix: str = "ELEVA-") -> str:
    """Generates a secure, readable license key."""
    chars = string.ascii_uppercase + string.digits
    key_part = "-".join("".join(secrets.choice(chars) for _ in range(4)) for _ in range(4))
    return f"{prefix}{key_part}"

def generate_random_password(length: int = 12) -> str:
    """Generates a secure temporary password."""
    alphabet = string.ascii_letters + string.digits + "!@#$%^&*"
    return "".join(secrets.choice(alphabet) for _ in range(length))

def provision_license_and_credentials(db: Session, transaction: Transaction) -> tuple[License, Credential]:
    """
    Automates the provisioning of a license key and app access credentials
    once a transaction is marked as successful.
    """
    # 1. Fetch license details from type
    lic_type = db.query(LicenseType).filter(LicenseType.id == transaction.license_type_id).first()
    if not lic_type:
        raise ValueError(f"License type with ID {transaction.license_type_id} not found.")

    # 2. Generate license key and expiration date
    license_key = generate_license_key(prefix="ELEVA-")
    expires_at = datetime.utcnow() + timedelta(days=lic_type.duration_days)

    new_license = License(
        license_type_id=lic_type.id,
        license_key=license_key,
        customer_email=transaction.customer_email,
        status="active",
        expires_at=expires_at
    )
    db.add(new_license)
    db.flush()  # Populates new_license.id

    # 3. Auto-generate app credentials
    raw_password = generate_random_password()
    # In a real environment, use passlib.hash.bcrypt or similar to hash the password
    # e.g., pwd_context.hash(raw_password)
    mock_encrypted_password = f"bcrypt_hash_of({raw_password})"

    # Username format: customer_email + random suffix if needed
    username = f"{transaction.customer_email.split('@')[0]}_{secrets.token_hex(2)}"

    new_credential = Credential(
        license_id=new_license.id,
        username=username,
        encrypted_password=mock_encrypted_password,
        status="active"
    )
    db.add(new_credential)
    db.commit()

    # 4. Return instances (along with raw_password to be sent to user in notification)
    # Note: raw_password is added as a transient property for convenience
    new_credential.raw_password = raw_password

    return new_license, new_credential
