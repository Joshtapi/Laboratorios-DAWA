const fs = require('fs');

function enrutar(url) {
    switch(url) {
        case '/inicio':
            return cargarPagina('inicio.html');
        case '/galeria':
            return cargarPagina('fotos.html');
        case '/fecha':
            return cargarPagina('fecha.html');
        case '/hora':
            return cargarPagina('hora.html');
        default:
            return '404 Página no encontrada';
    }
}

function cargarPagina(nombreArchivo) {
    try {
        const contenido = fs.readFileSync(nombreArchivo, 'utf-8');
        return contenido;
    } catch (error) {
        return 'Error al cargar la página';
    }
}

module.exports = enrutar;
