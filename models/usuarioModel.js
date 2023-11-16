const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  tipo_doc: {type: String, required: true},
  documento: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  telefono: Number,
});

// Método pre para hash de la contraseña antes de guardar el documento
usuarioSchema.pre('save', async function (next) {
  const usuario = this;
  if (!usuario.isModified('password')) return next();

  try {
    const hash = await bcrypt.hash(usuario.password, 10);
    usuario.password = hash;
    next();
  } catch (error) {
    return next(error);
  }
});

const Usuario = mongoose.model('Usuario', usuarioSchema, 'Usuarios');

module.exports = Usuario;
