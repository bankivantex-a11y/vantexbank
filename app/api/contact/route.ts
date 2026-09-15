import { NextRequest, NextResponse } from 'next/server';
import { sendContactMail } from '@/lib/mail';

export async function POST(request: NextRequest) {
  try {
    let firstName = '';
    let lastName = '';
    let email = '';
    let message = '';

    const contentType = request.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      const body = await request.json();
      firstName = body.firstName || body.firstname || '';
      lastName = body.lastName || body.lastname || '';
      email = body.email || '';
      message = body.message || '';
    } else {
      const formData = await request.formData();
      firstName = (formData.get('firstname') || formData.get('firstName') || '') as string;
      lastName = (formData.get('lastname') || formData.get('lastName') || '') as string;
      email = (formData.get('email') || '') as string;
      message = (formData.get('message') || '') as string;
    }

    if (!email || !message) {
      return NextResponse.json(
        { success: false, error: 'Email et message sont obligatoires.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Adresse email invalide.' },
        { status: 400 }
      );
    }

    const result = await sendContactMail({
      firstName,
      lastName,
      email,
      message,
    });

    return NextResponse.json({
      success: true,
      message: 'Votre message a été envoyé avec succès. Un accusé de réception vous a été adressé par e-mail.',
      simulated: result.simulated ?? false,
    });
  } catch (error: any) {
    console.error('[API /api/contact] Erreur lors de l\'envoi du message:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Une erreur est survenue lors de l\'envoi du message.',
      },
      { status: 500 }
    );
  }
}
