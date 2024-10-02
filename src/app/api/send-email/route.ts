import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');
import { google } from 'googleapis';

const { OAuth2 } = google.auth;

const OAuth2Client = new OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
);

OAuth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

// Fonction pour envoyer l'email
const sendEmail = async (to: string, subject: string, text: string) => {
    const accessToken = await OAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.GMAIL_USER,
            clientId: process.env.GMAIL_CLIENT_ID,
            clientSecret: process.env.GMAIL_CLIENT_SECRET,
            refreshToken: process.env.GMAIL_REFRESH_TOKEN,
            accessToken: accessToken.token,
        },
    });

    await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to,
        subject,
        text,
    });
};

console.log('Variables d\'environnement:', {
    user: process.env.GMAIL_USER,
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
});

// Exportation de la méthode POST
export async function POST(req: Request) {
    const { to, subject, text } = await req.json();

    console.log('Données reçues:', { to, subject, text }); // Ajoutez cette ligne

    try {
        await sendEmail(to, subject, text);
        return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error); // Ajoutez cette ligne
        return NextResponse.json({ message: 'Erreur lors de l\'envoi', error: error.message || error }, { status: 500 });
    }
}
