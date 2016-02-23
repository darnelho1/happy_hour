  var map;
  var locationId;

  function initMap(){
    function map(){
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {
          lat: Number(userLat),
          lng: Number(userLong)
        },
        zoom: 16,
        setMap: map
      });
      directionsDisplay.setMap(map);
      $('#turnByTurn').empty();
      directionsDisplay.setPanel(document.getElementById('turnByTurn'));
      calculateAndDisplayRoute(directionsService, directionsDisplay);
      document.getElementById('mode').addEventListener('change', function() {
      calculateAndDisplayRoute(directionsService, directionsDisplay);
      });
    }
    map();

  }

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var selectedMode = document.getElementById('mode').value;
    directionsService.route({
      origin: userLat + ', ' + userLong,
      destination: locationId,
      travelMode: google.maps.TravelMode[selectedMode]
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    })
  }

  function mapSize() {
    $height = $(window).height();
    $width = $(window).width();
    if ($width < 767) {
      $('#googleMap').css('width', '90%');
      $('#googleMap').css('height', $height * 0.5);
      $('#turnByTurn').css('width', '90%');
      $('#turnByTurn').css('height', $height * 0.7);
    }
    else{
    $('#googleMap').css('width', $width * 0.6);
    $('#googleMap').css('height', $height * 0.62);
    $('#turnByTurn').css('width', $width * 0.3);
    $('#turnByTurn').css('height', $height * 0.62);
    }
  }

function mapFunction() {
  $('.resultBox').hover(function() {
    $(this).toggleClass('pulse animated');
  });

  $('.resultsInfo').on('click', function(event) {
    locationId = $(this).find('.resultAddress').text();
    mapSize();
    $('#resultsOuterBox').addClass('flipOutX animated').removeClass('flipInX').hide();
    $('#mapView').addClass('flipInX animated').removeClass('flipOutX').show();
    $('#searchBox').addClass('flipOutX animated').removeClass('flipInX').hide();
    $('#backButton').addClass('flipInX animated').removeClass('flipOutX').show();
    initMap();
    $('#backButton').on('click', function(event) {
      $('#resultsOuterBox').addClass('flipInX').removeClass('flipOutX').show();
      $('#mapView').addClass('flipOutX').removeClass('flipInX').hide();
      $('#searchBox').addClass('flipInX').removeClass('flipOutX').show();
      $('#backButton').addClass('flipOutX').removeClass('flipInX').hide();
    });
  });
}
  $(window).resize(function() {
      mapSize();
    });
