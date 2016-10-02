var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.94029288, lng: 30.31376147},
    zoom: 8
  });
}