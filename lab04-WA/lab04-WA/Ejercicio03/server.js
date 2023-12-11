const http = require('http');
const url = require('url');
const fs = require('fs');
const enrutar = require('./enrutador.js');
const obtenerHoraActual = require('./hora.js');
const calcularDiasFaltantes = require('./fecha.js');

http.createServer(function(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/hora') {
        const hora12h = obtenerHoraActual('12h'); // Obtener la hora en formato de 12 horas
        const hora24h = obtenerHoraActual('24h'); // Obtener la hora en formato de 24 horas
        const contenido = fs.readFileSync('hora.html', 'utf-8');
    
        // Reemplazar los marcadores de posición {hora12h} y {hora24h} en el contenido HTML
        const contenidoActualizado = contenido
            .replace('{hora12h}', hora12h)
            .replace('{hora24h}', hora24h);
    
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(contenidoActualizado);
        res.end();
    } else if (pathname === '/fecha') {
        const fechaParam = parsedUrl.query.fecha;
        const diasFaltantes = calcularDiasFaltantes(fechaParam);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<h1>Dias faltantes para ${fechaParam}: ${diasFaltantes}</h1>`);
        res.end();
    } else {
        const contenido = enrutar(pathname);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(contenido);
        res.end();
    }
}).listen(8080);
