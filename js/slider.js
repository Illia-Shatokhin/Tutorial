var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 200,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      480: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 100
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 4,
        spaceBetween: 200
      }
    },
  });