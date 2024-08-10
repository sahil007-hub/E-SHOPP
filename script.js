// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Example JavaScript functionality

    // Newsletter form submission
    const form = document.getElementById('newsletter-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for subscribing!');
        form.reset();
    });

    // Example for carousel or other interactivity can be added here
});
