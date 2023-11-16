document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const usuario = {};
    formData.forEach((value, key) => {
      usuario[key] = value;
    });
  
    try {
      const response = await fetch('/api/iniciarSesion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });
  
      if (response.ok) {
        console.log('Inicio de sesión exitoso');
        // Redirige a la página de inicio o realiza acciones adicionales si es necesario
      } else {
        console.error('Error al iniciar sesión:', response.statusText);
        // Muestra un mensaje de error al usuario si es necesario
      }
    } catch (error) {
      console.error('Error en la solicitud:', error.message);
    }
  });
  