// usuarioRoutes.js

const express = require('express');
const router = express.Router();
const usuarioController = require('../Ampeju/controllers/adm_usuarios');

// Ruta para mostrar todos los usuarios
router.get('/usuarios', usuarioController.obtenerUsuarios);

// Ruta para mostrar un usuario específico
router.get('/usuarios/:id', usuarioController.obtenerUsuarioPorId);

// Ruta para agregar un nuevo usuario
router.post('/usuarios', usuarioController.crearUsuario);

// Ruta para actualizar un usuario existente
router.put('/usuarios/:id', usuarioController.actualizarUsuario);

// Ruta para eliminar un usuario
router.delete('/usuarios/:id', usuarioController.eliminarUsuario);

module.exports = router;
