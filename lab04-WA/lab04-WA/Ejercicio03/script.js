document.getElementById('fechaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fecha = document.getElementById('fecha').value;
    obtenerDiasFaltantes(fecha);
});

function obtenerDiasFaltantes(fecha) {
    fetch(`http://localhost:8080/fecha?fecha=${fecha}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('resultado').textContent = data;
        })
        .catch(error => console.error('Error:', error));
}

function obtenerHoraActual() {
    const fecha = new Date();
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');

    return `${horas}:${minutos}:${segundos}`;
}

document.getElementById('hora').textContent = obtenerHoraActual();
