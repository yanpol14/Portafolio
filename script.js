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

document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.querySelector('.text-animation');
  const textToAnimate = "¡Hola! Soy Yanpol Silva";
  let textIndex = 0;
  let isDeleting = false;

  function typeWriter() {
      // Obtenemos el texto actual
      const currentText = textToAnimate.substring(0, textIndex);
      textElement.textContent = currentText;

      // Comprueba si está en modo de borrado
      if (!isDeleting) {
          // Modo de escritura
          textIndex++;
          if (textIndex > textToAnimate.length) {
              // Si el texto se ha escrito por completo,
              // activa el modo de borrado y espera 1 segundo
              isDeleting = true;
              setTimeout(typeWriter, 1000); 
          } else {
              // Continúa escribiendo
              setTimeout(typeWriter, 100); 
          }
      } else {
          // Modo de borrado
          textIndex--;
          if (textIndex < 0) {
              // Si el texto se ha borrado por completo,
              // desactiva el modo de borrado, resetea el índice y espera 0.5 segundos
              isDeleting = false;
              textIndex = 0;
              setTimeout(typeWriter, 500); 
          } else {
              // Continúa borrando
              setTimeout(typeWriter, 50); 
          }
      }
  }

  // Inicia la animación
  typeWriter();
});