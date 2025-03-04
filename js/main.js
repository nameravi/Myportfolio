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

    // Add 'active' class to the link that matches the current URL
    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });

    // Ensure the home page is active if no match is found (use the home URL or path)
    const homeLink = document.querySelector('.nav-link[href="/"]'); // Adjust the href based on your home page URL
    if (!Array.from(navLinks).some(link => link.href === currentUrl) && homeLink) {
        homeLink.classList.add('active');
    }
});

