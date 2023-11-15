const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const UsuarioController = require('./controllers/adm_usuarios');



app.use(bodyParser.json());

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landpage.html'));
});

// Configuración de la conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Ampeju');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

app.post('/api/crearUsuario', UsuarioController.crearUsuario);
