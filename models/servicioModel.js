const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  reserva: { type: mongoose.Schema.Types.ObjectId, ref: 'Reserva', required: true },
  calificacion: {
    servicio: { type: Number, required: true },
    atencion_cliente: { type: Number, required: true },
    facilidad_reserva: { type: Number, required: true },
  },
});

const Servicio = mongoose.model('Servicio', servicioSchema, 'Servicios');

module.exports = Servicio;
