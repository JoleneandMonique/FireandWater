/**
 * Artist Portfolio - Main JavaScript
 * Handles interactivity and dynamic elements
 */

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile navigation toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    burger.addEventListener('click', () => {
        // Toggle navigation
        nav.classList.toggle('nav-active');
        
        // Animate burger
        burger.classList.toggle('toggle');
    });
    
    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 5%';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1.5rem 5%';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Active link highlighting based on scroll position
    window.addEventListener('scroll', highlightNavLink);
    
    function highlightNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real implementation, you would send this data to a server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! In a real implementation, this would be sent to the server.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Add animation class to elements when they come into view
    const fadeElements = document.querySelectorAll('.project, .about-container, .contact-container');
    
    const fadeOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const fadeObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, fadeOptions);
    
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
});

// Add burger animation styles
document.head.insertAdjacentHTML('beforeend', `
<style>
.burger.toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
}
.burger.toggle .line2 {
    opacity: 0;
}
.burger.toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
}
.fade-in {
    animation: fadeIn 1s ease forwards;
}
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.project, .about-container, .contact-container {
    opacity: 0;
}
</style>
`);
