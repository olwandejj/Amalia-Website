// js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // --- Loader Animation ---
    document.body.style.opacity = '1';
    const loader = document.getElementById('page-loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 600); // Show loader for at least 600ms
    }

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