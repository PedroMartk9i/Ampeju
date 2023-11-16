const Reserva = require('../models/reservaModel');

// Controlador para guardar una nueva reserva
async function guardarReserva(req, res) {
  try {
    const nuevaReserva = new Reserva(req.body);
    await nuevaReserva.save();
    res.status(201).json({ mensaje: 'Reserva guardada con éxito', reserva: nuevaReserva });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al guardar la reserva', error: error.message });
  }
}

// Controlador para obtener reservas por documento de usuario
async function obtenerReservaPorUsuario(req, res) {
  const docUsuario = req.params.docUsuario;

  try {
    const reservas = await Reserva.find({ doc_usuario: docUsuario });
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las reservas', error: error.message });
  }
}




// Exportar las funciones del controlador
module.exports = {
  guardarReserva,
  obtenerReservaPorUsuario
};
