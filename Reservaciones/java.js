// Formulario
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Muestra el modal o recuadro del formulario
    const modal = document.getElementById('success-modal');
    modal.style.display = 'block';

    // Opcional: limpiar el formulario
    event.target.reset();
});

// Función para cerrar el modal
const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', function() {
    document.getElementById('success-modal').style.display = 'none';
});

// Cierra el modal si el usuario hace clic fuera del contenido del modal
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('success-modal')) {
        document.getElementById('success-modal').style.display = 'none';
    }
});