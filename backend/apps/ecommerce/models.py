import uuid
import secrets
from decimal import Decimal
from django.conf import settings
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


def generate_proposal_code():
    return f"TRB-{secrets.token_hex(3).upper()}"


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255, verbose_name="Nombre de Producto")
    slug = models.SlugField(max_length=120, unique=True, blank=True, null=True, verbose_name="Slug URL")
    sku = models.CharField(max_length=100, unique=True)
    tagline = models.CharField(max_length=255, blank=True, default='', verbose_name="Subtítulo / Tagline")
    description = models.TextField(blank=True, null=True, verbose_name="Descripción")
    accent_color = models.CharField(max_length=20, default='#00A8E8', verbose_name="Color Acento (HEX)")
    bridge_color = models.CharField(max_length=20, default='#0B2853', verbose_name="Color Puente (HEX)")
    subdomain_url = models.URLField(max_length=255, blank=True, default='', verbose_name="URL Subdominio")
    logo_path = models.CharField(max_length=255, blank=True, default='', verbose_name="Ruta Logo Estático")
    current_version = models.CharField(max_length=50, default="1.0.0", verbose_name="Versión Actual")
    display_order = models.PositiveIntegerField(default=0, verbose_name="Orden")
    is_active = models.BooleanField(default=True, verbose_name="Activo")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['display_order', 'name']
        verbose_name = "Producto"
        verbose_name_plural = "Productos"

    def __str__(self):
        return self.name


class LicenseType(models.Model):
    CYCLE_CHOICES = [
        ('monthly', 'Mensual'),
        ('annual', 'Anual'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="license_types")
    name = models.CharField(max_length=100, verbose_name="Nombre del Plan")
    billing_cycle = models.CharField(max_length=20, choices=CYCLE_CHOICES, default='monthly', verbose_name="Ciclo de Facturación")
    price = models.DecimalField(max_digits=12, decimal_places=2, verbose_name="Precio (COP)")
    duration_days = models.IntegerField(verbose_name="Duración en Días")
    is_active = models.BooleanField(default=True, verbose_name="Activo en Tienda")

    class Meta:
        ordering = ['product__display_order', 'duration_days']
        verbose_name = "Plan / Tipo de Licencia"
        verbose_name_plural = "Planes / Tipos de Licencia"

    def __str__(self):
        return f"{self.product.name} - {self.get_billing_cycle_display()} (${self.price:,.0f})"


class License(models.Model):
    STATUS_CHOICES = [
        ('active', 'Activa'),
        ('expired', 'Expirada'),
        ('suspended', 'Suspendida'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    license_type = models.ForeignKey(LicenseType, on_delete=models.PROTECT, related_name="licenses")
    license_key = models.CharField(max_length=255, unique=True, verbose_name="Clave de Licencia")
    customer_email = models.EmailField(verbose_name="Email de Cliente")
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='active')
    issued_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.license_key} ({self.customer_email})"


class Credential(models.Model):
    STATUS_CHOICES = [
        ('active', 'Activa'),
        ('suspended', 'Suspendida'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    license = models.ForeignKey(License, on_delete=models.CASCADE, related_name="credentials")
    username = models.CharField(max_length=150, unique=True, verbose_name="Usuario")
    encrypted_password = models.CharField(max_length=255)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='active')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username


class CommercialProposal(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Borrador'),
        ('sent', 'Enviada al Cliente'),
        ('accepted', 'Aceptada'),
        ('paid', 'Pagada'),
        ('expired', 'Vencida'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    code = models.CharField(max_length=32, unique=True, default=generate_proposal_code, verbose_name="Código de Propuesta")
    commercial_user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="proposals",
        verbose_name="Comercial Responsable"
    )
    commercial_name = models.CharField(max_length=150, blank=True, default='Equipo Comercial Tribalia', verbose_name="Nombre del Comercial")
    client_name = models.CharField(max_length=200, verbose_name="Nombre del Cliente")
    client_company = models.CharField(max_length=200, blank=True, default='', verbose_name="Empresa / Firma")
    client_email = models.EmailField(verbose_name="Correo del Cliente")
    client_phone = models.CharField(max_length=50, blank=True, default='', verbose_name="Teléfono / WhatsApp")
    discount_percent = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        default=Decimal('0.00'),
        validators=[MinValueValidator(Decimal('0.00')), MaxValueValidator(Decimal('100.00'))],
        verbose_name="Descuento (%)"
    )
    notes = models.TextField(blank=True, default='', verbose_name="Condiciones / Notas para el Cliente")
    valid_until = models.DateField(blank=True, null=True, verbose_name="Válida hasta")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='sent', verbose_name="Estado")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Propuesta Comercial"
        verbose_name_plural = "Propuestas Comerciales"

    @property
    def subtotal(self):
        return sum((item.line_total for item in self.items.all()), Decimal('0.00'))

    @property
    def discount_amount(self):
        return (self.subtotal * self.discount_percent / Decimal('100.00')).quantize(Decimal('0.01'))

    @property
    def total_price(self):
        return max(Decimal('0.00'), self.subtotal - self.discount_amount)

    @property
    def primary_product(self):
        first_item = self.items.select_related('license_type__product').first()
        return first_item.license_type.product if first_item else None

    def __str__(self):
        return f"{self.code} - {self.client_name} ({self.discount_percent}% dto.)"


class ProposalItem(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    proposal = models.ForeignKey(CommercialProposal, on_delete=models.CASCADE, related_name="items")
    license_type = models.ForeignKey(LicenseType, on_delete=models.PROTECT, verbose_name="Producto y Plan")
    quantity = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1)], verbose_name="Cantidad")

    class Meta:
        verbose_name = "Producto de Propuesta"
        verbose_name_plural = "Productos de la Propuesta"

    @property
    def line_total(self):
        return self.license_type.price * self.quantity

    def __str__(self):
        return f"{self.license_type} x {self.quantity}"


class Transaction(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pendiente'),
        ('successful', 'Exitosa'),
        ('failed', 'Fallida'),
        ('refunded', 'Reembolsada'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    payment_gateway = models.CharField(max_length=100, verbose_name="Pasarela")
    gateway_reference = models.CharField(max_length=255, unique=True, verbose_name="Referencia")
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    currency = models.CharField(max_length=10, default="COP")
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='pending')
    customer_email = models.EmailField()
    license_type = models.ForeignKey(LicenseType, on_delete=models.PROTECT, null=True, blank=True)
    proposal = models.ForeignKey(CommercialProposal, on_delete=models.SET_NULL, null=True, blank=True, verbose_name="Propuesta Comercial")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.gateway_reference} - {self.status}"
