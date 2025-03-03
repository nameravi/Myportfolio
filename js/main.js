$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,            // Display 1 item at a time
        loop: true,          // Loop through the slides
        margin: 10,          // Space between slides
        autoplay: false,      // Enable autoplay
        autoplayTimeout: 3000, // Time between slides in milliseconds
        autoplayHoverPause: true, // Pause autoplay on hover
        dots: true,          // Show navigation dots
       // nav: true,           // Show next/previous navigation arrows
    });
});

// Smooth scrolling using JavaScript (for older browsers or custom behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
