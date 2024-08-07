document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Get Started button interaction
    const getStartedButton = document.getElementById('get-started');
    getStartedButton.addEventListener('click', () => {
        alert('Button Clicked! Let\'s Get Started!');
        getStartedButton.textContent = 'Getting Started...';
    });

    // Form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            event.preventDefault();
            alert('Please fill out all fields.');
        } else {
            alert('Message sent successfully!');
        }
    });
});
