import json
from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from apps.editorial.models import Article, Magazine, ContactMessage
from apps.ecommerce.models import Product


def home_view(request):
    """Portada principal de Tribalia con noticias y revistas dinámicas desde Django Admin."""
    articles = Article.objects.filter(
        status='published',
        published_at__lte=timezone.now(),
    ).order_by('-published_at')[:6]

    magazines = Magazine.objects.filter(is_published=True).order_by('-publish_date', '-edition_number')[:6]
    products = Product.objects.filter(is_active=True).order_by('display_order')

    return render(
        request,
        'tribalia_home.html',
        {
            'articles': articles,
            'magazines': magazines,
            'products': products,
        },
    )


def quienes_somos_view(request):
    return render(request, 'tribalia_quienes_somos.html')


def article_detail_view(request, slug):
    article = get_object_or_404(Article, slug=slug, status='published')
    return render(request, 'tribalia_article.html', {'article': article})


def magazine_reader_view(request, mag_id):
    magazine = get_object_or_404(Magazine, id=mag_id, is_published=True)
    return render(request, 'tribalia_revista.html', {'magazine': magazine})


def product_detail_view(request, slug):
    product = get_object_or_404(Product.objects.prefetch_related('license_types'), slug=slug, is_active=True)
    monthly = product.license_types.filter(billing_cycle='monthly', is_active=True).first()
    annual = product.license_types.filter(billing_cycle='annual', is_active=True).first()
    return render(
        request,
        'tribalia_product_detail.html',
        {
            'product': product,
            'monthly_plan': monthly,
            'annual_plan': annual,
        },
    )


@csrf_exempt
@require_POST
def contact_api_view(request):
    """Recibe mensajes de interés y los guarda en ContactMessage para control comercial."""
    try:
        data = json.loads(request.body)
        name = data.get('name', '').strip()
        company = data.get('company', '').strip()
        phone = data.get('phone', '').strip()
        email = data.get('email', '').strip()
        product_interest = data.get('product_interest', 'General').strip() or 'General'
        message = data.get('message', '').strip()

        if not (name and email and message):
            return JsonResponse(
                {'status': 'error', 'message': 'Por favor completa nombre, correo y mensaje.'},
                status=400,
            )

        ContactMessage.objects.create(
            name=name,
            company=company,
            phone=phone,
            email=email,
            product_interest=product_interest,
            message=message,
            status='nuevo',
        )

        return JsonResponse(
            {
                'status': 'success',
                'message': '¡Mensaje recibido! Nuestro equipo comercial se pondrá en contacto pronto.',
            }
        )
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=500)
