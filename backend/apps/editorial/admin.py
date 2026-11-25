from django.contrib import admin
from django.utils.html import format_html
from apps.editorial.models import Article, Magazine, ContactMessage


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'tag', 'status', 'published_at', 'cover_preview')
    list_filter = ('status', 'tag', 'published_at')
    search_fields = ('title', 'summary', 'content')
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'published_at'

    def cover_preview(self, obj):
        url = obj.get_cover_url()
        if url:
            return format_html('<img src="{}" style="height:36px;border-radius:6px;" />', url)
        return "Sin carátula"
    cover_preview.short_description = "Carátula"


@admin.register(Magazine)
class MagazineAdmin(admin.ModelAdmin):
    list_display = ('title', 'edition_number', 'publish_date', 'is_published', 'has_epub', 'has_pdf', 'cover_preview')
    list_filter = ('is_published', 'publish_date')
    search_fields = ('title', 'edition_number', 'summary')
    date_hierarchy = 'publish_date'

    def has_epub(self, obj):
        return bool(obj.get_epub_url())
    has_epub.boolean = True
    has_epub.short_description = "EPUB"

    def has_pdf(self, obj):
        return bool(obj.get_pdf_url())
    has_pdf.boolean = True
    has_pdf.short_description = "PDF"

    def cover_preview(self, obj):
        url = obj.get_cover_url()
        if url:
            return format_html('<img src="{}" style="height:40px;border-radius:6px;" />', url)
        return "Sin carátula"
    cover_preview.short_description = "Carátula"


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'company', 'phone', 'email', 'product_interest', 'status', 'created_at')
    list_filter = ('status', 'product_interest', 'created_at')
    list_editable = ('status',)
    search_fields = ('name', 'company', 'email', 'phone', 'message')
    readonly_fields = ('created_at', 'updated_at')
