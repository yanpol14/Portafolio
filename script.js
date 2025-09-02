document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ script.js cargado correctamente");

  // Validación del formulario
  const formulario = document.getElementById('formulario-contacto');
  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if (!nombre || !correo || !mensaje) {
        alert('Por favor, complete todos los campos.');
        return;
      }

      alert(`¡Gracias por tu mensaje, ${nombre}! Me pondré en contacto pronto.`);
      formulario.reset();
    });
  }

  // Animación al hacer scroll
  const secciones = document.querySelectorAll('section');

  const mostrarSeccionesVisibles = () => {
    secciones.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 150) {
        sec.classList.add('mostrar');
      }
    });
  };

  // Muestra las secciones al cargar la página
  mostrarSeccionesVisibles();

  // Muestra las secciones al hacer scroll
  window.addEventListener('scroll', mostrarSeccionesVisibles);
});