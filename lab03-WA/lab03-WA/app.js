const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');

// Middleware para procesar datos del cuerpo de las solicitudes HTTP
app.use(bodyParser.urlencoded({ extended: true }));

// Directorio de archivos estáticos
app.use(express.static(__dirname + '/public'));

// Ruta de inicio de sesión
app.get('/', (req, res) => {
    res.render('login');
});

// Ruta de matriculas
app.post('/matriculas', (req, res) => {
    const usuario = req.body.usuario;
    const contrasena = req.body.contrasena;

    if (usuario === 'usuario' && contrasena === 'contraseña') {
        res.render('matriculas');
    } else {
        res.render('login', { error: 'Usuario o contraseña incorrectos' });
    }
});

// Ruta de confirmacion de matriculas (POST)
app.post('/confirmacion', (req, res) => {
    const curso = req.body.curso;
    const medioPago = req.body.medioPago;

    // Lógica para procesar los datos y mostrar la vista de confirmación
    res.render('confirmacion', { curso, medioPago });
});

// Ruta de confirmacion de matriculas (GET)
app.get('/confirmacion', (req, res) => {
    const curso = req.query.curso;
    const medioPago = req.query.medioPago;
    const precioFinal = req.query.precioFinal;

    res.render('confirmacion', { curso, medioPago, precioFinal });
});

// Puerto en el que el servidor escucha las solicitudes
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
