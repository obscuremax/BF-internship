// eslint-disable-next-line no-unused-vars
const sphereSlider =
  // eslint-disable-next-line no-undef
  new Swiper('.sphere-slider', {
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

// eslint-disable-next-line no-unused-vars
const scenarioSlider =
  // eslint-disable-next-line no-undef
  new Swiper('.scenario-slider', {
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

// eslint-disable-next-line no-unused-vars
const cashSlider =
  // eslint-disable-next-line no-undef
  new Swiper('.cash-slider', {
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

const label = document.querySelector('.label--add');

// ==== input mask ====//
const inputsTel = document.querySelectorAll('input[type="tel"]');
// eslint-disable-next-line no-undef
const inputMask = new Inputmask('+375 (99) 999-99-99');
inputMask.mask(inputsTel);

// ==== \input mask ===//

const tabsItems = document.querySelectorAll('.tabs__item');

tabsItems.forEach((tabItem) => {
  tabItem.addEventListener('click', () => {
    const tabs = tabItem.parentElement.closest('.tabs');
    removeClassListActiveFromTabs(tabs.children);
    addClassList(tabItem, 'tabs__item--active');
    const classId = tabItem.id.slice(0, -2);
    clearClassCards(classId);
    const currentCard = document.querySelector(`#${tabItem.id}-c`);
    addClassList(currentCard, 'tabs__content--active');
  });
});

function clearClassCards(word) {
  const cards = document.querySelectorAll('.tabs__content');
  cards.forEach((card) => {
    if (card.id.includes(word)) {
      removeClassList(card, 'tabs__content--active');
    }
  });
}

document.addEventListener('click', (e) => {
  if (e.target.closest('#price-range')) {
    return;
  }
  const labelCross = e.target.closest('.label__cross');
  const btnAddLabel = e.target.closest('.btn-add');
  const popUp = document.querySelector('.pop-up-wrap');
  if (
    e.target.closest('.choice-card__btn') ||
    e.target.closest('.cash-card__btn') ||
    e.target.closest('.scenario-card__btn')
  ) {
    addClassList(popUp, 'pop-up-wrap--active');
  }
  if (e.target.closest('.pop-up__cross')) {
    removeClassList(popUp, 'pop-up-wrap--active');
  }
  if (labelCross) {
    deleteLabel(labelCross);
  }
  if (btnAddLabel) {
    addLabel(btnAddLabel);
  }
});

document.addEventListener('input', (e) => {
  const inputRange = e.target.closest('#price-range');
  const inputPrice = document.getElementById('price');
  if (inputRange) {
    inputPrice.setAttribute('value', inputRange.value + ' 000 руб/мес');
  }
});

formsValidate('.pop-up__form', {
  city: { required: true },
  fio: { required: true },
  tel: { required: true },
  agree: { required: true },
});

formsValidate('.footer__form', {
  city: { required: true },
  fio: { required: true },
  tel: { required: true },
  agree: { required: true },
});

function deleteLabel(el) {
  el.parentElement.outerHTML = '';
}
function addLabel(el) {
  el.insertAdjacentHTML('beforebegin', label.outerHTML);
}

function removeClassListActiveFromTabs(array) {
  for (const el of array) {
    removeClassList(el, 'tabs__item--active');
  }
}
function addClassList(el, classEl) {
  el.classList.add(classEl);
}
function removeClassList(el, classEl) {
  el.classList.remove(classEl);
}

// function constructor(el) {
//   const constructortext = el.dataset.constructortext;
//   const blocktext = el.dataset.blocktext;
//   const blockprice = el.dataset.blockprice;
//   const labelname = el.dataset.labelname;
//   const option = el.dataset.option;

//   const firstLabel = document.querySelector('.constructor__scenario')
//     .children[0];
//   const options = Array.from(
//     document.querySelector('.constructor__select').children
//   );
//   const select = document.querySelector('.constructor__select');
//   const constructorText = document.querySelector('.constructor__text');
//   const blockText = document.querySelectorAll('.choice-card__block')[2]
//     .children[0];
//   const blockPrice = document.querySelectorAll('.choice-card__block')[2]
//     .children[1];

//   firstLabel.textContent = labelname;
//   select.innerHTML = '';

//   options.forEach((opt, i) => {
//     if (i === 0) {
//       opt.value = option;
//       opt.innerHTML = option;
//       select.innerHTML = el.outerHTML;
//     } else {
//       opt.value = option + `${i++}`;
//       opt.innerHTML = option + `${i++}`;
//       select.innerHTML += el.outerHTML;
//     }
//   });
//   firstLabel.append(select);
//   constructorText.innerHTML = constructortext;
//   blockText.innerHTML = blocktext;
//   blockPrice.innerHTML = blockprice;
// }

function formsValidate(selector, rules) {
  // eslint-disable-next-line no-new
  new window.JustValidate(selector, {
    rules,
    submitHandler(form) {
      // eslint-disable-next-line no-undef
      fetch('#', {
        method: 'POST',
      }).then(function () {
        form.reset();
        const popUp = document.querySelector('.pop-up-wrap');
        if (popUp.closest('.pop-up-wrap--active')) {
          removeClassList(popUp, 'pop-up-wrap--active');
        }
      });
    },
  });
}

document.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.pageYOffset === 0) {
    removeClassList(header, 'header--shadow');
  } else {
    addClassList(header, 'header--shadow');
  }
});
