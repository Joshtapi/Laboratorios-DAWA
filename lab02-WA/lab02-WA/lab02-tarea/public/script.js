document.addEventListener('DOMContentLoaded', function () {
  const content = document.getElementById('content');
  const navbar = document.getElementById('navbar');

  // Función para cargar el contenido de una página en el contenedor
  function loadPage(pageName) {
    fetch(`${pageName}.html`)
      .then((response) => response.text())
      .then((html) => {
        content.innerHTML = html;
      });
  }

  // Event listeners para los botones de navegación
  navbar.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      const pageName = event.target.id;
      loadPage(pageName);
    }
  });

  // Cargar la página de inicio por defecto al cargar la página
  loadPage('home');
});
