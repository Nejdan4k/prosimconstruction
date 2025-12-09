// Gallery Lightbox Functionality
document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');
  
  const galleryItems = document.querySelectorAll('.gallery-item img');
  let currentImageIndex = 0;
  let images = [];

  // Collect all images from gallery
  galleryItems.forEach((img, index) => {
    images.push({
      src: img.src,
      alt: img.alt
    });
  });

  // Open lightbox
  function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  // Close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Update lightbox image
  function updateLightboxImage() {
    if (images[currentImageIndex]) {
      lightboxImage.src = images[currentImageIndex].src;
      lightboxCaption.textContent = images[currentImageIndex].alt;
    }
  }

  // Navigate to previous image
  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateLightboxImage();
  }

  // Navigate to next image
  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateLightboxImage();
  }

  // Add click event to gallery items
  galleryItems.forEach((img, index) => {
    img.closest('.gallery-item').addEventListener('click', () => {
      openLightbox(index);
    });
  });

  // Close lightbox events
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  // Close on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Navigation buttons
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      showPreviousImage();
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      showNextImage();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    switch(e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        showPreviousImage();
        break;
      case 'ArrowRight':
        showNextImage();
        break;
    }
  });
});

