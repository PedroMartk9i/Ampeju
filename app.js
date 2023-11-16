const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const UsuarioController = require('./controllers/adm_usuarios');
const VehiculoController = require('./controllers/adm_vehículos');
const ComentarioController = require('./controllers/adm_comentarios');
const reservasController = require('./controllers/adm_reservas');
const serviciosController = require('./controllers/adm_servicios');



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

app.post('/api/iniciarSesion', UsuarioController.iniciarSesion);

app.post('/api/inscribirVehiculo', VehiculoController.guardarVehiculo);

app.get('/api/vehiculosDisponibles', VehiculoController.obtenerVehiculosDisponibles);

app.post('/api/crearComentario', ComentarioController.guardarComentario);

app.post('/api/crearReserva', reservasController.guardarReserva);

app.post('/api/crearCalificacion', serviciosController.guardarServicio);

app.get('/api/obtenerReservaPorUsuario/:docUsuario', reservasController.obtenerReservaPorUsuario);
