import uuid
from django.db import models
from django.utils import timezone


class Article(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Borrador'),
        ('published', 'Publicado'),
        ('scheduled', 'Programado'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255, verbose_name="Título")
    slug = models.SlugField(max_length=255, unique=True)
    tag = models.CharField(max_length=80, default='Actualidad Tribalia', verbose_name="Etiqueta / Categoría")
    summary = models.TextField(blank=True, null=True, verbose_name="Copete / Resumen")
    content = models.TextField(verbose_name="Contenido")
    cover_image = models.ImageField(
        upload_to='news/covers/',
        blank=True,
        null=True,
        verbose_name="Imagen Carátula (PNG/JPG)"
    )
    cover_image_url = models.URLField(max_length=512, blank=True, null=True, verbose_name="URL Imagen Portada (opcional)")
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='draft', verbose_name="Estado")
    published_at = models.DateTimeField(default=timezone.now, blank=True, null=True, verbose_name="Fecha de Publicación")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-published_at', '-created_at']
        verbose_name = "Noticia"
        verbose_name_plural = "Noticias"

    def get_cover_url(self):
        if self.cover_image:
            return self.cover_image.url
        return self.cover_image_url or ''

    def __str__(self):
        return self.title


class Magazine(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255, verbose_name="Título de Edición")
    edition_number = models.IntegerField(verbose_name="Número de Edición")
    summary = models.TextField(blank=True, null=True, verbose_name="Resumen de la Edición")
    cover_image = models.ImageField(
        upload_to='magazines/covers/',
        blank=True,
        null=True,
        verbose_name="Imagen Carátula (PNG/JPG)"
    )
    cover_image_url = models.URLField(max_length=512, blank=True, null=True, verbose_name="URL Portada (opcional)")
    epub_file = models.FileField(
        upload_to='magazines/epubs/',
        blank=True,
        null=True,
        verbose_name="Archivo EPUB (Visor Interactivo)"
    )
    pdf_file = models.FileField(
        upload_to='magazines/pdfs/',
        blank=True,
        null=True,
        verbose_name="Archivo PDF (Descarga)"
    )
    pdf_url = models.URLField(max_length=512, blank=True, null=True, verbose_name="URL PDF externa (opcional)")
    publish_date = models.DateField(default=timezone.now, verbose_name="Fecha de Edición")
    is_published = models.BooleanField(default=True, verbose_name="Publicada")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-publish_date', '-edition_number']
        verbose_name = "Revista"
        verbose_name_plural = "Revistas"

    def get_cover_url(self):
        if self.cover_image:
            return self.cover_image.url
        return self.cover_image_url or ''

    def get_epub_url(self):
        if self.epub_file:
            return self.epub_file.url
        return ''

    def get_pdf_url(self):
        if self.pdf_file:
            return self.pdf_file.url
        return self.pdf_url or ''

    def __str__(self):
        return f"{self.title} - Edición N° {self.edition_number}"


class ContactMessage(models.Model):
    LEAD_STATUS_CHOICES = [
        ('nuevo', 'Nuevo'),
        ('en_contacto', 'En contacto'),
        ('propuesta_enviada', 'Propuesta enviada'),
        ('cerrado', 'Cerrado / Ganado'),
        ('descartado', 'Descartado'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255, verbose_name="Nombre completo")
    company = models.CharField(max_length=255, blank=True, default='', verbose_name="Empresa")
    phone = models.CharField(max_length=50, blank=True, default='', verbose_name="Celular / Teléfono")
    email = models.EmailField(verbose_name="Correo Electrónico")
    product_interest = models.CharField(max_length=120, blank=True, default='General', verbose_name="Aplicación de Interés")
    message = models.TextField(verbose_name="Mensaje / Requerimiento")
    status = models.CharField(max_length=30, choices=LEAD_STATUS_CHOICES, default='nuevo', verbose_name="Estado de Seguimiento")
    commercial_notes = models.TextField(blank=True, null=True, verbose_name="Notas del Comercial")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de Envío")
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Mensaje de Interés"
        verbose_name_plural = "Mensajes de Interés"

    def __str__(self):
        return f"{self.name} ({self.product_interest}) - {self.get_status_display()}"
