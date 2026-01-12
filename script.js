// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(15, 23, 42, 0.95)';
            navLinks.style.backdropFilter = 'blur(10px)';
            navLinks.style.padding = '1rem';
            navLinks.style.gap = '1rem';
            navLinks.style.borderTop = '1px solid var(--border)';
        });
    }
    
    // Image Preview Functionality
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    const imageTitle = document.getElementById('imageTitle');
    const closePreview = document.getElementById('closePreview');
    
    // Elements that can trigger image preview
    const previewTriggers = document.querySelectorAll('[data-image]');
    
    // Function to show image preview
    function showImagePreview(imageSrc, title) {
        previewImage.src = imageSrc;
        previewImage.alt = title;
        imageTitle.textContent = title;
        imagePreview.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    // Function to hide image preview
    function hideImagePreview() {
        imagePreview.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Add click event to all triggers
    previewTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const imageSrc = this.getAttribute('data-image');
            const title = this.getAttribute('data-title') || this.textContent.trim();
            
            if (imageSrc) {
                showImagePreview(imageSrc, title);
            }
        });
        
        // Add hover effect indication
        trigger.style.cursor = 'zoom-in';
    });
    
    // Close preview when clicking close button
    closePreview.addEventListener('click', hideImagePreview);
    
    // Close preview when clicking outside the image
    imagePreview.addEventListener('click', function(e) {
        if (e.target === imagePreview) {
            hideImagePreview();
        }
    });
    
    // Close preview with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideImagePreview();
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle image loading errors
    previewImage.addEventListener('error', function() {
        imageTitle.textContent = 'ไม่พบภาพ (Image not found)';
        previewImage.style.display = 'none';
    });
    
    // Check if all images exist and log errors
    function checkImages() {
        previewTriggers.forEach(trigger => {
            const imgSrc = trigger.getAttribute('data-image');
            if (imgSrc) {
                const img = new Image();
                img.onload = function() {
                    console.log(`✓ Loaded: ${imgSrc}`);
                };
                img.onerror = function() {
                    console.warn(`✗ Failed to load: ${imgSrc}`);
                    // You could add a fallback image here
                    trigger.setAttribute('data-image-fallback', 'img/placeholder.jpg');
                };
                img.src = imgSrc;
            }
        });
    }
    
    // Run image check after page load
    window.addEventListener('load', checkImages);
});
