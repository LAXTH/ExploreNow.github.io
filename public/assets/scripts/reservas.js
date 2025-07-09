document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-reserva');
    const confirmacion = document.getElementById('confirmacion');
    const detalles = document.getElementById('detalles');
    const btnVolver = document.getElementById('btn-volver');
    const formularioSeccion = document.querySelector('.formulario-reserva');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const servicio = document.getElementById('servicio').value;
        const fecha = document.getElementById('fecha').value;
        const personas = document.getElementById('personas').value;
        const correo = document.getElementById('correo').value;
        const notas = document.getElementById('notas').value;

        detalles.innerHTML = `
      <strong>Servicio:</strong> ${servicio}<br>
      <strong>Fecha:</strong> ${fecha}<br>
      <strong>Personas:</strong> ${personas}<br>
      <strong>Correo:</strong> ${correo}<br>
      <strong>Notas:</strong> ${notas || "Ninguna"}
    `;

        formularioSeccion.classList.add('oculto');
        confirmacion.classList.remove('oculto');
    });

    btnVolver.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});