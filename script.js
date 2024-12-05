const navbarLinks = document.querySelectorAll(".nav-menu .nav-item");
const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");

openMenuButton.addEventListener('click', () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle('show-mobile-menu');
});

navbarLinks.forEach(link => {
  // Fechar o menu quando se é clicado no link
  link.addEventListener("click", () => openMenuButton.click());
});

// Fechar o menu quando se é clicado no botão
closeMenuButton.addEventListener('click', () => openMenuButton.click());

/* Swiper JS */
let swiper = new Swiper('.slide-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
    },
  }
});

