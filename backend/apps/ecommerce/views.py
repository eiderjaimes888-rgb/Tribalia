import secrets
from decimal import Decimal
from django.contrib.admin.views.decorators import staff_member_required
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from apps.ecommerce.models import (
    Product,
    LicenseType,
    CommercialProposal,
    ProposalItem,
    Transaction,
)
from apps.editorial.models import ContactMessage


def store_view(request):
    """
    Tienda oficial Tribalia: muestra los 10 productos con planes Mensual y Anual.
    Si recibe ?proposal=CODE aplica automáticamente el descuento de la propuesta comercial.
    """
    products = Product.objects.filter(is_active=True).prefetch_related('license_types')
    proposal_code = request.GET.get('proposal', '').strip()
    proposal = None
    if proposal_code:
        proposal = CommercialProposal.objects.filter(code=proposal_code).prefetch_related(
            'items__license_type__product'
        ).first()

    selected_plan_id = request.GET.get('plan', '').strip()
    checkout_result = None

    if request.method == 'POST':
        customer_email = request.POST.get('customer_email', '').strip()
        plan_id = request.POST.get('plan_id', '').strip()
        post_proposal_code = request.POST.get('proposal_code', '').strip()
        gateway = request.POST.get('payment_gateway', 'Wompi').strip()

        active_proposal = None
        if post_proposal_code:
            active_proposal = CommercialProposal.objects.filter(code=post_proposal_code).first()

        if active_proposal and customer_email:
            ref = f"TRB-PAY-{secrets.token_hex(4).upper()}"
            first_item = active_proposal.items.first()
            tx = Transaction.objects.create(
                payment_gateway=gateway,
                gateway_reference=ref,
                amount=active_proposal.total_price,
                currency='COP',
                status='pending',
                customer_email=customer_email,
                license_type=first_item.license_type if first_item else None,
                proposal=active_proposal,
            )
            checkout_result = {
                'reference': tx.gateway_reference,
                'amount': tx.amount,
                'gateway': gateway,
                'email': customer_email,
            }
        elif plan_id and customer_email:
            plan = get_object_or_404(LicenseType, id=plan_id, is_active=True)
            ref = f"TRB-PAY-{secrets.token_hex(4).upper()}"
            tx = Transaction.objects.create(
                payment_gateway=gateway,
                gateway_reference=ref,
                amount=plan.price,
                currency='COP',
                status='pending',
                customer_email=customer_email,
                license_type=plan,
            )
            checkout_result = {
                'reference': tx.gateway_reference,
                'amount': tx.amount,
                'gateway': gateway,
                'email': customer_email,
                'plan_name': str(plan),
            }

    catalog = []
    for p in products:
        monthly = p.license_types.filter(billing_cycle='monthly', is_active=True).first()
        annual = p.license_types.filter(billing_cycle='annual', is_active=True).first()
        catalog.append({
            'product': p,
            'monthly': monthly,
            'annual': annual,
        })

    return render(
        request,
        'tribalia_store.html',
        {
            'catalog': catalog,
            'proposal': proposal,
            'selected_plan_id': selected_plan_id,
            'checkout_result': checkout_result,
        },
    )


def proposal_public_view(request, code):
    """
    Vista pública personalizada de una Propuesta Comercial (/propuesta/<code>/).
    Se adapta visualmente a los colores e imagotipo de los productos seleccionados
    y conecta directo con la Tienda para realizar el pago con el descuento aplicado.
    """
    proposal = get_object_or_404(
        CommercialProposal.objects.prefetch_related('items__license_type__product'),
        code=code,
    )
    primary = proposal.primary_product
    accent_color = primary.accent_color if primary else '#00A8E8'
    bridge_color = primary.bridge_color if primary else '#0B2853'
    checkout_url = f"{reverse('store')}?proposal={proposal.code}"

    return render(
        request,
        'tribalia_proposal.html',
        {
            'proposal': proposal,
            'primary_product': primary,
            'accent_color': accent_color,
            'bridge_color': bridge_color,
            'checkout_url': checkout_url,
        },
    )


@staff_member_required
def commercial_portal_view(request):
    """
    Área web para Comerciales: permite crear propuestas con % de descuento libre,
    generar links compartibles y gestionar mensajes de interés.
    """
    created_proposal = None
    if request.method == 'POST':
        action = request.POST.get('action', '')
        if action == 'create_proposal':
            client_name = request.POST.get('client_name', '').strip()
            client_company = request.POST.get('client_company', '').strip()
            client_email = request.POST.get('client_email', '').strip()
            client_phone = request.POST.get('client_phone', '').strip()
            discount_raw = request.POST.get('discount_percent', '0').strip() or '0'
            notes = request.POST.get('notes', '').strip()
            valid_until = request.POST.get('valid_until') or None
            plan_ids = request.POST.getlist('plan_ids')

            try:
                discount_val = max(Decimal('0.00'), min(Decimal('100.00'), Decimal(discount_raw)))
            except Exception:
                discount_val = Decimal('0.00')

            if client_name and client_email and plan_ids:
                proposal = CommercialProposal.objects.create(
                    commercial_user=request.user,
                    commercial_name=request.user.get_full_name() or request.user.username,
                    client_name=client_name,
                    client_company=client_company,
                    client_email=client_email,
                    client_phone=client_phone,
                    discount_percent=discount_val,
                    notes=notes,
                    valid_until=valid_until,
                    status='sent',
                )
                for pid in plan_ids:
                    qty_raw = request.POST.get(f'qty_{pid}', '1')
                    try:
                        qty = max(1, int(qty_raw))
                    except ValueError:
                        qty = 1
                    lt = LicenseType.objects.filter(id=pid, is_active=True).first()
                    if lt:
                        ProposalItem.objects.create(proposal=proposal, license_type=lt, quantity=qty)
                created_proposal = proposal

        elif action == 'update_lead':
            lead_id = request.POST.get('lead_id')
            new_status = request.POST.get('status')
            commercial_notes = request.POST.get('commercial_notes', '')
            lead = ContactMessage.objects.filter(id=lead_id).first()
            if lead and new_status:
                lead.status = new_status
                lead.commercial_notes = commercial_notes
                lead.save()
                return redirect('commercial_portal')

    plans = LicenseType.objects.filter(is_active=True).select_related('product').order_by(
        'product__display_order', 'duration_days'
    )
    proposals = CommercialProposal.objects.prefetch_related('items__license_type__product')[:20]
    leads = ContactMessage.objects.all()[:30]

    return render(
        request,
        'tribalia_commercial.html',
        {
            'plans': plans,
            'proposals': proposals,
            'leads': leads,
            'created_proposal': created_proposal,
            'lead_statuses': ContactMessage.LEAD_STATUS_CHOICES,
        },
    )
