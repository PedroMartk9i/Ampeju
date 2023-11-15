document.getElementById('registroForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const usuario = {};
  formData.forEach((value, key) => {
    usuario[key] = value;
  });

  try {
    const response = await fetch('/api/crearUsuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });

    if (response.ok) {
      console.log('Usuario creado con éxito no');
      // Puedes realizar acciones adicionales si es necesario
    } else {
      console.error('Error al crear el usuario:', response.statusText);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error.message);
  }
});
