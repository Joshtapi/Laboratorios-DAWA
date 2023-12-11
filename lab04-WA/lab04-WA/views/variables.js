var http = require('http');
var fs = require('fs');

var parametros = [];
var valores = [];

http.createServer(function(req, res) {
    fs.readFile('./form.html', function(err, html) {
        var html_string = html.toString();

        if (req.url.indexOf('?') > 0) {
            var url_data = req.url.split('?');
            var arreglo_parametros = url_data[1].split('&');

            for (var i = arreglo_parametros.length - 1; i >= 0; i--) {
                var parametro = arreglo_parametros[i];
                var param_data = parametro.split('=');
                parametros[i] = param_data[0];
                valores[i] = param_data[1];
            }
        }

        for (var i = parametros.length - 1; i >= 0; i--) {
            html_string = html_string.replace("{" + parametros[i] + "}", valores[i]);
        }

        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(html_string);
        res.end();
    });
}).listen(8080);
