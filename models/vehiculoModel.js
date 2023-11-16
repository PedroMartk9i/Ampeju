const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema({
  tipo: { type: String, required: true },
  modelo: { type: String, required: true },
  marca: { type: String, required: true },
  placa: { type: String, required: true, unique: true },
  color: { type: String, required: true },
});

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema, 'Vehiculos');

module.exports = Vehiculo;
