const express = require('express');
const path = require('path');

const app = express();

// Configurar el motor de vistas Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para procesar los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/sobre', (req, res) => {
  res.render('sobre');
});

app.get('/experiencia', (req, res) => {
  res.render('experiencia');
});

app.get('/educacion', (req, res) => {
  res.render('educacion');
});

app.get('/habilidades', (req, res) => {
  res.render('habilidades');
});

app.get('/proyectos', (req, res) => {
  res.render('proyectos');
});

app.get('/contacto', (req, res) => {
  res.render('contacto');
});

app.get('/confirmacion', (req, res) => {
  res.render('confirmacion');
});

app.post('/enviar-mensaje', (req, res) => {
  const { nombre, email, mensaje } = req.body;

  // Validar que los campos no estén vacíos
  if (!nombre || !email || !mensaje) {
    return res.send('Por favor completa todos los campos.');
  }

  // Si todo está correcto, envías una respuesta de éxito
  res.redirect('/confirmacion');
});


// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
