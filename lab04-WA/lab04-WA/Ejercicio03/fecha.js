function calcularDiasFaltantes(fecha) {
    const fechaActual = new Date();
    const fechaObjetivo = new Date(fecha);
    const unDiaEnMilisegundos = 1000 * 60 * 60 * 24;

    const diferenciaEnMilisegundos = fechaObjetivo - fechaActual;
    const diasFaltantes = Math.floor(diferenciaEnMilisegundos / unDiaEnMilisegundos);

    return diasFaltantes;
}

module.exports = calcularDiasFaltantes;
