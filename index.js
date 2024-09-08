$(document).ready(function(){
    // Simple slider with automatic slide change
    let currentSlide = 0;
    const slides = $('.card');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.hide();
        slides.eq(index).fadeIn();
    }

    setInterval(function(){
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 3000); // Change every 3 seconds

    showSlide(currentSlide);
});
