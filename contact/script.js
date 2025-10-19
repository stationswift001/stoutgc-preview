// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeContact();
});

function initializeContact() {
    // Add smooth animations for contact elements
    addContactAnimations();
    
    // Add click tracking for contact buttons
    trackContactInteractions();
    
    // Add keyboard navigation
    addKeyboardNavigation();
}

function addContactAnimations() {
    // Add intersection observer for contact elements
    const contactElements = document.querySelectorAll('.contact-info-column, .contact-image-column');
    
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
    
    // Initially hide contact elements
    contactElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.8s ease ${index * 0.3}s, transform 0.8s ease ${index * 0.3}s`;
        observer.observe(element);
    });
    
    // Add hover effects for contact buttons
    const contactButtons = document.querySelectorAll('.contact-button');
    contactButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-2px)';
        });
    });
}

function trackContactInteractions() {
    const contactButtons = document.querySelectorAll('.contact-button');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contactType = this.classList.contains('phone-button') ? 'phone' : 'email';
            const contactValue = contactType === 'phone' ? '214-606-8609' : 'info@stoutgc.com';
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Log interaction (for analytics)
            console.log(`Contact ${contactType} clicked: ${contactValue}`);
            
            // Add a subtle animation to the icon
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                }, 200);
            }
        });
    });
}

function addKeyboardNavigation() {
    // Add keyboard navigation for contact buttons
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('contact-button')) {
                focusedElement.style.outline = '2px solid #3498db';
                focusedElement.style.outlineOffset = '4px';
            }
        }
    });
    
    // Remove outline on blur
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            setTimeout(() => {
                const focusedElement = document.activeElement;
                if (!focusedElement.classList.contains('contact-button')) {
                    const contactButtons = document.querySelectorAll('.contact-button');
                    contactButtons.forEach(button => {
                        button.style.outline = '';
                        button.style.outlineOffset = '';
                    });
                }
            }, 10);
        }
    });
    
    // Add Enter key support for contact buttons
    const contactButtons = document.querySelectorAll('.contact-button');
    contactButtons.forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Add smooth scrolling for any anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add loading animation for contact image
function preloadContactImage() {
    const contactImage = document.querySelector('.contact-image img');
    if (!contactImage) return;
    
    const newImg = new Image();
    newImg.onload = function() {
        contactImage.style.opacity = '1';
    };
    newImg.src = contactImage.src;
}

// Initialize image preloading
document.addEventListener('DOMContentLoaded', preloadContactImage);

// Add responsive adjustments
function adjustContactLayout() {
    const contactContent = document.querySelector('.contact-content');
    if (!contactContent) return;
    
    // Adjust layout based on screen size
    if (window.innerWidth <= 768) {
        // Mobile layout adjustments
        const contactImage = document.querySelector('.contact-image-column');
        if (contactImage) {
            contactImage.style.order = '-1';
        }
    } else {
        // Desktop layout adjustments
        const contactImage = document.querySelector('.contact-image-column');
        if (contactImage) {
            contactImage.style.order = '0';
        }
    }
}

// Call on load and resize
window.addEventListener('load', adjustContactLayout);
window.addEventListener('resize', adjustContactLayout);
