// Agregar clase 'loaded' al cargar la página para transición de opacidad
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Resaltar la página activa en la barra de navegación
const navLinks = document.querySelectorAll('nav ul li a');
const currentPage = window.location.pathname.split('/').pop(); // Obtiene el nombre de la página actual

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.parentElement.classList.add('active');
    }
});
