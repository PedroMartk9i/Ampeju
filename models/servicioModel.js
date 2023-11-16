const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  reserva: { type: String, required: true},
  calificacion_general: { type: String, required: true },
  sugerencias: {type: String, required: true},
  documento: {type: String, required: true}

});

const Servicio = mongoose.model('Servicio', servicioSchema, 'Servicios');

module.exports = Servicio;
