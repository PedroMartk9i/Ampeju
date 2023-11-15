const Usuario = require('../../controllers/adm_usuarios');

document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    
    const formData = new FormData(event.target);
    const usuario = {};
    formData.forEach((value, key) => {
      usuario[key] = value;
    });
    // Aquí puedes realizar la solicitud al backend para registrar al usuario
    
  });
