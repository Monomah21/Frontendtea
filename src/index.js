// frontend.js

// Define the Carousel class
class Carousel {
    constructor(containerSelector, options = {}) {
      this.container = document.querySelector(containerSelector);
      this.slides = this.container.querySelectorAll('.slide');
      this.options = Object.assign({}, {
        autoplay: true,
        autoplayInterval: 3000
      }, options);
      this.currentSlideIndex = 0;
  
      this.init();
    }
  
    init() {
      this.showSlide(this.currentSlideIndex);
  
      if (this.options.autoplay) {
        this.startAutoplay();
      }
    }
  
    showSlide(index) {
      // Hide all slides
      this.slides.forEach(slide => {
        slide.style.display = 'none';
      });
  
      // Show the slide at the specified index
      this.slides[index].style.display = 'block';
      this.currentSlideIndex = index;
    }
  
    nextSlide() {
      const nextIndex = (this.currentSlideIndex + 1) % this.slides.length;
      this.showSlide(nextIndex);
    }
  
    prevSlide() {
      const prevIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
      this.showSlide(prevIndex);
    }
  
    startAutoplay() {
      this.autoplayIntervalId = setInterval(() => {
        this.nextSlide();
      }, this.options.autoplayInterval);
    }
  
    stopAutoplay() {
      clearInterval(this.autoplayIntervalId);
    }
  }
  
  // Usage example:
  // const carousel = new Carousel('.carousel-container', { autoplay: true, autoplayInterval: 3000 });
  
  // Uncomment the line above to initialize the carousel with autoplay enabled
  // Adjust the selector '.carousel-container' to match your HTML structure
  // You can also customize autoplayInterval or disable autoplay by setting { autoplay: false }
  
  module.exports = Carousel;
  