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
    const currentUrl = window.location.pathname;  // Use pathname instead of full URL for accurate matching
    const navLinks = document.querySelectorAll('.nav-link');

    // Remove 'active' class from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add 'active' class to the current page's link
    navLinks.forEach(link => {
        // Skip the 'contact' link which uses a fragment identifier
        if (link.pathname === currentUrl && !link.hash) {
            link.classList.add('active');
        } else if (currentUrl === '/' && link.pathname === '/index.html') {
            link.classList.add('active');
        }
    });
});



