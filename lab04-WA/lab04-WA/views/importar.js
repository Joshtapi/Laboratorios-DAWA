var http = require('http'),
    fs = require('fs'),
    parser = require('./parser_var.js'), 
    p = parser.parse_vars;

http.createServer(function(req, res) {
    fs.readFile('./form.html', function(err, html) {
        var html_string = html.toString();

        var respuesta = p(req);
        var parametros = respuesta['parametros'];
        var valores = respuesta['valores'];

        for (var i = parametros.length - 1; i >= 0; i--) {
            html_string = html_string.replace('{' + parametros[i] + '}', valores[i]);
        }

        var batman = parser.batman;
        var identidad = batman.identidad;
        var poder = batman.poder;

        html_string = html_string.replace('{identidad}', identidad);
        html_string = html_string.replace('{poder}', poder);

        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(html_string);
        res.end();
    });
}).listen(8080)