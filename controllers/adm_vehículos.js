const Vehiculo = require('../models/vehiculoModel');

// Controlador para guardar un nuevo vehículo
async function guardarVehiculo(req, res) {
  try {
    const nuevoVehiculo = new Vehiculo(req.body);
    await nuevoVehiculo.save();
    res.status(201).json({ mensaje: 'Vehículo guardado con éxito', vehiculo: nuevoVehiculo });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al guardar el vehículo', error: error.message });
  }
}

// Controlador para obtener un vehículo por su número de placa
async function obtenerVehiculoPorPlaca(req, res) {
  const placa = req.params.placa;

  try {
    const vehiculo = await Vehiculo.findOne({ placa });
    if (!vehiculo) {
      return res.status(404).json({ mensaje: 'Vehículo no encontrado' });
    }
    res.status(200).json(vehiculo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el vehículo', error: error.message });
  }
}

// Exportar las funciones del controlador
module.exports = {
  guardarVehiculo,
  obtenerVehiculoPorPlaca
};
