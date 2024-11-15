const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

const app = express();
const PORT = 3000;

// Configura
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tucorreo@gmail.com', // Tu dirección de correo  (Modificar)
    pass: 'el pass creado en tu cuenta' // Tu contraseña de correo o clave de aplicación (Modificar)
  }
});

// Función para enviar correos con HTML dinámico
const sendEmails = async (recipients) => {
  const htmlTemplate = fs.readFileSync(path.join(__dirname, 'templates', 'emailTemplate.html'), 'utf-8');
  const template = handlebars.compile(htmlTemplate);
  // Itera sobre los destinatarios y envía el correo personalizado a cada uno
  for (let recipient of recipients) {
    // Crea el contenido dinámico para cada destinatario
    const htmlContent = template({
      nombreEmpresa: recipient.nombreEmpresa,
      direccionEmpresa: recipient.direccionEmpresa,
      nombrePersona: recipient.nombrePersona
    });
    let mailOptions = {
      from: 'Tranki Live Calm',
      to: recipient.email,
      subject: 'CARTA DE INVITACIÓN',
      html: htmlContent
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Correo enviado a: ${recipient.email}`);
    } catch (error) {
      console.error(`Error al enviar a ${recipient.email}:`, error);
    }
  }
};

// Endpoint para enviar correos
app.post('/send-emails', async (req, res) => {
  // Lista de destinatarios
  const recipients = [
    {
      email: 'studioxperto@gmail.com',
      nombreEmpresa: 'Studio Xperto',
      direccionEmpresa: 'Nuevo pucusana mz h lote 11',
      nombrePersona: 'Sr. Studio Xperto'
    },
    {
      email: 'cm7chael@gmail.com',
      nombreEmpresa: 'StudioXperto',
      direccionEmpresa: 'San Miguel, Lima',
      nombrePersona: 'Sr. Michael Cervera'
    }
  ];

  try {
    await sendEmails(recipients);
    res.send('Correos enviados exitosamente');
  } catch (error) {
    res.status(500).send('Error al enviar correos');
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
