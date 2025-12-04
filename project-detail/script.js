// Project Detail Page JavaScript - Static Version
// All content is preloaded in HTML, this script only handles visibility and interactions

document.addEventListener('DOMContentLoaded', function() {
    initializeProjectDetail();
});

function initializeProjectDetail() {
    // Get project ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project') || '1';
    
    // Show the correct project section
    showProject(projectId);
    
    // Initialize gallery functionality
    initializeGallery();
}

function showProject(projectId) {
    // Hide all project sections
    const allSections = document.querySelectorAll('.project-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected project
    const targetSection = document.querySelector(`.project-section[data-project="${projectId}"]`);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Update page title
        const title = targetSection.querySelector('.project-title').textContent;
        document.title = `${title} - StoutGC`;
    } else {
        // Fallback to project 1 if not found
        const defaultSection = document.querySelector('.project-section[data-project="1"]');
        if (defaultSection) {
            defaultSection.classList.add('active');
            document.title = 'Project Detail - StoutGC';
        }
    }
}

function initializeGallery() {
    // Get the active project's gallery
    const activeSection = document.querySelector('.project-section.active');
    if (!activeSection) return;
    
    const mainImage = activeSection.querySelector('.main-gallery-image');
    const thumbnails = activeSection.querySelectorAll('.thumbnail');
    
    if (!mainImage || !thumbnails.length) return;
    
    // Add click handlers to thumbnails
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const thumbnailImg = this.querySelector('img');
            if (!thumbnailImg) return;
            
            // Update main image
            mainImage.src = thumbnailImg.src;
            mainImage.alt = thumbnailImg.alt.replace('thumbnail', 'main image');
            
            // Update active thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Add smooth transition for main image
    mainImage.addEventListener('load', function() {
        this.style.opacity = '1';
        this.style.transition = 'opacity 0.3s ease-in-out';
    });
    
    // Preload next image when main image loads
    mainImage.addEventListener('load', function() {
        const activeThumbnail = activeSection.querySelector('.thumbnail.active');
        if (activeThumbnail && thumbnails.length > 1) {
            const thumbnailsArray = Array.from(thumbnails);
            const currentIndex = thumbnailsArray.indexOf(activeThumbnail);
            const nextIndex = (currentIndex + 1) % thumbnailsArray.length;
            const nextImg = thumbnailsArray[nextIndex].querySelector('img');
            if (nextImg) {
                const preloadImg = new Image();
                preloadImg.src = nextImg.src;
            }
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const activeThumbnail = activeSection.querySelector('.thumbnail.active');
        if (!activeThumbnail) return;
        
        const thumbnailsArray = Array.from(thumbnails);
        const currentIndex = thumbnailsArray.indexOf(activeThumbnail);
        
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            thumbnailsArray[currentIndex - 1].click();
        } else if (e.key === 'ArrowRight' && currentIndex < thumbnailsArray.length - 1) {
            thumbnailsArray[currentIndex + 1].click();
        }
    });
}

// Responsive gallery adjustments
function adjustGallery() {
    const activeSection = document.querySelector('.project-section.active');
    if (!activeSection) return;
    
    const thumbnails = activeSection.querySelector('.gallery-thumbnails');
    if (!thumbnails) return;
    
    if (window.innerWidth <= 768) {
        thumbnails.style.gridTemplateColumns = 'repeat(auto-fit, minmax(60px, 1fr))';
    } else {
        thumbnails.style.gridTemplateColumns = 'repeat(auto-fit, minmax(80px, 1fr))';
    }
}

window.addEventListener('load', adjustGallery);
window.addEventListener('resize', adjustGallery);
