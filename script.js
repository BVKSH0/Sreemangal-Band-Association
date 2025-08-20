function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

 let lastScroll = 0;
  const nav = document.getElementById('desktop-nav');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      nav.style.top = '0';
      return;
    }

    if (currentScroll > lastScroll) {
      // Scrolling down - hide navbar
      nav.style.top = '-15vh';  // hides navbar by moving it up
    } else {
      // Scrolling up - show navbar
      nav.style.top = '0';
    }

    lastScroll = currentScroll;
  });

// SLIDER
  const carousel = document.querySelector('.bands-carousel');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });

