// Fecha del evento (ajustar según la fecha real del evento)
const fechaEvento = new Date('2025-07-11T21:00:00').getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaEvento - ahora;

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
    document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
    document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');

    if (tiempoRestante < 0) {
        clearInterval(intervalo);
        document.getElementById('dias').textContent = '00';
        document.getElementById('horas').textContent = '00';
        document.getElementById('minutos').textContent = '00';
        document.getElementById('segundos').textContent = '00';
    }
}

// Actualizar el contador cada segundo
const intervalo = setInterval(actualizarContador, 1000);

// Actualizar inmediatamente al cargar la página
actualizarContador(); 