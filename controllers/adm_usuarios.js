const Usuario = require('../models/usuarioModel');

// Controlador para la creación de un nuevo usuario
async function crearUsuario(req, res) {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario creado con éxito', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el usuario', error: error.message });
  }
}

// Controlador para obtener todos los usuarios
async function obtenerUsuarios(req, res) {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener usuarios', error: error.message });
  }
}

// Controlador para obtener un usuario por su ID
async function obtenerUsuarioPorId(req, res) {
  const usuarioId = req.params.id;

  try {
    const usuario = await Usuario.findById(usuarioId);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el usuario', error: error.message });
  }
}

// Controlador para actualizar un usuario por su ID
async function actualizarUsuario(req, res) {
  const usuarioId = req.params.id;

  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(usuarioId, req.body, { new: true });
    if (!usuarioActualizado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.status(200).json({ mensaje: 'Usuario actualizado con éxito', usuario: usuarioActualizado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el usuario', error: error.message });
  }
}

async function eliminarUsuario(req, res) {
    const usuarioId = req.params.id;
  
    try {
      const usuarioEliminado = await Usuario.findByIdAndDelete(usuarioId);
      if (!usuarioEliminado) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      res.status(200).json({ mensaje: 'Usuario eliminado con éxito', usuario: usuarioEliminado });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el usuario', error: error.message });
    }
  }

// Exportar las funciones del controlador
module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
};
