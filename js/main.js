$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,            // Display 1 item at a time
        loop: true,          // Loop through the slides
        margin: 10,          // Space between slides
        autoplay: true,      // Enable autoplay
        autoplayTimeout: 3000, // Time between slides in milliseconds
        autoplayHoverPause: true, // Pause autoplay on hover
        dots: true,          // Show navigation dots
       // nav: true,           // Show next/previous navigation arrows
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const currentUrl = window.location.href;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});
