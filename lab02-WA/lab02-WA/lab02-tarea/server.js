const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

// Configura body-parser para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Configura Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static(__dirname + '/public'));

// Ruta para manejar el envío del formulario de contacto
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Aquí puedes agregar lógica para enviar el correo electrónico o realizar otras acciones con los datos.

  // Redirige a la página de confirmación
  res.redirect('/confirmation');
});

// Ruta para la página de confirmación
app.get('/confirmation', (req, res) => {
  res.sendFile(__dirname + '/public/confirmacion.html');
});

// Configura el servidor para escuchar en el puerto
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
