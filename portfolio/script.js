// Portfolio Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize portfolio page functionality
    initializePortfolio();
});

function initializePortfolio() {
    // Add smooth scrolling for portfolio items
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add loading state
            this.style.opacity = '0.7';
            this.style.transform = 'scale(0.98)';
            
            // Reset after a short delay
            setTimeout(() => {
                this.style.opacity = '';
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Add intersection observer for portfolio items animation
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initially hide portfolio items
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Add keyboard navigation for portfolio items
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('portfolio-link')) {
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
                if (!focusedElement.classList.contains('portfolio-link')) {
                    const portfolioLinks = document.querySelectorAll('.portfolio-link');
                    portfolioLinks.forEach(link => {
                        link.style.outline = '';
                        link.style.outlineOffset = '';
                    });
                }
            }, 10);
        }
    });
}

// Portfolio grid responsive adjustments
function adjustPortfolioGrid() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (!portfolioGrid) return;
    
    const containerWidth = portfolioGrid.offsetWidth;
    const items = portfolioGrid.children.length;
    
    // Adjust grid columns based on screen size
    if (window.innerWidth <= 768) {
        portfolioGrid.style.gridTemplateColumns = '1fr';
    } else if (window.innerWidth <= 1024) {
        portfolioGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
        portfolioGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
}

// Call on load and resize
window.addEventListener('load', adjustPortfolioGrid);
window.addEventListener('resize', adjustPortfolioGrid);

// Add loading animation for images
function preloadPortfolioImages() {
    const portfolioImages = document.querySelectorAll('.portfolio-image img');
    
    portfolioImages.forEach(img => {
        const newImg = new Image();
        newImg.onload = function() {
            img.style.opacity = '1';
        };
        newImg.src = img.src;
    });
}

// Initialize image preloading
document.addEventListener('DOMContentLoaded', preloadPortfolioImages);
