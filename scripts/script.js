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

