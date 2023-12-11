const express = require('express');
const app = express();

// Define la función para calcular
function calcular(num1, num2, operacion) {
    let resultado;
    switch (operacion) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            resultado = num1 / num2;
            break;
        default:
            resultado = 'Operación no válida';
    }
    return resultado;
}

// Define la función para procesar texto
function procesarTexto(texto, accion) {
    let resultado;
    switch (accion) {
        case 'dividirPalabras':
            resultado = texto.split(' ');
            break;
        case 'extraerCadena':
            resultado = texto.substring(2, 5);
            break;
        case 'eliminarEspacios':
            resultado = texto.replace(/\s/g, '');
            break;
        case 'capitalizar':
            resultado = texto.charAt(0).toUpperCase() + texto.slice(1);
            break;
        case 'minusculas':
            resultado = texto.toLowerCase();
            break;
        case 'mayusculas':
            resultado = texto.toUpperCase();
            break;
        case 'contarCaracteres':
            resultado = texto.length;
            break;
        default:
            resultado = 'Acción no válida';
    }
    return resultado;
}

// Define rutas para servir los archivos HTML
app.get('/calculadora', (req, res) => {
    res.sendFile(__dirname + '/public/calculadora.html');
});

app.get('/texto', (req, res) => {
    res.sendFile(__dirname + '/public/texto.html');
});

// Ruta para procesar la calculadora
app.get('/calcular', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const operacion = req.query.operacion;
    const resultado = calcular(num1, num2, operacion);
    res.send(resultado.toString());
});

// Ruta para procesar el texto
app.get('/procesarTexto', (req, res) => {
    const texto = req.query.texto;
    const accion = req.query.accion;
    const resultado = procesarTexto(texto, accion);
    res.send(resultado.toString());
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
