document.getElementById('inscribirForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const vehiculo = {};
    formData.forEach((value, key) => {
        vehiculo[key] = value;
    });

    try {
        const response = await fetch('/api/inscribirVehiculo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(vehiculo),
        });

        if (response.ok) {
            console.log('Vehículo inscrito con éxito');
            // Puedes realizar acciones adicionales si es necesario
        } else {
            console.error('Error al inscribir el vehículo:', response.statusText);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error.message);
    }
});