import nodemailer from 'nodemailer';

export interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  nationality: string;
  address: string;
  job: string;
  income: string;
  purpose: string;
  amount: string;
  months: string;
  monthly: string;
  refCode: string;
}

export interface MailAttachment {
  filename: string;
  content: Buffer;
  contentType?: string;
}

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.hostinger.com';
const SMTP_PORT = Number(process.env.SMTP_PORT) || 465;
const SMTP_SECURE = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : SMTP_PORT === 465;
const SMTP_USER = process.env.SMTP_USER || 'contact@virxyd.com';
const SMTP_PASS = process.env.SMTP_PASS || '';
const DEFAULT_FROM = process.env.SMTP_FROM || `"Virxyd" <${SMTP_USER}>`;
const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER || 'contact@virxyd.com';

function createTransporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });
}

function isSmtpConfigured(): boolean {
  return Boolean(SMTP_PASS && SMTP_PASS !== 'votre_mot_de_passe_ici');
}

/**
 * Envoi d'un message de contact :
 * 1. Notification vers contact@virxyd.com
 * 2. Accusé de réception automatique vers l'expéditeur
 */
export async function sendContactMail(data: ContactData) {
  const { firstName, lastName, email, message } = data;
  const fullName = `${firstName} ${lastName}`.trim();
  const dateStr = new Date().toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  if (!isSmtpConfigured()) {
    console.warn(
      `[SMTP Hostinger - SIMULATION] Mot de passe non configuré dans .env.local.\n` +
      `-> Email administrateur vers : ${RECEIVER_EMAIL} (De: ${fullName} <${email}>)\n` +
      `-> Accusé de réception vers : ${email}`
    );
    return { success: true, simulated: true };
  }

  const transporter = createTransporter();

  // 1. Email vers l'administrateur (contact@virxyd.com)
  const adminMailOptions = {
    from: DEFAULT_FROM,
    to: RECEIVER_EMAIL,
    replyTo: `${fullName} <${email}>`,
    subject: `[Contact Virxyd] Nouveau message de ${fullName}`,
    text: `Nouveau message de contact reçu le ${dateStr}\n\n` +
          `Nom complet : ${fullName}\n` +
          `Email : ${email}\n\n` +
          `Message :\n${message}\n`,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f6f9; margin: 0; padding: 24px; color: #1e293b;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <tr>
            <td style="background-color: #0B1D3A; padding: 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 1px;">VIRXYD</h1>
              <p style="color: #E5A93C; margin: 6px 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase;">Nouveau message de contact</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 28px 24px;">
              <p style="font-size: 15px; margin-top: 0;">Un nouveau message vous a été adressé depuis le formulaire de contact du site <strong>virxyd.com</strong>.</p>
              
              <table width="100%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0; padding: 12px; font-size: 14px;">
                <tr>
                  <td style="padding: 8px; color: #64748b; width: 120px;">Expéditeur :</td>
                  <td style="padding: 8px; font-weight: 600; color: #0B1D3A;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; color: #64748b;">Email :</td>
                  <td style="padding: 8px;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px; color: #64748b;">Date & Heure :</td>
                  <td style="padding: 8px; color: #334155;">${dateStr}</td>
                </tr>
              </table>

              <div style="margin-top: 20px;">
                <p style="font-size: 13px; font-weight: 700; color: #0B1D3A; text-transform: uppercase; margin-bottom: 8px;">Contenu du message :</p>
                <div style="background-color: #ffffff; border-left: 4px solid #E5A93C; padding: 14px 18px; font-size: 14px; line-height: 1.6; color: #334155; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; border-radius: 0 8px 8px 0; white-space: pre-wrap;">${message}</div>
              </div>

              <div style="margin-top: 28px; text-align: center;">
                <a href="mailto:${email}?subject=RE: Votre demande sur Virxyd" style="display: inline-block; background-color: #0B1D3A; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 14px;">Répondre directement à ${firstName}</a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f1f5f9; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
              Plateforme Virxyd — Notification automatique du site web
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };

  // 2. Accusé de réception automatique vers l'utilisateur
  const userAckMailOptions = {
    from: DEFAULT_FROM,
    to: email,
    subject: `Accusé de réception — Votre message a bien été reçu | Virxyd`,
    text: `Bonjour ${fullName},\n\n` +
          `Nous vous confirmons la bonne réception de votre message adressé aux équipes de Virxyd.\n\n` +
          `Notre service client prend actuellement connaissance de votre demande et vous répondra dans un délai de 24 à 48 heures ouvrées.\n\n` +
          `Rappel de votre message :\n"${message}"\n\n` +
          `Bien cordialement,\nL'équipe Virxyd\ncontact@virxyd.com | https://virxyd.com\n`,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f6f9; margin: 0; padding: 24px; color: #1e293b;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <tr>
            <td style="background-color: #0B1D3A; padding: 28px 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">VIRXYD</h1>
              <p style="color: #E5A93C; margin: 6px 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase;">Accusé de réception</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 28px;">
              <h2 style="font-size: 18px; color: #0B1D3A; margin-top: 0;">Bonjour ${firstName},</h2>
              
              <p style="font-size: 15px; line-height: 1.6; color: #334155;">
                Nous vous confirmons avoir bien reçu votre message adressé aux services de <strong>Virxyd</strong>.
              </p>

              <div style="background-color: #f8fafc; border-left: 4px solid #0B1D3A; padding: 16px 20px; margin: 24px 0; border-radius: 0 8px 8px 0; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
                <p style="margin: 0; font-size: 14px; font-weight: 600; color: #0B1D3A;">Délai de traitement :</p>
                <p style="margin: 6px 0 0; font-size: 14px; color: #475569; line-height: 1.5;">
                  Nos conseillers examinent votre demande et vous apporteront une réponse personnalisée dans les <strong>24 à 48 heures ouvrées</strong>.
                </p>
              </div>

              <p style="font-size: 13px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 8px;">Rappel de votre demande :</p>
              <div style="background-color: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 14px 18px; font-size: 13px; line-height: 1.6; color: #475569; white-space: pre-wrap;">${message}</div>

              <p style="font-size: 14px; line-height: 1.6; color: #334155; margin-top: 28px;">
                Si vous avez une question urgente ou souhaitez compléter votre demande, vous pouvez directement répondre à cet email ou nous contacter à <a href="mailto:${RECEIVER_EMAIL}" style="color: #0B1D3A; font-weight: 600; text-decoration: none;">${RECEIVER_EMAIL}</a>.
              </p>

              <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0; font-weight: 600; color: #0B1D3A; font-size: 14px;">L'équipe Virxyd</p>
                <p style="margin: 4px 0 0; font-size: 13px; color: #64748b;">Services Financiers & Accompagnement en ligne</p>
                <p style="margin: 4px 0 0; font-size: 13px;"><a href="https://virxyd.com" style="color: #E5A93C; text-decoration: none; font-weight: 600;">www.virxyd.com</a></p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #0B1D3A; padding: 18px 24px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #1e293b;">
              © 2026 Virxyd. SAS Cap Au Nord — Intermédiaire enregistré à l'ORIAS sous le numéro 14807766.<br>
              12 Avenue de la Banque, 75008 Paris, France.
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };

  // Envoi des deux emails
  const [adminResult, userResult] = await Promise.all([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(userAckMailOptions),
  ]);

  return { success: true, adminResult, userResult };
}

/**
 * Envoi d'une demande de prêt complète avec pièces jointes :
 * 1. Notification complète avec pièces jointes vers contact@virxyd.com
 * 2. Accusé de réception avec référence de dossier vers le demandeur
 */
export async function sendApplicationMail(data: ApplicationData, attachments: MailAttachment[] = []) {
  const {
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
  } = data;

  const fullName = `${firstName} ${lastName}`.trim();
  const dateStr = new Date().toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  if (!isSmtpConfigured()) {
    console.warn(
      `[SMTP Hostinger - SIMULATION] Mot de passe non configuré dans .env.local.\n` +
      `-> Dossier de prêt ${refCode} vers : ${RECEIVER_EMAIL} (${fullName})\n` +
      `-> Accusé de réception vers : ${email} (${attachments.length} pièces jointes)`
    );
    return { success: true, simulated: true, refCode };
  }

  const transporter = createTransporter();

  // 1. Email vers l'équipe Virxyd
  const adminMailOptions = {
    from: DEFAULT_FROM,
    to: RECEIVER_EMAIL,
    replyTo: `${fullName} <${email}>`,
    subject: `[Dossier Prêt ${refCode}] Nouvelle demande - ${fullName} (${amount} €)`,
    attachments,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f6f9; margin: 0; padding: 24px; color: #1e293b;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <tr>
            <td style="background-color: #0B1D3A; padding: 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 1px;">VIRXYD</h1>
              <p style="color: #E5A93C; margin: 6px 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase;">Dossier de Crédit #${refCode}</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 28px 24px;">
              <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 14px; border-radius: 6px; margin-bottom: 24px;">
                <span style="font-weight: 700; color: #1e3a8a; font-size: 15px;">Dossier #${refCode}</span> — Déposé le ${dateStr}
              </div>

              <h3 style="color: #0B1D3A; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 0; font-size: 16px;">1. Paramètres du financement</h3>
              <table width="100%" style="font-size: 14px; margin-bottom: 20px;">
                <tr><td style="padding: 6px 0; color: #64748b; width: 40%;">Montant demandé :</td><td style="font-weight: 700; color: #0B1D3A;">${amount} €</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Durée :</td><td style="font-weight: 600; color: #0B1D3A;">${months} mois</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Mensualité estimée :</td><td style="font-weight: 700; color: #2563eb;">${monthly}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Projet / Objet :</td><td style="font-weight: 600; color: #0B1D3A;">${purpose}</td></tr>
              </table>

              <h3 style="color: #0B1D3A; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 24px; font-size: 16px;">2. Informations de l'emprunteur</h3>
              <table width="100%" style="font-size: 14px; margin-bottom: 20px;">
                <tr><td style="padding: 6px 0; color: #64748b; width: 40%;">Nom & Prénom :</td><td style="font-weight: 600; color: #0B1D3A;">${fullName}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Email :</td><td><a href="mailto:${email}" style="color: #2563eb; font-weight: 600; text-decoration: none;">${email}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Téléphone :</td><td style="font-weight: 600; color: #0B1D3A;">${phone}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Date de naissance :</td><td>${birthDate}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Adresse :</td><td>${address}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Pays / Nationalité :</td><td>${nationality}</td></tr>
              </table>

              <h3 style="color: #0B1D3A; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 24px; font-size: 16px;">3. Situation professionnelle</h3>
              <table width="100%" style="font-size: 14px; margin-bottom: 20px;">
                <tr><td style="padding: 6px 0; color: #64748b; width: 40%;">Activité :</td><td style="font-weight: 600; color: #0B1D3A;">${job}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Revenu mensuel net :</td><td style="font-weight: 700; color: #16a34a;">${income} €</td></tr>
              </table>

              <h3 style="color: #0B1D3A; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 24px; font-size: 16px;">4. Pièces justificatives jointes</h3>
              <p style="font-size: 14px; color: #475569; margin: 8px 0 16px;">${attachments.length} document(s) joint(s) à ce courriel.</p>

              <div style="margin-top: 28px; text-align: center;">
                <a href="mailto:${email}?subject=Dossier Prêt ${refCode} - Virxyd" style="display: inline-block; background-color: #0B1D3A; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 14px;">Contacter le demandeur</a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f1f5f9; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
              Plateforme Virxyd — Traitement confidentiel des dossiers
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };

  // 2. Accusé de réception automatique au client
  const userAckMailOptions = {
    from: DEFAULT_FROM,
    to: email,
    subject: `Accusé de réception — Demande de prêt #${refCode} | Virxyd`,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f6f9; margin: 0; padding: 24px; color: #1e293b;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <tr>
            <td style="background-color: #0B1D3A; padding: 28px 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">VIRXYD</h1>
              <p style="color: #E5A93C; margin: 6px 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase;">Accusé de réception de votre dossier</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 28px;">
              <h2 style="font-size: 18px; color: #0B1D3A; margin-top: 0;">Bonjour ${firstName},</h2>
              
              <p style="font-size: 15px; line-height: 1.6; color: #334155;">
                Nous avons le plaisir de vous confirmer la bonne réception de votre dossier de demande de prêt en ligne chez <strong>Virxyd</strong>.
              </p>

              <div style="background-color: #0B1D3A; color: #ffffff; border-radius: 10px; padding: 20px; margin: 24px 0; text-align: center;">
                <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #cbd5e1;">Votre numéro de dossier</div>
                <div style="font-size: 24px; font-weight: 800; color: #E5A93C; margin-top: 4px; letter-spacing: 1.5px;">${refCode}</div>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 6px;">Conservez précieusement cette référence pour tout échange</div>
              </div>

              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; margin: 24px 0;">
                <h4 style="margin: 0 0 12px; color: #0B1D3A; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Récapitulatif de votre simulation :</h4>
                <table width="100%" style="font-size: 14px;">
                  <tr><td style="padding: 6px 0; color: #64748b;">Montant du prêt :</td><td style="font-weight: 700; color: #0B1D3A; text-align: right;">${amount} €</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">Durée souhaitée :</td><td style="font-weight: 600; color: #0B1D3A; text-align: right;">${months} mois</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;">Mensualité estimée :</td><td style="font-weight: 700; color: #E5A93C; text-align: right;">${monthly}</td></tr>
                </table>
              </div>

              <h4 style="color: #0B1D3A; font-size: 15px; margin: 28px 0 14px;">Les prochaines étapes de votre dossier :</h4>
              <table width="100%" style="font-size: 13px; line-height: 1.5; color: #334155;">
                <tr>
                  <td style="vertical-align: top; width: 32px; padding-bottom: 12px;">
                    <div style="background-color: #0B1D3A; color: #fff; width: 22px; height: 22px; border-radius: 50%; text-align: center; line-height: 22px; font-weight: 700; font-size: 12px;">1</div>
                  </td>
                  <td style="padding-bottom: 12px;"><strong>Analyse des justificatifs :</strong> Nos analystes étudient vos pièces sous 48h ouvrées.</td>
                </tr>
                <tr>
                  <td style="vertical-align: top; width: 32px; padding-bottom: 12px;">
                    <div style="background-color: #0B1D3A; color: #fff; width: 22px; height: 22px; border-radius: 50%; text-align: center; line-height: 22px; font-weight: 700; font-size: 12px;">2</div>
                  </td>
                  <td style="padding-bottom: 12px;"><strong>Décision définitive :</strong> Vous recevrez un accord formel et votre offre de contrat par courriel.</td>
                </tr>
                <tr>
                  <td style="vertical-align: top; width: 32px;">
                    <div style="background-color: #0B1D3A; color: #fff; width: 22px; height: 22px; border-radius: 50%; text-align: center; line-height: 22px; font-weight: 700; font-size: 12px;">3</div>
                  </td>
                  <td><strong>Signature & Déblocage :</strong> Dès signature électronique, le virement est opéré sous 72h.</td>
                </tr>
              </table>

              <p style="font-size: 14px; line-height: 1.6; color: #334155; margin-top: 28px;">
                Un conseiller est à votre entière disposition à l'adresse <a href="mailto:${RECEIVER_EMAIL}" style="color: #0B1D3A; font-weight: 600; text-decoration: none;">${RECEIVER_EMAIL}</a>.
              </p>

              <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0; font-weight: 600; color: #0B1D3A; font-size: 14px;">L'équipe des engagements — Virxyd</p>
                <p style="margin: 4px 0 0; font-size: 13px; color: #64748b;">SAS Cap Au Nord — ORIAS 14807766</p>
                <p style="margin: 4px 0 0; font-size: 13px;"><a href="https://virxyd.com" style="color: #E5A93C; text-decoration: none; font-weight: 600;">www.virxyd.com</a></p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #0B1D3A; padding: 18px 24px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #1e293b;">
              © 2026 Virxyd. SAS Cap Au Nord — Intermédiaire enregistré à l'ORIAS sous le numéro 14807766.<br>
              Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement.
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };

  const [adminResult, userResult] = await Promise.all([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(userAckMailOptions),
  ]);

  return { success: true, adminResult, userResult, refCode };
}
