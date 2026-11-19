import { NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      eventType,
      titleOrNames,
      date,
      time,
      ceremonyPlace,
      receptionPlace,
      themeColor,
      sealInitials,
      musicChoice,
      hostingDuration,
      clientName,
      clientWhatsapp,
      rsvpWhatsapp,
      notes,
    } = body;

    if (!clientName || !clientWhatsapp) {
      return NextResponse.json(
        { error: 'Nom et numéro WhatsApp requis' },
        { status: 400 }
      );
    }

    // Generate unique order reference (e.g. JET-7K2X)
    const randomCode = crypto.randomBytes(3).toString('hex').toUpperCase();
    const orderRef = `JET-${randomCode}`;

    const supabase = getServiceSupabase();

    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          order_ref: orderRef,
          event_type: eventType || 'mariage',
          title_or_names: titleOrNames || 'Non précisé',
          event_date: date || null,
          event_time: time || null,
          ceremony_place: ceremonyPlace || null,
          reception_place: receptionPlace || null,
          theme_color: themeColor || 'royal-green',
          seal_initials: sealInitials || null,
          music_choice: musicChoice || null,
          hosting_duration: hostingDuration || '1m',
          client_name: clientName,
          client_whatsapp: clientWhatsapp,
          rsvp_whatsapp: rsvpWhatsapp || clientWhatsapp,
          notes: notes || null,
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase order insert error:', error);
      return NextResponse.json(
        { error: 'Erreur lors de la sauvegarde de la commande' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      orderRef,
      order: data,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Erreur interne';
    console.error('Order API error:', errorMessage);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
