const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Agregamos bodyParser para procesar formularios

// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

// Parsear el cuerpo de las solicitudes para procesar formularios
app.use(bodyParser.urlencoded({ extended: true }));



// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

// Ruta para renderizar la plantilla EJS
app.get('/ejs', (req, res) => {
  const posts = [
    { titulo: 'Primer Post', contenido: 'Contenido del primer post' },
    { titulo: 'Segundo Post', contenido: 'Contenido del segundo post' },
    // ... otros posts
  ];
  res.render('index', { nombre: 'Joshua EJS', email: 'Joshua@email.com', posts: posts });
});


// Ruta para renderizar la página principal
app.get('/pug', (req, res) => {
  const nombre = 'Joshua'; // Define el nombre que quieres mostrar
  const email = 'Joshua@email.com'; // Define el email que quieres mostrar
  const posts = [
    { titulo: 'Post 1', contenido: 'Contenido del Post 1' },
    { titulo: 'Post 2', contenido: 'Contenido del Post 2' },
    // Otros posts...
  ];
  res.render('index', { nombre, email, posts });
});



// Ruta para mostrar una lista de usuarios
app.get('/usuarios', (req, res) => {
  const usuarios = [
    { nombre: 'Usuario 1', email: 'usuario1@example.com' },
    { nombre: 'Usuario 2', email: 'usuario2@example.com' },
    // ...otros usuarios
  ];
  res.render('usuarios', { usuarios: usuarios });
});


// Ruta para renderizar la plantilla Pug de tu plantilla personalizada
app.get('/miplantilla-pug', (req, res) => {
  res.render('miplantilla', { mensaje: '¡Hola desde la plantilla Pug!' });
});

// Ruta para renderizar la plantilla EJS de tu plantilla personalizada
app.get('/miplantilla-ejs', (req, res) => {
  res.render('miplantilla.ejs', { mensaje: '¡Hola desde la plantilla EJS!' });
});

// Ruta para el perfil de usuario
app.get('/perfil/:id', (req, res) => {
  const userId = req.params.id;
  // Aquí puedes buscar los datos del usuario en una base de datos, por ejemplo
  const user = { id: userId, nombre: 'Usuario ' + userId, email: 'usuario' + userId + '@ejemplo.com' };
  res.render('perfil', { user: user });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});


// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});
