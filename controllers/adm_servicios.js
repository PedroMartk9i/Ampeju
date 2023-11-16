const Servicio = require('../models/servicioModel');

// Controlador para obtener un servicio por documento de usuario
async function obtenerServicioPorUsuario(req, res) {
  const docUsuario = req.params.docUsuario;

  try {
    const servicio = await Servicio.findOne({ 'reserva.doc_usuario': docUsuario });
    if (!servicio) {
      return res.status(404).json({ mensaje: 'Servicio no encontrado' });
    }
    res.status(200).json(servicio);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el servicio', error: error.message });
  }
}

// Controlador para guardar un nuevo servicio
async function guardarServicio(req, res) {
  try {
    const nuevoServicio = new Servicio(req.body);
    await nuevoServicio.save();
    res.status(201).json({ mensaje: 'Servicio guardado con éxito', servicio: nuevoServicio });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al guardar el servicio', error: error.message });
  }
}

// Exportar las funciones del controlador
module.exports = {
  obtenerServicioPorUsuario,
  guardarServicio
};
