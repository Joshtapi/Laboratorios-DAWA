function obtenerHoraActual(formato) {
    const fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    // Asegurarse de que los valores tengan al menos dos dígitos
    horas = horas.toString().padStart(2, '0');
    minutos = minutos.toString().padStart(2, '0');
    segundos = segundos.toString().padStart(2, '0');

    if (formato === '12h') {
        // Convertir a formato de 12 horas
        horas = (horas % 12 || 12).toString().padStart(2, '0');
        return `${horas}:${minutos}:${segundos} ${horas >= 12 ? 'AM' : 'PM'}`;
    } else if (formato === '24h') {
        // Mantener el formato de 24 horas
        return `${horas}:${minutos}:${segundos}`;
    } else {
        // Si el formato no es reconocido, retornar null o un mensaje de error
        return null;
    }
}

module.exports = obtenerHoraActual;

