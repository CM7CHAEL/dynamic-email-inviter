# Email Sender con Node.js y Nodemailer

Este proyecto es un servidor simple en Node.js que permite enviar correos electrónicos personalizados utilizando **Nodemailer** y **Handlebars** para plantillas HTML dinámicas. Es ideal para enviar invitaciones personalizadas a un evento, como un stand tecnológico en una feria, con opciones de personalización para cada destinatario.

## Características

- Envío de correos electrónicos masivos a múltiples destinatarios.
- Personalización de contenido del correo para cada destinatario (nombre, empresa, dirección).
- Integración de plantillas HTML dinámicas utilizando Handlebars.
- Enlace directo a Google Calendar para agendar una reunión en el evento.

## Requisitos Previos

- Node.js (v14 o superior)
- Una cuenta de Gmail para el envío de correos o credenciales de otro servicio SMTP.
- Clave de aplicación para Gmail (si usas autenticación de dos pasos).

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/StudioXperto/dynamic-email-inviter.git

## Ejecutar en la consola
   node index.js