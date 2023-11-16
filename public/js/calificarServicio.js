$(document).ready(function() {
    // Manejador de clic para el botón de enviar
    $('#enviarBtn').on('click', async function() {
      // Obtener valores del formulario
      const documento = $('#documento').val();
      const calificacion_general = $('#calificacion-general').val();
      const sugerencias = $('#sugerencias').val();
  
      try {
        // Realizar una solicitud para obtener el ID de la reserva
        const response = await fetch(`/api/obtenerReservaPorUsuario/${documento}`);
        const reserva = await response.json();
  
        if (!reserva || reserva.length === 0) {
          console.error('Reserva no encontrada para el usuario');
          return;
        }
  
        // Obtener el ID de la reserva
        const idReserva = reserva[0]._id;
  
        // Crear objeto para enviar a la base de datos
        const servicioData = {
          reserva: idReserva,
          calificacion_general,
          sugerencias,
          documento,
        };
  
        // Realizar una solicitud para guardar el servicio
        const servicioResponse = await fetch('/api/crearCalificacion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(servicioData),
        });
  
        if (servicioResponse.ok) {
          console.log('Servicio guardado con éxito');
          // Puedes realizar acciones adicionales si es necesario
        } else {
          console.error('Error al guardar el servicio:', servicioResponse.statusText);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error.message);
      }
    });
  });
  