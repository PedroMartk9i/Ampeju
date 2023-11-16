const Comentario = require('../models/comentarioModel');

// Controlador para guardar un nuevo comentario
async function guardarComentario(req, res) {
  try {
    const nuevoComentario = new Comentario(req.body);
    await nuevoComentario.save();
    res.status(201).json({ mensaje: 'Comentario guardado con éxito', comentario: nuevoComentario });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al guardar el comentario', error: error.message });
  }
}

// Exportar la función del controlador
module.exports = {
  guardarComentario
};
