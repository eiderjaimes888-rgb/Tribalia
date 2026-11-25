from django.contrib import admin
from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
from apps.editorial.views import (
    home_view,
    quienes_somos_view,
    article_detail_view,
    magazine_reader_view,
    product_detail_view,
    contact_api_view,
)
from apps.ecommerce.views import (
    store_view,
    proposal_public_view,
    commercial_portal_view,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view, name='home'),
    path('quienes-somos/', quienes_somos_view, name='quienes_somos'),
    path('noticias/<slug:slug>/', article_detail_view, name='article_detail'),
    path('revista/<uuid:mag_id>/', magazine_reader_view, name='magazine_reader'),
    path('tienda/', store_view, name='store'),
    path('propuesta/<str:code>/', proposal_public_view, name='proposal_public'),
    path('comercial/', commercial_portal_view, name='commercial_portal'),
    path('api/contact/', contact_api_view, name='contact_api'),
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    path('<slug:slug>/', product_detail_view, name='product_detail'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
