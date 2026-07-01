
// Mobile Hamburger Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Active Link Switcher on Scroll
window.addEventListener('scroll', () => {
    let current = '';

    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');

        const href = link.getAttribute('href');

        if (href && href.includes(current)) {
            link.classList.add('active');
        }
    });
});

// Donation Amount Selection
let selectedAmount = '$25';

const amountButtons = document.querySelectorAll('.btn-amount');

amountButtons.forEach(button => {
    button.addEventListener('click', () => {

        amountButtons.forEach(btn => {
            btn.classList.remove('active-amt');
        });

        button.classList.add('active-amt');
        selectedAmount = button.innerText;
    });
});

// Donate Button Click
const donateBtn = document.querySelector('.btn-donate-large');

if (donateBtn) {
    donateBtn.addEventListener('click', () => {
        alert(`Thank you for donating ${selectedAmount} ❤️`);
    });
}

// Contact Form Submit
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        alert('Message sent successfully! We will contact you soon.');

        contactForm.reset();
    });
}