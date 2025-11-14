// Project Detail Page JavaScript

// Sample project data
const projects = {
    1: {
        title: "Lakewood",
        description: "At Stout General Contracting, our goal is to have satisfied clients. We understand it's more than just four walls and a roof, it's your home. This modern residential development showcases our commitment to contemporary design and quality craftsmanship.",
        testimonials: [
            {
                text: "Shane was knowledgeable, kind, and professional throughout the entire project. I would definitely recommend him for any construction needs.",
                author: "Gay M., University Park"
            }
        ],
        images: [
            "../resources/1/1.1.jpg",
            "../resources/1/1.2.JPG",
            "../resources/1/1.3.JPG",
            "../resources/1/1.4.JPG",
            "../resources/1/1.5.JPG",
            "../resources/1/1.6.JPG",
            "../resources/1/1.7.JPG",
            "../resources/1/1.8.JPG",
            "../resources/1/1.9.JPG",
            "../resources/1/1.10.JPG",
            "../resources/1/1.11.JPG",
            "../resources/1/1.12.JPG",
            "../resources/1/1.13.JPG",
            "../resources/1/1.14.JPG",
            "../resources/1/1.15.JPG",
            "../resources/1/1.16.JPG",
            "../resources/1/1.17.JPG"
        ]
    },
    2: {
        title: "Forest Hills",
        description: "This contemporary home project demonstrates our expertise in modern architecture and sustainable building practices. We worked closely with the client to create a space that perfectly balances functionality with aesthetic appeal.",
        testimonials: [
            {
                text: "Bill and Betsy H - Las Colinas, TX: We recently completed a 2,000 sq ft condo remodel with Shane and his team. The professionalism, ideas, and quality of subcontractors exceeded our expectations.",
                author: "Bill and Betsy H., Las Colinas, TX"
            }
        ],
        images: [
            "../resources/2/2.1.jpg",
            "../resources/2/2.2.jpg",
            "../resources/2/2.3.jpg",
            "../resources/2/2.4.jpg",
            "../resources/2/2.5.jpg",
            "../resources/2/2.6.jpg",
            "../resources/2/2.7.jpg",
            "../resources/2/2.8.jpg",
            "../resources/2/2.9.jpg",
            "../resources/2/2.10.jpg",
            "../resources/2/2.11.jpg",
            "../resources/2/2.12.jpg",
            "../resources/2/2.13.jpg",
            "../resources/2/2.14.jpg",
            "../resources/2/2.15.jpg",
            "../resources/2/2.16.jpg",
            "../resources/2/2.17.jpg",
            "../resources/2/2.18.jpg"
        ]
    },
    3: {
        title: "Luxury Home Construction",
        description: "Our luxury home construction project represents the pinnacle of residential building excellence. Every detail was carefully planned and executed to create a truly exceptional living space.",
        testimonials: [
            {
                text: "Leon D. - Plano: Shane handled our termite damage repair with incredible flexibility, speed, and cost-effectiveness. Highly recommended!",
                author: "Leon D., Plano"
            }
        ],
        images: [
            "resources/home/1.3.JPG",
            "resources/home/1.5.JPG",
            "resources/home/1.8.JPG",
            "resources/home/1.17.JPG"
        ]
    },
    4: {
        title: "Custom Home Design",
        description: "This custom home design project showcases our ability to bring unique architectural visions to life. From concept to completion, we ensured every detail met the highest standards.",
        testimonials: [
            {
                text: "The attention to detail and quality of workmanship exceeded our expectations. Shane and his team made our dream home a reality.",
                author: "Sarah & Mike T., Dallas"
            }
        ],
        images: [
            "resources/home/1.5.JPG",
            "resources/home/1.8.JPG",
            "resources/home/1.17.JPG",
            "resources/home/2.3.jpg"
        ]
    },
    5: {
        title: "Modern Architecture Project",
        description: "Our modern architecture project demonstrates innovative design solutions and cutting-edge construction techniques. This project pushed the boundaries of contemporary residential construction.",
        testimonials: [
            {
                text: "Working with STOUT was an incredible experience. Their expertise in modern design and construction is unmatched in the industry.",
                author: "Jennifer L., Highland Park"
            }
        ],
        images: [
            "resources/home/1.8.JPG",
            "resources/home/1.17.JPG",
            "resources/home/2.3.jpg",
            "resources/home/2.7.jpg"
        ]
    },
    6: {
        title: "Residential Construction",
        description: "This residential construction project highlights our comprehensive approach to home building. From foundation to finishing touches, we delivered exceptional quality and attention to detail.",
        testimonials: [
            {
                text: "The entire construction process was smooth and professional. Shane kept us informed every step of the way and delivered exactly what was promised.",
                author: "Robert & Lisa K., Plano"
            }
        ],
        images: [
            "resources/home/1.17.JPG",
            "resources/home/2.3.jpg",
            "resources/home/2.7.jpg",
            "resources/home/2.18.jpg"
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initializeProjectDetail();
});

function initializeProjectDetail() {
    // Get project ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project') || '1';
    
    // Load project data
    loadProjectData(projectId);
    
    // Initialize gallery functionality
    initializeGallery();
    
    // Add smooth animations
    addAnimations();
}

function loadProjectData(projectId) {
    const project = projects[projectId];
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }
    
    // Update page title
    document.title = `${project.title} - STOUT General Contracting`;
    
    // Update project title
    const titleElement = document.getElementById('project-title');
    if (titleElement) {
        titleElement.textContent = project.title;
    }
    
    // Update testimonials
    const testimonialsElement = document.getElementById('project-testimonials');
    if (testimonialsElement) {
        testimonialsElement.innerHTML = project.testimonials.map(testimonial => `
            <div class="testimonial">
                <p class="testimonial-text">"${testimonial.text}"</p>
                <p class="testimonial-author">- ${testimonial.author}</p>
            </div>
        `).join('');
    }
    
    // Update gallery images
    updateGallery(project.images);
}

function updateGallery(images) {
    const mainImage = document.getElementById('main-gallery-image');
    const thumbnailsContainer = document.getElementById('gallery-thumbnails');
    
    if (!mainImage || !thumbnailsContainer) return;
    
    // Update main image
    mainImage.src = images[0];
    mainImage.alt = 'Project image';
    
    // Clear existing thumbnails
    thumbnailsContainer.innerHTML = '';
    
    // Create thumbnails
    images.forEach((imageSrc, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${imageSrc}" alt="Project thumbnail ${index + 1}" />`;
        
        thumbnail.addEventListener('click', () => {
            // Update main image
            mainImage.src = imageSrc;
            
            // Update active thumbnail
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });
        
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function initializeGallery() {
    const mainImage = document.getElementById('main-gallery-image');
    if (!mainImage) return;
    
    // Add loading state
    mainImage.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    // Add keyboard navigation for thumbnails
    document.addEventListener('keydown', function(e) {
        const activeThumbnail = document.querySelector('.thumbnail.active');
        if (!activeThumbnail) return;
        
        const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
        const currentIndex = thumbnails.indexOf(activeThumbnail);
        
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            thumbnails[currentIndex - 1].click();
        } else if (e.key === 'ArrowRight' && currentIndex < thumbnails.length - 1) {
            thumbnails[currentIndex + 1].click();
        }
    });
}

function addAnimations() {
    // Add intersection observer for content animation
    const contentElements = document.querySelectorAll('.project-text-column, .project-gallery-column');
    
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
    
    // Initially hide content elements
    contentElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        observer.observe(element);
    });
    
    // Add hover effects for testimonials
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
        
        testimonial.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
}

// Add responsive gallery adjustments
function adjustGallery() {
    const gallery = document.querySelector('.project-gallery');
    const thumbnails = document.querySelector('.gallery-thumbnails');
    
    if (!gallery || !thumbnails) return;
    
    if (window.innerWidth <= 768) {
        // Stack thumbnails vertically on mobile
        thumbnails.style.gridTemplateColumns = 'repeat(auto-fit, minmax(60px, 1fr))';
    } else {
        // Horizontal layout on desktop
        thumbnails.style.gridTemplateColumns = 'repeat(auto-fit, minmax(80px, 1fr))';
    }
}

// Call on load and resize
window.addEventListener('load', adjustGallery);
window.addEventListener('resize', adjustGallery);

// Preload gallery images
function preloadGalleryImages(images) {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize image preloading when project data is loaded
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project') || '1';
    const project = projects[projectId];
    
    if (project) {
        preloadGalleryImages(project.images);
    }
});
