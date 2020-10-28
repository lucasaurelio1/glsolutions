var map;

function initMap() {
  map = new google.maps.Map(
      document.getElementById('map'),
      {center: new google.maps.LatLng(-23.571500, -46.625284), zoom: 14});

  var iconBase =
      'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

  var icons = {
    natura: {
      icon: "images/pin.png"
    }
  };

  var features = [
    {
      position: new google.maps.LatLng(-23.574180, -46.623112),
      type: 'natura'
    }, {
      position: new google.maps.LatLng(-23.576911, -46.625998),
      type: 'natura'
    }, {
      position: new google.maps.LatLng(-23.579625, -46.620172),
      type: 'natura'
    }, {
      position: new google.maps.LatLng(-23.589243, -46.624691),
      type: 'natura'
    }, {
      position: new google.maps.LatLng(-23.568307, -46.626506),
      type: 'natura'
    }, {
      position: new google.maps.LatLng(-23.559405, -46.6234969),
      type: 'natura'
    }, {
      position: new google.maps.LatLng(-23.564462, -46.629456),
      type: 'natura'
    }, {
      position: new google.maps.LatLng(-23.560390, -46.624156),
      type: 'natura'
    }, {
      position: new google.maps.LatLng(-23.554263, -46.629939),
      type: 'natura'
    }, {
      position: new google.maps.LatLng(-23.566904, -46.619906),
      type: 'natura'
    }, {
      position: new google.maps.LatLng(-23.578599, -46.637680),
      type: 'natura'
    }, {
      position: new google.maps.LatLng(-23.567209, -46.630860),
      type: 'natura'
    }, {
      position: new google.maps.LatLng(-23.593792, -46.603524),
      type: 'natura'
    }, {
      position: new google.maps.LatLng(-23.572011, -46.611012),
      type: 'natura'
    }
  ];

  // Create markers.
  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map
    });
  };
}