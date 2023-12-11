function calcular() {
    const fecha = document.getElementById('fecha').value;
    const fechaActual = new Date();
    const fechaObjetivo = new Date(fecha);
    const unDiaEnMilisegundos = 1000 * 60 * 60 * 24;

    const diferenciaEnMilisegundos = fechaObjetivo - fechaActual;
    const diasFaltantes = Math.floor(diferenciaEnMilisegundos / unDiaEnMilisegundos);

    document.getElementById('resultado').textContent = `Días faltantes para ${fecha}: ${diasFaltantes}`;
}
