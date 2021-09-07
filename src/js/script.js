new Swiper('.sphere-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.sphere-slider__pagination',
    type: 'bullets',
    clickable: true
  },
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  autoHeight: false,
  slidesPerColumn: 2,
  loop: true,
});


