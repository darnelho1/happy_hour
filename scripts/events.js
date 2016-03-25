var txt = ["Search For....","Queen Anne","Pioneer Square","Sushi", "Micro-Brew","Cocktail Bars","find me a BEER......", "GET ME DRUNK!!!"];
var timeOut;
var counter =0;
var char = 0;
var num=0;
var time=0;
var endFlag=false;
$('#searchBox').attr('placeholder', '|');
var humanize = Math.round(Math.random() * (200 - 24)) + 30;
function typeIt(x) {
  if ((char === x.length)&&(num<=txt.length-2)) {
    clearTimeout(timeOut);
    // console.log('done');
    removeIt();
  }
  else{
    timeOut = setTimeout(function () {
    char++;
    var type = x.substring(0, char);
    $('#searchBox').attr('placeholder', type + '|');
    typeIt(x);
    // console.log(counter);
      if((counter===txt.length)&&(char===txt[num].length)){
        clearTimeout(timeOut);
        $('#searchBox').attr('placeholder', $('#searchBox').attr('placeholder').slice(0, -1));
        // console.log(counter);
      }
    // console.log('running');
  },humanize);
  }
}
function removeIt(){
  timeOut = setTimeout(function () {
      char--;
      $('#searchBox').attr('placeholder', $('#searchBox').attr('placeholder').slice(0, -1));
      removeIt();
    },humanize);
    if(char<0){
      clearTimeout(timeOut);
      num++;
      time++;
      // console.log(num);
      typeOut();
    }
  //  console.log('test');
}

function typeOut(){
  while((num === time)&&(num<=txt.length-1)){
    typeIt(txt[num]);
    counter++;
    break;
  }
}

typeOut();

function removeCursor(){
  $('#searchBox').attr('placeholder', $('#searchBox').attr('placeholder').slice(0, -1));
}


$("#searchBox").click(function(event) {
  getLocation();
});

$("#searchBox").keyup(function(event) {
  searchParser.bind(this)();
});

$('.loadingImage').hide();  // Hide it initially
$(document).ajaxStart(function() {
  $('.loadingImage').show();
  $('body').css('cursor', 'wait');
  console.log('request started');
});
$(document).ajaxStop(function() {
  $('.loadingImage').hide();
  $('body').css('cursor', 'auto');
  console.log('request stopped');
});

$('li').hover(function() {
  $(this).toggleClass('pulse animated');
});

$('.resultBox').hover(function() {
  $(this).toggleClass('pulse animated');
});

$('.resultsInfo').on('click', function(event) {
  // console.log('working event');
  locationId = $(this).find('.resultAddress').text();
  var dropdown = $(this).find('select');
  console.log('place picked');
  console.log($(this));
  mapSize();
  $('#resultsOuterBox').hide();
  $('#mapView').show();
  $('#searchBox').hide();
  $('#backButton').show();
  initMap();
  $('#backButton').on('click', function(event) {
    $('#resultsOuterBox').show();
    $('#mapView').hide();
    $('#searchBox').show();
    $('#backButton').hide();
  });
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function scrollHappening() { /// insure to bind this to the element being calling it
  if(($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight-1) && (endFlag === false)){
    console.log('happening');
    endFlag = true;
    console.log($('#results').children(':last-child').attr('id'));
    var lastResult = $('#results').children(':last-child').attr('id');
    console.log(lastResult);
    uniqueArray.forEach(function(v) {
      if (v.id === lastResult) {
        console.log(lastResult);
        lastResult = v.coordinate;
      }
    });
    console.log(lastResult);
    var resLat = lastResult.latitude + 0.0239;
    var resLong = lastResult.longitude + 0.0239;
    User.currectLoc = resLat + ", "+ resLong;
    User.reqNeighborhood = undefined;
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
          console.log('event 243 forEach');
          data.forEach(function(x){
              happyHourArray.forEach(function(y) {
                if (x.id === y.id) {
                  console.log(y);
                  console.log(y.logo);
                  console.log(y.website);
                  x.happyHour=y.happyHour;
                  x.img = y.logo;
                  x.website = y.website;
                  var place = new Places(x);
                  console.log(place);
                  moreArray.push(place);
                }
              });
            });
            uniqueMoreArray=_.uniq(moreArray,function(x){
              return x.name;
            });
            uniqueMoreArray.forEach(function(u) {
              var count = 0;
              uniqueArray.forEach(function(a){
                if (u.id !== a.id) {
                  count++;
                  console.log('same');
                }
                if (count === uniqueArray.length) {
                  newResults.push(u);
                  uniqueArray.push(u);
                }
              });
            });
            hhNow(uniqueArray);
            hhTimes(uniqueArray);
          var template = $('#restTemplate').html();
          var compileTemplate = Handlebars.compile(template);
          newResults.forEach(function(each) {
            var html = compileTemplate(each);
            $('#results').append(html);
            $('#results').addClass('fadeInUpBig animated');
          });
          mapFunction();
          endFlag = false;
        }
      });
  }
}

if((window.location.href.indexOf('search/index.html') > -1)||(window.location.href.indexOf('search/?undefined') > -1)){
  window.history.pushState("/","/","/");
}

if(window.location.href.indexOf('search/?') > -1){
  User.terms = getParameterByName('terms');
  var mapLocation = getParameterByName('locationID');
  console.log(mapLocation);
  console.log(User.terms);
  if (User.reqNeighborhood===undefined) {
    User.reqNeighborhood = undefined;
  }
  else {
  User.reqNeighborhood = getParameterByName('reqNeighborhood');
  }
  if (User.currectLoc===""){
    User.currectLoc=undefined;
    }
  else{
    User.currectLoc = getParameterByName('currectLoc');
  }
  console.log(User.currectLoc);
  if (User.currectLoc !== undefined) {
    userLat=User.currectLoc.split(',')[0];
    userLong=User.currectLoc.split(',')[1];
    console.log(User.currectLoc);
  }
  yelpSearchResults=[];
  reducedArray = [];
  resultsArray=[];
  $.post( "/search",{searchCrit:User}, function(data) {
    console.log( "success" );
  })
    .done(function(data) {
      $('body').css('background-image', 'url(' + bgroundImg[Math.floor(Math.random() * bgroundImg.length)] +')');
      // console.log("Server Success" );
      // console.log(data.url);
      console.log(data.yelp);
      //changes
      // window.history.pushState("search/" + data.url," ","search/?" + data.url);
      if (data.yelp.hasOwnProperty('statusCode')){
        console.warn("Error was logged when trying to retrieve results from the Yelp API: "+ data.yelp.data);
        alert("There was a problem processing your request. Please try again or check the console for more information");
      }
      else {
        data.yelp.forEach(function(x){
            happyHourArray.forEach(function(y) {
              if (x.id === y.id) {
                console.log(y);
                console.log(y.logo);
                console.log(y.website);
                x.happyHour=y.happyHour;
                x.img = y.logo;
                x.website = y.website;
                var place = new Places(x);
                console.log(place);
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
          $('.backgroundVid').css('background-color', 'rgba(250, 250, 250, 0)');
          $('.fullscreen-bg__video').addClass('fadeOutUp animated');
          setTimeout(function() {
            $('.fullscreen-bg__video').hide();
          },540);
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
              // console.log(x);
              $(x).find('.hHDropDown').addClass('happeningNow');
              $(x).find('.nowPic').css('display', 'block');
            });
            // console.log(each);
          });
          $('#resultsOuterBox').scroll(function(){
            scrollHappening.bind(this)();
          });
          resultSizeChange();
          mapFunction();
          if (mapLocation !== null) {
            locationId = $('#results').find('#'+mapLocation).find('.resultAddress').text();
            function resultsinfoFunction() {
              return location.href;
            }
            resultsInfoLocation = resultsinfoFunction();
            var resultsInfoArray = resultsInfoLocation.split('&');
            resultsInfo = resultsInfoArray[0]+'&'+resultsInfoArray[1]+'&'+resultsInfoArray[2];
            console.log(resultsInfo);
            getLocation();
            GotToMap();
          }
      }
  })
    .fail(function() {
      alert("Error Communicating With Server");
    })
    .always(function() {
      // console.log("finished");
  });
}

$('#homeBut').on('click', function(event) {
window.open("index.html", '_self');
});

$('#headerTitle').on('click', function(event) {
  window.open("index.html", '_self');
});
