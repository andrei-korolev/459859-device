(function () {
  var feedbackButton = document.querySelector('.feedback-button');
  var feedbacPopup = document.querySelector('.feedback.popup');

  var mapButton = document.querySelector('.contact__map');
  var mapPopup = document.querySelector('.full-map');

  var classNameOpenedPopup = '_open';
  var classNameCloseButton = 'popup__close';

  mapButton.addEventListener('click', function() {
    mapPopup.classList.add(classNameOpenedPopup);
  });

  feedbackButton.addEventListener('click', function() {
    feedbacPopup.classList.add(classNameOpenedPopup);
  });

  document.addEventListener('click', function(event) {
    var target = event.target;

    if (target.className !== classNameCloseButton) {
      return;
    }

    var popup = event.target.closest('.popup');

    popup.classList.remove(classNameOpenedPopup);
  });
})();


(function () {
  var productSlider = document.querySelector('.product-slider');
  var activeSlider = productSlider.querySelector('.product-slider__item._active');

  var classNameControl = 'js-product-control';

  productSlider.addEventListener('click', function (event) {
    var target = event.target;

    if (!target.classList.contains(classNameControl)) {
      return;
    }

    var sliderNumber = target.dataset.control;
    var newActiveSlider = productSlider.querySelector('.product-slider__item[data-slider="' + sliderNumber + '"]')

    if (activeSlider === newActiveSlider) {
      return;
    }

    newActiveSlider.classList.add('_active');
    activeSlider.classList.remove('_active');
    activeSlider = newActiveSlider;
  });
})();

(function () {
  var serviceSlider = document.querySelector('.service-slider');
  var activeSlider = serviceSlider.querySelector('.service-slider__item._active');

  var classNameControl = 'js-service-control';

  serviceSlider.addEventListener('click', function (event) {
    var target = event.target;

    if (!target.classList.contains(classNameControl)) {
      return;
    }

    var sliderNumber = target.dataset.control;
    var newActiveSlider = serviceSlider.querySelector('.service-slider__item[data-slider="' + sliderNumber + '"]')

    if (activeSlider === newActiveSlider) {
      return;
    }

    newActiveSlider.classList.add('_active');
    activeSlider.classList.remove('_active');
    activeSlider = newActiveSlider;
  });
})();
