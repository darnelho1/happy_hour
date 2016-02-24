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
var entered = false;

$('#mapView').hide();
$('#backButton').hide();

function resultSizeChange() {
  $height = $(window).height();
  // console.log($height);
  $('#outerBox').css('height', ($height * 0.7));
  $('#resultsOuterBox').css('height', ($height * 0.7));
}
$(window).resize(function() {
    resultSizeChange();
  });

function getLocation() {
  console.log('geo running');
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

$(window).ready(function(event) {
  getLocation();
  // console.log('clicked');
});

var yelpSearchResults=[];
var reducedArray = [];
var resultsArray=[];
var happening = [];
var yelpNeighborhoods=["QUEEN ANNE","PIONEER SQUARE","DOWNTOWN","CAPITOL HILL","SEATTLE","GREEN LAKE","UNIVERSITY DISTRICT","FIRST HILL","INTERNATIONAL DISTRICT","FREMONT","SOUTH LAKE UNION","SLU","NORTH GATE", "NORTHGATE"];
var bgroundImg = ['/images/backBrew.jpg', '/images/optimismBrewing.jpg', '/images/seattleBrew.jpg','/images/seattleBrew.jpg','http://blog.clippervacations.com/wp-content/uploads/2015/04/CopperworksDistilling_TastingRoom.jpg',"http://static1.squarespace.com/static/52330cfde4b0833bcd13f5bc/t/530972cae4b04bff4a3aa4cc/1393128141830/465189_327142707332836_1151580238_o.jpg?format=2500w","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQol80qhEgALz1otCvPA9aIlxX78FHNOkdq_iIG3LxRZhoXCHzeiA","http://i0.wp.com/www.duparandcompany.com/blog/wp-content/uploads/2014/06/KP1_0086.jpg","https://cdn1.vox-cdn.com/thumbor/l7N2xYTgbPhxJUEnQkFipSZwTkE=/0x71:1425x873/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/44193834/EATL_-_Old_Fourth_Distillery_-_04.0.0.jpg","http://greenweddingshoes.com/wp-content/uploads/2016/02/westlanddistillery-wedding-20.jpg","http://copperworksdistilling.com/site/wp-content/uploads/2013/09/Copperworks-sign-and-exterior_1.jpg","http://www.cornichon.org/Westland%20ADI.jpg","http://craftdistillerytours.com/wp-content/uploads/2014/06/Rogue-Distillery-Public-House-Tours-03.jpg","https://s-media-cache-ak0.pinimg.com/originals/76/7e/0f/767e0f46d25f364450df1a0bcd94a77d.jpg"];

var searchParser= function(){
  //Ensure you bind this to the element calling it.
  console.log('Parse Location test');
  console.log(userloc);
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

  // console.log(User);
};

hhNow=function(x){
  // console.log("hnow running");
  x.forEach(function(obj){
  for(var key in obj.happyHour){
    if (moment().isSame(moment().day(key))){//if object day is the same as today
      // console.log(obj.happyHour[key]);
      for(i=0;i<obj.happyHour[key][0].length;i++){
        // console.log(obj.happyHour[key][0][i].split(":"));
        var startHour=Number(obj.happyHour[key][0][i].split(":")[0]);
        var startMin=Number(obj.happyHour[key][0][i].split(":")[1]);
        var endHour=Number(obj.happyHour[key][1][i].split(":")[0]);
        var endMin=Number(obj.happyHour[key][1][i].split(":")[1]);
        // console.log(startHour,startMin);
        // console.log(endHour,endMin);
        if(moment().isBetween(moment().hour(startHour).minute(startMin),moment().hour(endHour).minute(endMin))){//Check if object happy hour period is occuring during the time of search
          var id = '#' + obj.id;
          // console.log(id);
          happening.push(id);
          // console.log('yippe');
          // console.log(obj);
          // console.log("Happy hour is between: "+moment().day(key).hour(startHour).minute(startMin).format('llll')+"-"+moment().day(key).hour(endHour).minute(endMin).format('llll'));
        }

      }

    }
    }
});
};

var hhTimes=function(x){
  x.forEach(function(obj){
    obj.happyHourTimes=[];
    // console.log(obj);
    for(var key in obj.happyHour){
      for(i=0;i<obj.happyHour[key][0].length;i++){
        var startHour=Number(obj.happyHour[key][0][i].split(":")[0]);
        var startMin=Number(obj.happyHour[key][0][i].split(":")[1]);
        var endHour=Number(obj.happyHour[key][1][i].split(":")[0]);
        var endMin=Number(obj.happyHour[key][1][i].split(":")[1]);
        // console.log("Happy Hours: "+moment().day(key).hour(startHour).minute(startMin).format('llll')+"-"+moment().day(key).hour(endHour).minute(endMin).format('llll'));
        obj.happyHourTimes.push(moment().day(key).hour(startHour).minute(startMin).format('ddd h:mma')+"-"+moment().day(key).hour(endHour).minute(endMin).format('h:mma'));
      }
      // console.log(arry);
    }
    // obj.happyHourTimes;
  });
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
  if(entered === false){
    entered = true;
    $('#results').empty();
    yelpSearchResults=[];
    reducedArray = [];
    resultsArray=[];
    // searchCrit=$('#searchBox').val();
    $.post( "/search",{searchCrit:User}, function(data) {
      // console.log( "success" );
    })
      .done(function(data) {
        // console.log("Server Success" );
        // console.log(data.url);
        // console.log(data.yelp);
        window.history.pushState("search/" + data.url," ","search/?" + data.url);
        if (data.yelp.hasOwnProperty('statusCode')){
          console.warn("Error was logged when trying to retrieve results from the Yelp API: "+ data.yelp.data);
          alert("There was a problem processing your request. Please try again or check the console for more information");
        }
        else {
          data.yelp.forEach(function(x){
              happyHourArray.forEach(function(y) {
                if (x.id === y.id) {
                  x.happyHour=y.happyHour;
                  var place = new Places(x);
                  resultsArray.push(place);
                }
              });
            });
            hhNow(resultsArray);
            if (resultsArray.length === 0) {
              // console.log('working');
              $('#results').html('<img id="sadPanda" src="http://cdn.meme.am/instances/57095046.jpg"><h4 id="tryAgain">Search Again...</h4>');
            }

            hhTimes(resultsArray);
            // console.log(resultsArray);
            uniqueArray=_.uniq(resultsArray,function(x){
              return x.name;
            });
            $('body').css('background-image', 'url(' + bgroundImg[Math.floor(Math.random() * bgroundImg.length)] +')');
            $('.backgroundVid').css('background-color', 'rgba(0, 0, 0, 0)');
            $('.fullscreen-bg__video').addClass('fadeOutUp animated');
            setTimeout(function() {
              $('.fullscreen-bg__video').hide();
            },500);
            $('#searchBox').css('margin-top', '2%');
            var template = $('#restTemplate').html();
            var compileTemplate = Handlebars.compile(template);
            Handlebars.registerHelper("happyHourTimes", function(x) {
                return x;
            });
            uniqueArray.forEach(function(each) {
              var html = compileTemplate(each);
              $('#results').append(html);
              $('#results').addClass('fadeInUpBig animated');
              happening.forEach(function(x){
                $(x).find('.hHDropDown').addClass('happeningNow');
                $(x).find('.nowPic').css('display', 'block');
              });
            });
            resultSizeChange();
            mapFunction();
            var endFlag = false;

            $('#resultsOuterBox').bind('scroll', function(){
              if(($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight) && (endFlag === false)){
                endFlag = true;
                var lastResult = $('#results').children(':last-child').attr('id');
                uniqueArray.forEach(function(v) {
                  if (v.id === lastResult) {
                    lastResult = v.coordinate;
                  }
                });
                // console.log(lastResult);
                var resLat = lastResult.latitude + 0.0239;
                var resLong = lastResult.longitude + 0.0239;
                User.currectLoc = resLat + ", "+ resLong;
                User.reqNeighborhood = "";
                // console.log(lastResult);
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
                        // console.log(uniqueMoreArray);
                        uniqueMoreArray.forEach(function(u) {
                          var count = 0;
                          uniqueArray.forEach(function(a){
                            if (u.id !== a.id) {
                              count++;
                              // console.log('same');
                              // console.log(count);
                              // console.log(uniqueArray.length);
                            }
                            if (count === uniqueArray.length) {
                              newResults.push(u);
                              uniqueArray.push(u);
                              // console.log(newResults);
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
                  // mapFunction();
              }
            });
        }
        entered = false;
    })
      .fail(function() {
        alert("Error Communicating With Server");
      })
      .always(function() {
        // console.log("finished");
    });
  }
}
});
