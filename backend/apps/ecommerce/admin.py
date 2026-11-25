from django.contrib import admin
from django.utils.html import format_html
from apps.ecommerce.models import (
    Product,
    LicenseType,
    License,
    Credential,
    Transaction,
    CommercialProposal,
    ProposalItem,
)

admin.site.site_header = "Tribalia S.A.S. — Panel Administrativo"
admin.site.site_title = "Admin Tribalia"
admin.site.index_title = "Gestión Editorial, Tienda, Propuestas y Leads"


class LicenseTypeInline(admin.TabularInline):
    model = LicenseType
    extra = 1


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('display_order', 'name', 'slug', 'accent_color', 'subdomain_url', 'is_active')
    list_display_links = ('name',)
    list_filter = ('is_active',)
    search_fields = ('name', 'sku', 'slug')
    prepopulated_fields = {'slug': ('name',)}
    inlines = [LicenseTypeInline]


@admin.register(LicenseType)
class LicenseTypeAdmin(admin.ModelAdmin):
    list_display = ('product', 'name', 'billing_cycle', 'price', 'duration_days', 'is_active')
    list_editable = ('price', 'is_active')
    list_filter = ('billing_cycle', 'is_active', 'product')
    search_fields = ('product__name', 'name')


class ProposalItemInline(admin.TabularInline):
    model = ProposalItem
    extra = 1
    autocomplete_fields = []


@admin.register(CommercialProposal)
class CommercialProposalAdmin(admin.ModelAdmin):
    list_display = (
        'code',
        'client_name',
        'client_company',
        'discount_percent',
        'total_display',
        'status',
        'proposal_link',
        'created_at',
    )
    list_filter = ('status', 'created_at', 'commercial_user')
    search_fields = ('code', 'client_name', 'client_company', 'client_email')
    readonly_fields = ('code', 'subtotal_display', 'discount_display', 'total_display', 'proposal_link', 'created_at', 'updated_at')
    inlines = [ProposalItemInline]

    def subtotal_display(self, obj):
        return f"${obj.subtotal:,.0f} COP"
    subtotal_display.short_description = "Subtotal"

    def discount_display(self, obj):
        return f"-${obj.discount_amount:,.0f} COP ({obj.discount_percent}%)"
    discount_display.short_description = "Descuento aplicado"

    def total_display(self, obj):
        return f"${obj.total_price:,.0f} COP"
    total_display.short_description = "Total Final"

    def proposal_link(self, obj):
        if not obj.code:
            return "-"
        return format_html(
            '<a href="/propuesta/{}/" target="_blank" style="font-weight:700;color:#00A8E8;">/propuesta/{}/ ↗</a>',
            obj.code,
            obj.code,
        )
    proposal_link.short_description = "Link Propuesta"

    def save_model(self, request, obj, form, change):
        if not obj.commercial_user:
            obj.commercial_user = request.user
        super().save_model(request, obj, form, change)


@admin.register(License)
class LicenseAdmin(admin.ModelAdmin):
    list_display = ('license_key', 'customer_email', 'status', 'expires_at', 'issued_at')
    list_filter = ('status', 'issued_at', 'expires_at')
    search_fields = ('license_key', 'customer_email')


@admin.register(Credential)
class CredentialAdmin(admin.ModelAdmin):
    list_display = ('username', 'license', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('username',)


@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ('gateway_reference', 'customer_email', 'amount', 'currency', 'status', 'proposal', 'created_at')
    list_filter = ('status', 'payment_gateway', 'created_at')
    search_fields = ('gateway_reference', 'customer_email')
