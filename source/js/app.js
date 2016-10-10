
var map = (function () {

function init() {
    var mapCanvas = document.getElementById('map');

    var mapOptions = {
      center: {
        lat: 59.94029288, 
        lng: 30.31376147
      },
      zoom: 13,
      disableDefaultUI: true,
      scrollwheel: false,
      draggable: true,
      styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2bd3b7"},{"visibility":"simplified"}]}]
    }

    var map = new google.maps.Map(mapCanvas, mapOptions);

  };

  return {
    init: init
  };

})();


(function() {
  'use strict';
  $('.auth-btn').click(function(event) {
    event.preventDefault();
    $('.card__content').css("transform","rotateY(180deg)");
    $(this).css("display","none");
    setTimeout( function(){
    $('.card__content').css("display","none"); 
    $('.auth-form').css("display","block");
    },1000);
    })

  $('.index-btn').click(function(event) {
    event.preventDefault();
    $('.auth-form').css("transform","rotateY(180deg)");
    $('.card__content').css("transform","rotateY(360deg)");
    setTimeout( function(){
    $('.auth-form').css("display","none"); 
    $('.card__content').css("display","block");
    $('.auth-btn').css("display","inline-block");
    $('.auth-form').css("transform","rotateY(360deg)");
    },1000);
    })
 
})();