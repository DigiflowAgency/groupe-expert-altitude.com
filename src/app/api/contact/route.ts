import { NextRequest, NextResponse } from 'next/server';

// Mail Hub Configuration
const MAIL_HUB_URL = 'https://jarvis-health.fr/api/mail-hub';
const MAIL_HUB_KEY = process.env.MAIL_HUB_KEY;
const SITE_ID = process.env.SITE_ID;
const SITE_SECRET = process.env.SITE_SECRET;

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, phone, company, serviceType, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !serviceType || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!MAIL_HUB_KEY || !SITE_ID || !SITE_SECRET) {
      console.error('Mail Hub credentials missing in environment variables');
      return NextResponse.json(
        { success: false, error: 'Configuration serveur manquante.' },
        { status: 500 }
      );
    }

    // Format email content
    const emailBody = `
Nouvelle demande de contact depuis le site GEA

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFORMATIONS CLIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nom : ${name}
📧 Email : ${email}
📞 Téléphone : ${phone}
${company ? `🏢 Entreprise : ${company}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DÉTAILS DE LA DEMANDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 Type de service : ${serviceType}
📝 Objet : ${subject}

💬 Message :
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Date : ${new Date().toLocaleString('fr-FR', {
  timeZone: 'Europe/Paris',
  dateStyle: 'full',
  timeStyle: 'short'
})}
`;

    // Prepare Mail Hub payload
    const mailHubPayload = {
      siteId: SITE_ID,
      siteSecret: SITE_SECRET,
      to: 'contact@groupe-expert-altitude.fr',
      subject: `[GEA] Nouvelle demande : ${subject}`,
      body: emailBody,
      from: email,
      replyTo: email,
      tags: ['contact-form', serviceType],
      metadata: {
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        company: company || '',
        serviceType,
        source: 'website-contact-form',
        timestamp: new Date().toISOString(),
      },
    };

    // Send to Mail Hub
    const mailHubResponse = await fetch(MAIL_HUB_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Mail-Hub-Key': MAIL_HUB_KEY,
      },
      body: JSON.stringify(mailHubPayload),
    });

    if (!mailHubResponse.ok) {
      const errorText = await mailHubResponse.text();
      console.error('Mail Hub error:', errorText);

      return NextResponse.json(
        {
          success: false,
          error: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous appeler directement.'
        },
        { status: 500 }
      );
    }

    const result = await mailHubResponse.json();

    return NextResponse.json({
      success: true,
      message: 'Votre demande a été envoyée avec succès. Nous vous recontacterons dans les plus brefs délais.',
      mailHubId: result.id,
    });

  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Une erreur est survenue. Veuillez réessayer plus tard.'
      },
      { status: 500 }
    );
  }
}
