from django.contrib import admin
from apps.portal.models import ExternalApp, ClientAppAccess

@admin.register(ExternalApp)
class ExternalAppAdmin(admin.ModelAdmin):
    list_display = ('name', 'redirect_url', 'is_active', 'created_at')
    list_filter = ('is_active', 'created_at')
    search_fields = ('name', 'redirect_url')


@admin.register(ClientAppAccess)
class ClientAppAccessAdmin(admin.ModelAdmin):
    list_display = ('client_email', 'app', 'granted_at', 'expires_at')
    list_filter = ('app', 'granted_at', 'expires_at')
    search_fields = ('client_email',)
