// This file contains JavaScript code for the website. It may include functionality for interactive elements, such as the navigation bar.

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('hidden');
    });
});