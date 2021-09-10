const sphereSlider = new Swiper('.sphere-slider', {
  slidesPerView: 2,
  slidesPerColumn: 2,
  slidesPerGroup: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.sphere-slider__button-next',
    prevEl: '.sphere-slider__button-prev',
  },
  pagination: {
    el: '.sphere-slider__pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    769: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
  },
});

const scenarioSlider = new Swiper('.scenario-slider', {
  slidesPerView: 1,
  slidesPerColumn: 2,
  slidesPerGroup: 1,
  spaceBetween: 75,
  navigation: {
    nextEl: '.scenario-slider__button-next',
    prevEl: '.scenario-slider__button-prev',
  },
  pagination: {
    el: '.scenario-slider__pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    769: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
  },
});

const cashSlider = new Swiper('.cash-slider', {
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerGroup: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.cash-slider__button-next',
    prevEl: '.cash-slider__button-prev',
  },
  pagination: {
    el: '.cash-slider__pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,
});

