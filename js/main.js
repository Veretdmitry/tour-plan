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
    center: [52.351250, 4.872511],
    zoom: 7
  });
  myMap.geoObjects.add(new ymaps.Placemark([52.351250, 4.872511], {
    balloonContent: '<strong>Hilton Amsterdam</strong>'
  }))


}