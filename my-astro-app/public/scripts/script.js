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
  mostrarSeccionesVisibles();
  window.addEventListener('scroll', mostrarSeccionesVisibles);

  // Animación de escribir y borrar
  const textElement = document.querySelector('.text-animation');
  const textToAnimate = "Hola! Soy Yanpol Silva";
  let textIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    if (!textElement) return;

    const currentText = textToAnimate.substring(0, textIndex);
    textElement.textContent = currentText;

    if (!isDeleting) {
      textIndex++;
      if (textIndex > textToAnimate.length) {
        isDeleting = true;
        setTimeout(typeWriter, 1200); // Espera antes de borrar
      } else {
        setTimeout(typeWriter, 120); // Velocidad de escritura
      }
    } else {
      textIndex--;
      if (textIndex < 0) {
        isDeleting = false;
        setTimeout(typeWriter, 700); // Espera antes de volver a escribir
      } else {
        setTimeout(typeWriter, 60); // Velocidad de borrado
      }
    }
  }

  if (textElement) {
    typeWriter();
  }
});