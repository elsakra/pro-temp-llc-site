import { animate, inView, stagger } from '@motionone/dom';

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Animate elements on scroll
  const animateOnScroll = (selector: string, animation: any) => {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    elements.forEach((element) => {
      inView(element, () => {
        animate(element, animation.keyframes, {
          duration: animation.duration || 0.6,
          easing: animation.easing || 'ease-out',
          delay: animation.delay || 0
        });
      });
    });
  };

  // Hero animations
  const heroTitle = document.querySelector<HTMLElement>('.hero-title');
  const heroSubtitle = document.querySelector<HTMLElement>('.hero-subtitle');
  const heroCta = document.querySelector<HTMLElement>('.hero-cta');

  if (heroTitle) {
    animate(heroTitle, 
      { opacity: [0, 1], y: [30, 0] }, 
      { duration: 0.8, easing: 'ease-out', delay: 0.2 }
    );
  }

  if (heroSubtitle) {
    animate(heroSubtitle, 
      { opacity: [0, 1], y: [30, 0] }, 
      { duration: 0.8, easing: 'ease-out', delay: 0.4 }
    );
  }

  if (heroCta) {
    animate(heroCta, 
      { opacity: [0, 1], y: [30, 0] }, 
      { duration: 0.8, easing: 'ease-out', delay: 0.6 }
    );
  }

  // Service cards stagger animation
  const serviceCards = document.querySelectorAll<HTMLElement>('.service-card');
  if (serviceCards.length > 0) {
    inView('.services-grid', () => {
      animate(
        serviceCards,
        { opacity: [0, 1], y: [40, 0] },
        { duration: 0.6, delay: stagger(0.1), easing: 'ease-out' }
      );
    });
  }

  // Feature cards animation
  animateOnScroll('.feature-card', {
    keyframes: { opacity: [0, 1], y: [30, 0] },
    duration: 0.6,
    delay: 0.1
  });

  // Stats animation
  const statNumbers = document.querySelectorAll<HTMLElement>('.stat-number');
  statNumbers.forEach((stat) => {
    inView(stat, () => {
      const finalValue = parseInt(stat.textContent || '0');
      animate(
        (progress) => {
          stat.textContent = Math.round(progress * finalValue).toString();
        },
        { duration: 2, easing: 'ease-out' }
      );
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector<HTMLElement>('.navbar');
  if (navbar) {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
      
      lastScrollY = currentScrollY;
    });
  }

  // Button hover animations
  const buttons = document.querySelectorAll<HTMLElement>('.btn-primary, .btn-secondary');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      animate(button, { scale: 1.05 }, { duration: 0.2 });
    });
    
    button.addEventListener('mouseleave', () => {
      animate(button, { scale: 1 }, { duration: 0.2 });
    });
  });

  // Card hover effects
  const cards = document.querySelectorAll<HTMLElement>('.card');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      animate(card, { y: -5 }, { duration: 0.3 });
    });
    
    card.addEventListener('mouseleave', () => {
      animate(card, { y: 0 }, { duration: 0.3 });
    });
  });
});