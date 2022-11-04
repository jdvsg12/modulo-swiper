const swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: -40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween:  -40,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
  },
});

const carSwiper = new Swiper('.cardSwiper', {
  slidesPerView: 2,
  spaceBetween: 5,
  autoplay: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

const iconSwiper = new Swiper('.iconSwiper', {
  slidesPerView: 2,
  spaceBetween: -20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: -20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
  },
});

openCity()
