  var map;
  var locationId;
  var resultsUrl;
  var locationsName;

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
        $('#turnByTurn').empty();
        calculateAndDisplayRoute(directionsService, directionsDisplay);
      });
    }
    map();

  }

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var selectedMode = document.getElementById('mode').value;
    console.log('users lat and long');
    console.log(userLat + " and " + userLong);
    console.log('location picked id');
    console.log(locationId);
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
    });
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

  function GotToMap() {
    mapSize();
    $('#resultsOuterBox').addClass('slideOutDown animated');
    $('#searchBoxWrapper').addClass('flipOutX animated').removeClass('flipInX');
    setTimeout(function(){
      $('#resultsOuterBox').hide();
      $('#searchBoxWrapper').hide();
      $('#mapView').addClass('slideInDown animated').removeClass('slideOutUp').show();
      console.log(locationsName);
      $('#takeMe').attr('href', 'maps:daddr=' + locationId);
      $('#locationName').text(locationsName);
      $('#backButton').addClass('flipInX animated').removeClass('flipOutX').show();
      initMap();
    }, 470);
    $('#backButton').on('click', function(event) {
      window.history.replaceState(resultsInfo, resultsInfo, resultsInfo);
      $('#mapView').addClass('slideOutUp').removeClass('slideInDown');
      $('#backButton').addClass('flipOutX').removeClass('flipInX');
      setTimeout(function(){
        $('#mapView').hide();
        $('#backButton').hide();
        $('#searchBoxWrapper').addClass('flipInX').removeClass('flipOutX').show();
        $('#resultsOuterBox').removeClass('slideOutDown').show();
      }, 470);
    });
  }

function mapFunction() {
  $('.mapIcon').hover(function() {
    $(this).toggleClass('pulse animated');
  });

  function clickMapView(clickedLocation) {
    function resultsinfoFunction() {
      return location.href;
    }
    resultsInfo = resultsinfoFunction();
    locationsName = $('#'+clickedLocation).find('.resultTitle').text();
    console.log(locationsName);
    window.history.replaceState(location.href+"&locationID="+clickedLocation,location.href+"&locationID="+clickedLocation,location.href+"&locationID="+clickedLocation);
    GotToMap();
  }
  $('.mapIcon').on('click', function(event) {
    locationId = $(this).parent().parent().parent().find('.resultAddress').text();
    var clickedLocation = $(this).parent().parent().parent().attr("id");
    clickMapView(clickedLocation);
  });
  $('.resultTitle').on('click', function(event) {
    locationId = $(this).parent().find('.resultAddress').text();
    var clickedLocation = $(this).parent().parent().parent().attr("id");
    clickMapView(clickedLocation);
  });
}

  $(window).resize(function() {
      mapSize();
    });
