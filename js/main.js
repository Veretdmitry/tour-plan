var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 5000,
  },
})

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [-8.825719, 115.218629],
    zoom: 7
  });
  myMap.geoObjects.add(new ymaps.Placemark([-8.825719, 115.218629], {
    balloonContent: '<strong>Hilton Bali Resort</strong>'
  }))
  myMap.geoObjects.add(myPlacemark);

  // Открываем балун на карте (без привязки к геообъекту).
  myMap.balloon.open([-8.825719, 115.218629], "Hilton Bali Resort", {
    // Опция: не показываем кнопку закрытия.
    closeButton: true
  });
}