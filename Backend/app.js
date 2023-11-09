const express = require('express');
const app = express();
const port = 3000;

app.get('../paginas/landpage.php', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
