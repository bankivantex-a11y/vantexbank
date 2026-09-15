const fs = require('fs');
const lines = fs.readFileSync('.env.local', 'utf8').split('\n');
lines.forEach(l => {
  const idx = l.indexOf('=');
  if (idx > 0) {
    const k = l.substring(0, idx).trim();
    const v = l.substring(idx + 1).trim().replace(/^["']|["']$/g, '');
    process.env[k] = v;
  }
});

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
});

async function run() {
  try {
    console.log('User:', process.env.SMTP_USER);
    console.log('Host:', process.env.SMTP_HOST);
    const res = await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Virxyd" <${process.env.SMTP_USER}>`,
      to: 'contact@virxyd.com',
      replyTo: 'client@test.com',
      subject: 'Test scratch',
      text: 'Test body'
    });
    console.log('Success:', res.messageId);
  } catch (err) {
    console.error('Error sending:', err);
  }
}
run();
