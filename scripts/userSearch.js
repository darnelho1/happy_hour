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

$('#mapView').hide();
$('#backButton').hide();

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
var bgroundImg = ['./images/backBrew.jpg', './images/optimismBrewing.jpg', './images/seattleBrew.jpg','./images/seattleBrew.jpg','http://blog.clippervacations.com/wp-content/uploads/2015/04/CopperworksDistilling_TastingRoom.jpg',"http://static1.squarespace.com/static/52330cfde4b0833bcd13f5bc/t/530972cae4b04bff4a3aa4cc/1393128141830/465189_327142707332836_1151580238_o.jpg?format=2500w","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQol80qhEgALz1otCvPA9aIlxX78FHNOkdq_iIG3LxRZhoXCHzeiA","http://i0.wp.com/www.duparandcompany.com/blog/wp-content/uploads/2014/06/KP1_0086.jpg","https://cdn1.vox-cdn.com/thumbor/l7N2xYTgbPhxJUEnQkFipSZwTkE=/0x71:1425x873/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/44193834/EATL_-_Old_Fourth_Distillery_-_04.0.0.jpg","http://greenweddingshoes.com/wp-content/uploads/2016/02/westlanddistillery-wedding-20.jpg","http://copperworksdistilling.com/site/wp-content/uploads/2013/09/Copperworks-sign-and-exterior_1.jpg","http://www.cornichon.org/Westland%20ADI.jpg","http://craftdistillerytours.com/wp-content/uploads/2014/06/Rogue-Distillery-Public-House-Tours-03.jpg","https://s-media-cache-ak0.pinimg.com/originals/76/7e/0f/767e0f46d25f364450df1a0bcd94a77d.jpg"];
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
            $('body').css('background-image', 'url(' + bgroundImg[Math.floor(Math.random() * bgroundImg.length)] +')');
            $('.fullscreen-bg__video').addClass('fadeOutUp animated');
            $('#searchBox').css('margin-top', '2%');
            var template = $('#restTemplate').html();
            var compileTemplate = Handlebars.compile(template);
            uniqueArray.forEach(function(each) {
              var html = compileTemplate(each);
              $('#results').append(html);
              $('#results').addClass('fadeInUpBig animated');
              // console.log(each);
            });
            resultSizeChange();
            mapFunction();
            var endFlag = false;

            $('#outerBox').bind('scroll', function(){
              if(($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight) && (endFlag === false)){
                endFlag = true;
                var lastResult = $('#results').children(':last-child').attr('id');
                uniqueArray.forEach(function(v) {
                  if (v.id === lastResult) {
                    lastResult = v.coordinate;
                  }
                });
                console.log(lastResult);
                var resLat = lastResult.latitude + 0.03;
                var resLong = lastResult.longitude + 0.03;
                User.currectLoc = resLat + ", "+ resLong;
                User.reqNeighborhood = "";
                console.log(lastResult);
                $.post( "/resultsMore",{searchCrit:User}, function(data) {
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
                      var moreArray = [];
                      var uniqueMoreArray = [];
                      var newResults = [];
                      data.forEach(function(x){
                          happyHourArray.forEach(function(y) {
                            if (x.id === y.id) {
                              x.happyHour=y.happyHour;
                              var place = new Places(x);
                              moreArray.push(place);
                            }
                          });
                        });
                        uniqueMoreArray=_.uniq(moreArray,function(x){
                          return x.name;
                        });
                        console.log(uniqueMoreArray);
                        uniqueMoreArray.forEach(function(u) {
                          var count = 0;
                          uniqueArray.forEach(function(a){
                            if (u.id !== a.id) {
                              count++;
                              console.log('same');
                              // console.log(count);
                              // console.log(uniqueArray.length);
                            }
                            if (count === uniqueArray.length) {
                              newResults.push(u);
                              uniqueArray.push(u);
                              console.log(newResults);
                            }
                          });
                        });

                      var template = $('#restTemplate').html();
                      var compileTemplate = Handlebars.compile(template);
                      newResults.forEach(function(each) {
                        var html = compileTemplate(each);
                        $('#results').append(html);
                        $('#results').addClass('fadeInUpBig animated');
                      });
                      endFlag = false;
                    }
                  });
              }
            });
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
