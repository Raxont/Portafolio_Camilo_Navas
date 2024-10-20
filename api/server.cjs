const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const frontendApp = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS   
    }
});

// Ruta para manejar el envío de correos
app.post('/send-email', (req, res) => {
    const { user_name, user_email, subject, message, user_phone } = req.body;

    const mailOptions = {
        from: user_email,
        to: process.env.EMAIL_USER, 
        subject: subject,
        text: `Nombre: ${user_name}\nCorreo: ${user_email}\nTeléfono: ${user_phone}\nMensaje: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error al enviar el mensaje' });
        }
        res.status(200).json({ message: 'Mensaje enviado correctamente' });
    });
});

// Iniciar el servidor
app.listen(process.env.PORT_BAKCEND, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.HOST}:${process.env.PORT_BAKCEND}`);
});

// Configurar el servidor para el frontend
frontendApp.use(express.static(path.join(__dirname, '../src')));

// Servir el archivo index.html
frontendApp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Iniciar el servidor del frontend
frontendApp.listen(process.env.PORT_FRONTEND, () => {
    console.log(`Servidor de frontend corriendo en ${process.env.HOST}:${process.env.PORT_FRONTEND}`);
});