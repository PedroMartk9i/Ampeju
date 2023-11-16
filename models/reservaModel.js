const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  doc_usuario: { type: Number, required: true }, // Asumo que es el documento del usuario
  vehiculo: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehiculo', required: true },
});

const Reserva = mongoose.model('Reserva', reservaSchema, 'Reservas');

module.exports = Reserva;
