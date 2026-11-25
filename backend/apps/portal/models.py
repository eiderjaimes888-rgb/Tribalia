import uuid
from django.db import models

class ExternalApp(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, unique=True, verbose_name="Nombre de Aplicación")
    redirect_url = models.URLField(max_length=512, verbose_name="URL de Redirección")
    description = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True, verbose_name="Activa")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class ClientAppAccess(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client_email = models.EmailField(verbose_name="Email de Cliente")
    app = models.ForeignKey(ExternalApp, on_delete=models.CASCADE, related_name="client_accesses")
    granted_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField(blank=True, null=True, verbose_name="Expira el")

    class Meta:
        unique_together = ('client_email', 'app')

    def __str__(self):
        return f"{self.client_email} -> {self.app.name}"
