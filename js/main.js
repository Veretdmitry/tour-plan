var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 5000,
  },
});
var reviewSlider = new Swiper('.review-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.review-slider__button--next',
    prevEl: '.review-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 5000,
  },
});

var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener("click", function(){
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom-visible');
});

var modalButton = $(".booking__button");
var closeButton = $(".modal__close");

modalButton.on('click', modalopen);
closeButton.on('click', modalclose);
$(document).on('keydown', function (e) {
  if (e.keyCode == 27)
    modalclose();
});


function modalopen(event) {
  event.preventDefault();
  $(".modal__overlay").addClass("modal__overlay--visible");
  $(".modal__dialog").addClass("modal__dialog--visible");
}
function modalclose(event) {
  if($(this).hasClass('modal__close')) event.preventDefault();
  $(".modal__overlay").removeClass("modal__overlay--visible");
  $(".modal__dialog").removeClass("modal__dialog--visible");
}

var comeBack = $('.come-back');
comeBack.on('click', function() { 
  location.href='index.html';
});
