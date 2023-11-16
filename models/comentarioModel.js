const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  comentario: { type: String, required: true },
});

const Comentario = mongoose.model('Comentario', comentarioSchema, 'Comentarios');

module.exports = Comentario;
