// js/main.js

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Active Page Link Styling ---
    // Get the current page URL
    const currentPage = window.location.pathname.split('/').pop();

    // Find all navigation links
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    // Loop through links and add 'active' class to the correct one
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();

        // Remove existing active class from all links first
        link.classList.remove('active');

        // Add active class if the link href matches the current page
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

});