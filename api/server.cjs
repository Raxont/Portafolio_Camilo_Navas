const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const puertoBack = process.env.PORT_BACKEND

app.use(cors({
    origin: "https://raxo.netlify.app",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization", "x-version"], 
}));
app.use(bodyParser.json());

// Iniciar el servidor
app.listen(puertoBack, () => {
    console.log(`Servidor de backend corriendo en el puerto ${puertoBack}`);
});