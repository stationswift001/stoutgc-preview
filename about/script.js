// About Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeAbout();
});

function initializeAbout() {
    // Add smooth animations for about elements
    addAboutAnimations();
}

function addAboutAnimations() {
    // Add intersection observer for about elements
    const aboutElements = document.querySelectorAll('.about-layout');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initially hide about elements
    aboutElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.8s ease ${index * 0.3}s, transform 0.8s ease ${index * 0.3}s`;
        observer.observe(element);
    });
}

// Add loading animation for about image
function preloadAboutImage() {
    const aboutImage = document.querySelector('.about-image img');
    if (!aboutImage) return;
    
    const newImg = new Image();
    newImg.onload = function() {
        aboutImage.style.opacity = '1';
    };
    newImg.src = aboutImage.src;
}

// Initialize image preloading
document.addEventListener('DOMContentLoaded', preloadAboutImage);

