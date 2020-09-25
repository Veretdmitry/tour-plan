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


ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [52.351250, 4.872511],
    zoom: 7
  });
  myMap.geoObjects.add(new ymaps.Placemark([52.351250, 4.872511], {
    balloonContent: '<strong>Hilton Amsterdam</strong>'
  }))
};

$('.subscribe').parallax({ imageSrc: '../img/subscribe-bg.jpg' });