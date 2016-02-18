function Places(obj) {
  this.id = obj.id,
  this.name = obj.name,
  this.rating = obj.rating_img_url_large,
  this.categories = _.flatten(obj.categories).join(", "),
  this.display_phone = obj.display_phone,
  this.coordinate = obj.location.coordinate,
  this.address = obj.location.display_address.join(' '),
  this.neighborhood = _.flatten(obj.location.neighborhoods),
  this.happyHour = obj.happyHour,
  this.img = obj.image_url,
  this.website = obj.url
}
var User = {
  currectLoc: "",
  reqNeighborhood:'',
  terms:""
};

var userloc;
var userLat;
var userLong;

function resultSizeChange() {
  $height = $(window).height();
  console.log($height);
  $('#outerBox').css('height', ($height * 0.7));
}
$(window).resize(function() {
    resultSizeChange();
  });

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getUserLoc);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function getUserLoc(position) {
    userloc = position.coords.latitude + ','+ position.coords.longitude;
    // console.log(userloc);

}

function sortLocations(locations, lat, lng) {
  function dist(l) {
    return (l.latitude - lat) * (l.latitude - lat) +
      (l.longitude - lng) * (l.longitude - lng);
  }

  locations.sort(function(l1, l2) {
    return dist(l1.location.coordinate) - dist(l2.location.coordinate);
  });
}

$("#searchBox").click(function(event) {
  getLocation();
  // console.log('clicked');
});

var yelpSearchResults=[];
var reducedArray = [];
var resultsArray=[];
var yelpNeighborhoods=["QUEEN ANNE","PIONEER SQUARE","DOWNTOWN","CAPITOL HILL","SEATTLE","GREEN LAKE","UNIVERSITY DISTRICT","FIRST HILL","INTERNATIONAL DISTRICT","FREMONT","SOUTH LAKE UNION","SLU","NORTH GATE", "NORTHGATE"];
var bgroundImg = ['./images/backBrew.jpg', './images/optimismBrewing.jpg', './images/seattleBrew.jpg'];
// var happyHourArray=[
//   {id: 'radiator-whiskey-seattle', happyHour: '4PM TO 6PM 10PM TO CLOSE'},
//   {id: 'list-seattle', happyHour: 'Sunday & Monday:  All Day Tuesday - Thursday: 4:00 - 6:30pm & 9pm - Midnight Friday & Saturday:  4:00 - 6:30pm'},
//   {id: 'the-zig-zag-café-seattle-2', happyHour: '5-7 Monday-Friday'},
//   {id: 'witness-seattle', happyHour: '4-6pm every day'},
//   {id: 'bottlehouse-seattle', happyHour: 'Daily 3-6pm'},
//   {id: 'the-forge-lounge-seattle',  happyHour: 'Daily 3-7'},
//   {id: 'toulouse-petit-seattle', happyHour: 'daily 4 pm to 6 pm nightly 10 pm to 1 am'},
//   {id: 'taylor-shellfish-oyster-bar-seattle', happyHour: 'Monday - Friday 4pm - 6pm'},
//   {id: 'damn-the-weather-seattle', happyHour: 'M-F 4-6:30pm'},
//   {id: 'suika-seattle-seattle', happyHour: 'TUE-FRI 5PM-6:30 SAT, SUN 4PM-6:30'},
//   {id: 'triumph-bar-seattle', happyHour: '3 and 6pm, late night from 10 to close Tuesday–Saturday and 9 to close Sunday and Monday'},
//   {id: 'quinns-seattle', happyHour: '3-6pm'},
//   {id: 'sun-liquor-seattle', happyHour: '4pm - 7pm'},
//   {id: 'betty-seattle', happyHour: '4:30pm-6:00pm'},
//   {id: 'the-octopus-bar-seattle', happyHour: '3:30-6:30pm'},
//   {id: 'the-sixgill-seattle', happyHour: '4pm - 6pm!'},
//   {id: 'russells-seattle', happyHour: 'DAILY:  4PM - 6PM'},
//   {id:'the-noble-fir-seattle', happyHour: '4pm - 6:30pm'},
//   {id:'latona-pub-seattle', happyHour: '4:30 - 6:30 Wed - Sun! and 4:00 - 6:30 Mon & Tues!!'},
//   {id:'brouwers-cafe-seattle', happyHour: '3pm - 6pm'},
//   {id:'witness-seattle', happyHour: '4-6pm'},
//   {id:'über-tavern-seattle-2', happyHour: '4-6PM -- TUES-FRI'},
//   {id:'yoroshiku-seattle-4', happyHour: 'Tuesday through Saturday 5-6:30pm'}
// ];


var searchParser= function(){
  //Ensure you bind this to the element calling it.
  userLat=userloc.split(',')[0];
  userLong=userloc.split(',')[1];
  userSearchData=$(this).val();
  yelpNeighborhoods.forEach(function(x){
    if(userSearchData.toUpperCase().indexOf(x)>-1){
      User.reqNeighborhood=x;
    }
  });

  User.terms=userSearchData.toUpperCase().replace(User.reqNeighborhood,"");
  User.currectLoc=userloc;

  console.log(User);
};

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getUserLoc);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function getUserLoc(position) {
    userloc = position.coords.latitude + ','+ position.coords.longitude;
}

function sortLocations(locations, lat, lng) {
  function dist(l) {
    return (l.latitude - lat) * (l.latitude - lat) +
      (l.longitude - lng) * (l.longitude - lng);
  }

  locations.sort(function(l1, l2) {
    return dist(l1.location.coordinate) - dist(l2.location.coordinate);
  });
}

$('#searchBox').keypress(function(event) {
  if(event.which===13){
    // console.log('success');
    searchCrit=$('#searchBox').val();


    $.post( "/search",{searchCrit:User}, function(data) {
      console.log( "success" );
    })
      .done(function(data) {
        console.log("Server Success" );
        // console.log(data);

        if (data.hasOwnProperty('statusCode')){
          console.warn("Error was logged when trying to retrieve results from the Yelp API: "+ data.data);
          alert("There was a problem processing your request. Please try again or check the console for more information");
        }
        else {

          data.forEach(function(x){
              happyHourArray.forEach(function(y) {
                if (x.id === y.id) {
                  x.happyHour=y.happyHour;
                  var place = new Places(x);
                  resultsArray.push(place);
                }
              });
            });
            uniqueArray=_.uniq(resultsArray,function(x){
              return x.name;
            });
            $('body').css('background-image', 'url(' + bgroundImg[Math.floor(Math.random() * 3)] +')');
            $('.fullscreen-bg__video').addClass('fadeOutUp animated');
            $('#searchBox').css('margin-top', '2%');
            var template = $('#restTemplate').html();
            var compileTemplate = Handlebars.compile(template);
            uniqueArray.forEach(function(each) {
              var html = compileTemplate(each);
              $('#results').append(html);
              $('#results').addClass('fadeInUpBig animated');
              console.log(each);
            });
            resultSizeChange();
        }
    })
      .fail(function() {
        alert("Error Communicating With Server");
      })
      .always(function() {
        console.log("finished");
    });
  }
});
