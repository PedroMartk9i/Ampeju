const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema({
  tipo: String,
  modelo: String,
  marca: String,
  placa: String,
  color: String,
});

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);

module.exports = Vehiculo;
