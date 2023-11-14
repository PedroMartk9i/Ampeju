const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  documento: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  telefono: String,
});

// Método pre para hash de la contraseña antes de guardar el documento
usuarioSchema.pre('save', async function (next) {
  const usuario = this;
  if (!usuario.isModified('contraseña')) return next();

  try {
    const hash = await bcrypt.hash(usuario.contraseña, 10);
    usuario.contraseña = hash;
    next();
  } catch (error) {
    return next(error);
  }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
