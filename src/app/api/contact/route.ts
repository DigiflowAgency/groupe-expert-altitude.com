import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // 1. Récupérer les données du formulaire
    const { name, email, phone, company, serviceType, subject, message } = await req.json();

    // 2. Validation basique
    if (!name || !email || !phone || !serviceType || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      );
    }

    // 3. Validation des variables d'environnement
    if (!process.env.MAIL_HUB_KEY || !process.env.SITE_ID || !process.env.SITE_SECRET) {
      console.error('Mail Hub credentials missing in environment variables');
      return NextResponse.json(
        { success: false, error: 'Configuration serveur manquante.' },
        { status: 500 }
      );
    }

    // 4. Formater le message HTML
    const htmlMessage = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #1a365d;">Nouvelle demande de contact - GEA</h2>

        <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2d3748; margin-top: 0;">Informations client</h3>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone}</p>
          ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ''}
        </div>

        <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2d3748; margin-top: 0;">Détails de la demande</h3>
          <p><strong>Type de service :</strong> ${serviceType}</p>
          <p><strong>Objet :</strong> ${subject}</p>
        </div>

        <div style="background: #edf2f7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2d3748; margin-top: 0;">Message</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
        <p style="color: #718096; font-size: 12px;">
          Date : ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris', dateStyle: 'full', timeStyle: 'short' })}
        </p>
      </div>
    `;

    // 5. Appeler le Mail Hub avec les headers corrects
    const response = await fetch('https://jarvis-health.fr/api/mail-hub', {
      method: 'POST',
      headers: {
        'X-MAIL-HUB-KEY': process.env.MAIL_HUB_KEY,
        'X-SITE-ID': process.env.SITE_ID,
        'X-SITE-SECRET': process.env.SITE_SECRET,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject: `[GEA] Nouvelle demande : ${subject}`,
        message: htmlMessage,
        replyTo: email
      })
    });

    const data = await response.json();

    // 6. Retourner le résultat
    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: 'Votre demande a été envoyée avec succès. Nous vous recontacterons dans les plus brefs délais.'
      });
    } else {
      console.error('Mail Hub error:', data);
      return NextResponse.json(
        { success: false, error: data.error || 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous appeler directement.' },
        { status: response.status }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Une erreur est survenue. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}
