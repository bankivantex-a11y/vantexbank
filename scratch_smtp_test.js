const dns = require('dns');
if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder('ipv4first');
}

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: 'contact@virxyd.com',
    pass: '33Virxyd7@'
  },
  tls: {
    rejectUnauthorized: false
  }
});

async function test() {
  console.log('Testing sending external acknowledgment email...');
  try {
    const res = await transporter.sendMail({
      from: '"Virxyd" <contact@virxyd.com>',
      to: 'contact@virxyd.com', // Let's also test another email
      subject: 'Accusé de réception test',
      text: 'Votre message a bien été reçu.'
    });
    console.log('Ack email sent! ID:', res.messageId);
  } catch (e) {
    console.error('Ack email failed:', e);
  }
}

test();
