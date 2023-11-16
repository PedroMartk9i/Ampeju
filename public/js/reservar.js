document.querySelector('.formulario1').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    // Obtener el ID del vehículo seleccionado en el dropdown
    const vehiculoId = document.getElementById('vehiculos').value;
  
    // Obtener el documento del usuario
    const documento = document.getElementById('color').value;
  
    try {
      // Realizar una solicitud para guardar la reserva
      const response = await fetch('/api/crearReserva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ doc_usuario: documento, vehiculo: vehiculoId }),
      });
  
      if (response.ok) {
        console.log('Reserva creada con éxito');
        // Puedes realizar acciones adicionales si es necesario
      } else {
        console.error('Error al crear la reserva:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error.message);
    }
  });
  