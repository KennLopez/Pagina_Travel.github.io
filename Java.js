var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Muestra 1 slide o carrusel a la vez
    centeredSlides: true, // Centra el slide o carrusel activo
    loop: true, // Activa el bucle infinito
    spaceBetween: 30, // Espacio entre slides
    grabCursor: true, // Cambia el cursor a "agarre" al pasar sobre el slide

    navigation: {
        nextEl: '.swiper-button-next', // Selector del botón siguiente
        prevEl: '.swiper-button-prev' // Selector del botón anterior
    },

    breakpoints: {
        991: {
            slidesPerView: 3 // Cuando el ancho de la ventana sea >= 992px, muestra 3 slides
        }
    }
});