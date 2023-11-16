document.getElementById('comentarioForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const comentario = {};
    formData.forEach((value, key) => {
        comentario[key] = value;
    });

    try {
        const response = await fetch('/api/crearComentario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comentario),
        });

        if (response.ok) {
            console.log('Comentario inscrito con éxito');
            // Puedes realizar acciones adicionales si es necesario
        } else {
            console.error('Error al crear el comentario:', response.statusText);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error.message);
    }
});