module.exports = function calcularDiasFaltantes(fechaParam) {
    // Convertir la fecha en un formato reconocible por JavaScript (aammdd)
    const partesFecha = fechaParam.split('/');
    const fecha = new Date(`${partesFecha[2]}-${partesFecha[1]}-${partesFecha[0]}`);
    const hoy = new Date();

    // Calcular los días faltantes
    const milisegundosPorDia = 24 * 60 * 60 * 1000; // Cantidad de milisegundos en un día
    const diasFaltantes = Math.round((fecha - hoy) / milisegundosPorDia);

    return diasFaltantes;
};
