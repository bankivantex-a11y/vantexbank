import { NextRequest, NextResponse } from 'next/server';
import { sendApplicationMail, MailAttachment } from '@/lib/mail';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const firstName = (formData.get('Prénom') || formData.get('firstName') || '') as string;
    const lastName = (formData.get('Nom') || formData.get('lastName') || '') as string;
    const email = (formData.get('email') || '') as string;
    const phone = (formData.get('Téléphone') || formData.get('phone') || '') as string;
    const birthDate = (formData.get('Date de naissance') || formData.get('birthDate') || '') as string;
    const nationality = (formData.get('Pays') || formData.get('nationality') || '') as string;
    const address = (formData.get('Adresse') || formData.get('address') || '') as string;
    const job = (formData.get('Profession') || formData.get('job') || '') as string;
    const income = (formData.get('Revenu mensuel') || formData.get('income') || '') as string;
    const purpose = (formData.get('Objet') || formData.get('purpose') || '') as string;
    const amount = (formData.get('Montant') || formData.get('amount') || '') as string;
    const months = (formData.get('Durée') || formData.get('months') || '') as string;
    const monthly = (formData.get('Mensualité') || formData.get('monthly') || '') as string;
    const refCode = (formData.get('refCode') || `VTX-2026-${Math.floor(Math.random() * 9000 + 1000)}`) as string;

    if (!email || !lastName || !firstName) {
      return NextResponse.json(
        { success: false, error: 'Informations personnelles incomplètes (Nom, Prénom, Email obligatoires).' },
        { status: 400 }
      );
    }

    // Traitement des pièces jointes téléversées
    const attachments: MailAttachment[] = [];
    const fileKeys = ['Fichier_ID', 'Fichier_Salaire', 'Fichier_Banque', 'id', 'payslips', 'statements'];

    for (const key of fileKeys) {
      const entry = formData.get(key);
      if (entry && typeof entry === 'object' && 'arrayBuffer' in entry) {
        const file = entry as File;
        if (file.size > 0) {
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          attachments.push({
            filename: file.name || `${key}.pdf`,
            content: buffer,
            contentType: file.type || 'application/octet-stream',
          });
        }
      }
    }

    const result = await sendApplicationMail(
      {
        firstName,
        lastName,
        email,
        phone,
        birthDate,
        nationality,
        address,
        job,
        income,
        purpose,
        amount,
        months,
        monthly,
        refCode,
      },
      attachments
    );

    return NextResponse.json({
      success: true,
      refCode,
      message: 'Votre dossier a été soumis avec succès. Un accusé de réception vous a été envoyé.',
      simulated: result.simulated ?? false,
    });
  } catch (error: any) {
    console.error('[API /api/apply] Erreur lors du dépôt du dossier:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Une erreur est survenue lors de l\'envoi de votre dossier.',
      },
      { status: 500 }
    );
  }
}
