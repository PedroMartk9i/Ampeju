async function cargarOpciones() {
    const dropdown = document.getElementById('vehiculos');
    
    try {
      // Realizar una solicitud para obtener los vehículos disponibles
      const response = await fetch('/api/vehiculosDisponibles');
      const vehiculos = await response.json();
      
      // Limpiar las opciones actuales
      dropdown.innerHTML = '';

      // Llenar el dropdown con el formato Tipo + modelo + marca
      vehiculos.forEach((vehiculo) => {
        const option = document.createElement('option');
        option.value = vehiculo._id; // Puedes utilizar el ID del vehículo como valor
        option.text = `${vehiculo.tipo} ${vehiculo.modelo} ${vehiculo.marca}`;
        dropdown.appendChild(option);
      });
    } catch (error) {
      console.error('Error al obtener los vehículos:', error.message);
    }
  }

  // Llama a la función para cargar las opciones cuando se carga la página
  window.onload = cargarOpciones;