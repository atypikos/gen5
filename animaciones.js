// pantalla de carga animación
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const body = document.body;

  console.log("Página cargada");

  const yaVisto = localStorage.getItem("pantallaCargaMostrada");
  console.log("¿Pantalla vista antes?", yaVisto);

  if (!yaVisto) {
    body.classList.add("oculto");
    console.log("Mostrando loader, bloqueo scroll");

    setTimeout(() => {
      console.log("4 segundos pasaron, empezando fade out");
      loader.classList.add("oculto"); // activa opacidad 0 con transition

      setTimeout(() => {
        console.log("Fade out terminado, ocultando loader");
        loader.style.display = "none";
        body.classList.remove("oculto");
        localStorage.setItem("pantallaCargaMostrada", "true");
      }, 1000); // 1 segundo para la transición de opacidad

    }, 4000); // espera 4 segundos antes de ocultar loader

  } else {
    console.log("Loader ya visto, ocultando inmediatamente");
    loader.style.display = "none";
    body.classList.remove("oculto");
  }
});


// navbar branding hidden

const branding = document.getElementById('branding');
const triggers = document.querySelectorAll('.trigger_invis');

const visibleSections = new Set();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;

      if (entry.isIntersecting) {
        visibleSections.add(target);
      } else {
        visibleSections.delete(target);
      }

      if (visibleSections.size > 0) {
        branding.classList.add('hidden');
      } else {
        branding.classList.remove('hidden');
      }
    });
  },
  {
    threshold: 0.2,
  }
);

triggers.forEach((section) => observer.observe(section));

