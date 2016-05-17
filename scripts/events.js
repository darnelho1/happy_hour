var txt = ["Search For....","Queen Anne","Pioneer Square","Sushi", "Micro-Brew","Cocktail Bars","find me a BEER......", "GET ME DRUNK!!!"];
var timeOut;
var counter =0;
var char = 0;
var num=0;
var time=0;
var endFlag=false;
// var thisID;
// var nowTime;

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

function countDown(id) {
  var deadline;
  var location = id;
  var time;
  var timeNow = moment().format('h');
  var amPm = moment().format('a');
  var toDay = moment().format('dddd');
  if (amPm === 'pm') {
    if (timeNow !== '12') {
      timeNow = Number(timeNow)+12;
      // console.log(timeNow);
    }
  }
  uniqueArray.forEach(function (x, day) {
    // console.log('hello');
    if ("#"+x.id === location) {
      // console.log(x.id);
      // console.log(amPm);
      // console.log(Number(x.happyHour[toDay][0][0].split(':',1)) +"<="+Number(timeNow)+ "<="+ Number(x.happyHour[toDay][1][0].split(':',1)));

      if ((Number(x.happyHour[toDay][0][0].split(':',1)) <= Number(timeNow)) && (Number(timeNow) <= Number(x.happyHour[toDay][1][0].split(':',1)))) {
        time = x.happyHour[toDay][1][0];
        // console.log(time);
        if (Number(time.split(':',1)) >= 24) {
          // console.log('next day');
          var changeTime = moment().format('LL');
          var splitTime = changeTime.split(' ');
          var newDay = Number(splitTime[1].split(',',1))+1;
          var newDate = splitTime[0]+' '+ newDay+', '+ splitTime[2];
          var hours = Number(time.split(':',1)) - 24;
          deadline = newDate + ' ' + hours +':00';
          // console.log(deadline);
        }
        else{
          deadline = moment().format('LL') + ' '+ time+':00';
          // console.log(deadline);
        }
      }
      else if (x.happyHour[toDay][1].length === 2){
        if ((Number(x.happyHour[toDay][0][1].split(':',1)) <= Number(timeNow)) && (Number(timeNow) <= Number(x.happyHour[toDay][1][1].split(':',1)))) {
          // console.log(Number(x.happyHour[toDay][0][1].split(':',1)));
          // console.log(Number(timeNow));
          // console.log(Number(x.happyHour[toDay][1][1].split(':',1)));
          time = x.happyHour[toDay][1][1];
          if (Number(time.split(':',1)) >= 24) {
            // console.log('next day');
            var changeTime = moment().format('LL');
            var splitTime = changeTime.split(' ');
            var newDay = Number(splitTime[1].split(',',1))+1;
            var newDate = splitTime[0]+' '+ newDay+', '+ splitTime[2];
            console.log(Number(time.split(':',1)));
            var hours = Number(time.split(':',1)) - 24;
            deadline = newDate + ' ' + hours +':59';
            // console.log(deadline);
          }
          else{
            deadline = moment().format('LL') + ' '+ time+':00';
            // console.log(deadline);
          }
        }
      }
    }
  });
  function getTimeRemaining (deadline){
    // console.log(Date.parse(deadline));
    // console.log(deadline);
    var t = Date.parse(deadline) - Date.parse(new Date());
    // console.log(deadline);
    // console.log(t);
    var seconds = Math.floor((t/1000)%60);
    var minutes = Math.floor((t/1000/60)%60);
    var hours = Math.floor((t/(1000*60*60))%24);
    var days = Math.floor(t/(1000*60*60*24));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function updateClock(){
      var t = getTimeRemaining(deadline);
      console.log(t.total);
      if (isNaN(t.total)) {
        console.log(t +' cleared');
        clearInterval(timeinterval);
        timeinterval = 0;
      }
      // console.log(location);
      $(location).find('.hours').text(t.hours);
      $(location).find('.minutes').text(('0' + t.minutes).slice(-2));
      $(location).find('.seconds').text(('0' + t.seconds).slice(-2));
      if(t.total<=0){
        clearInterval(timeinterval);
      }
      $('#searchBox').keypress(function(event) {
        if(event.which===13){
          console.log('clear');
          clearInterval(timeinterval);
          timeinterval = 0;
        }
      });

      $('#searchIcon').click(function(){
        console.log('clear');
        clearInterval(timeinterval);
        timeinterval = 0;
      });
  }
  updateClock(location); // run function once at first to avoid delay
  var timeinterval = setInterval(updateClock,1000);
}

function scrollHappening() { /// insure to bind this to the element being calling it
  if(($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight-1) && (endFlag === false)){
    // console.log('happening');
    endFlag = true;
    // console.log($('#results').children(':last-child').attr('id'));
    var lastResult = $('#results').children(':last-child').attr('id');
    // console.log(lastResult);
    uniqueArray.forEach(function(v) {
      if (v.id === lastResult) {
        // console.log(lastResult);
        lastResult = v.coordinate;
      }
    });
    // console.log(lastResult);
    var resLat = lastResult.latitude + 0.0239;
    var resLong = lastResult.longitude + 0.0239;
    User.currectLoc = resLat + ", "+ resLong;
    User.reqNeighborhood = undefined;
    // console.log(lastResult);
    $.post( "/resultsMore",{searchCrit:User}, function(data) {
      console.log( "success" );
    })
      .done(function(data) {
        $('#resultsOuterBox').show();
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
                  // console.log(y);
                  // console.log(y.logo);
                  // console.log(y.website);
                  x.happyHour=y.happyHour;
                  x.img = y.logo;
                  x.website = y.website;
                  var place = new Places(x);
                  // console.log(place);
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
                  // console.log('same');
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
            var eachId = each.id;
            each.happyHourTimes.forEach(function(index){
              $('#'+eachId+' .happyHoursIcons').append("<p class='timesIcon "+index.day+"' value='"+index.time+"'>"+index.day+"</p>");
            });
            $('#results').addClass('fadeInUpBig animated');
            var times = $('#'+eachId+' .'+day).attr('value');
            $('#'+eachId+' .happyHTimes').text(times);
          });
          happening.forEach(function(x){
            var id = x;
            $(x).find('.hHDropDown').addClass('happeningNow');
            $(x).find('.clock').css('display', 'block');
            countDown(id);
          });
          $('.'+day).css('background-color', 'rgba(255, 0, 0, 0.81)');
          endFlag = false;
        }
        $('.mapIcon').unbind('click');
        $('.resultTitle').unbind('click');
        mapFunction();
        $('.timesIcon').unbind('mouseenter mouseleave');
        daysHover();
      });
  }
}

if((window.location.href.indexOf('search/index.html') > -1)||(window.location.href.indexOf('search/?undefined') > -1)){
  window.open("/", '_self');
}


if((window.location.href.indexOf('about') > -1)||(window.location.href.indexOf('about/') > -1)){
  $('#iframeAPIplayer').css('display', 'none');
  $('#iframeAPIplayer').remove();
  $('body').css('background-image', 'url(' + bgroundImg[Math.floor(Math.random() * bgroundImg.length)] +')');
  $('.loadingImage').hide();
  $('.backgroundVid').hide();
  $('#searchBoxWrapper').hide();
  $('#outerBox').hide();
  $('#about-page').css('display', 'flex');
  $('#about-page').show('slow');
}

if(window.location.href.indexOf('search/?') > -1){
  $('#iframeAPIplayer').css('display', 'none');
  $('#iframeAPIplayer').remove();
  User.terms = getParameterByName('terms');
  var mapLocation = getParameterByName('locationID');
  // console.log(mapLocation);
  // console.log(User.terms);
  if (User.reqNeighborhood===undefined) {
    User.reqNeighborhood = undefined;
  }
  else {
  User.reqNeighborhood = getParameterByName('reqNeighborhood');
  }
  // if (User.currectLoc===""){
  //   console.log('blank string');
  //   User.currectLoc=undefined;
  //   }
  // else{
    User.currectLoc = getParameterByName('currectLoc');
    // console.log(User.currectLoc);
  // }
  // console.log(User.currectLoc);
  if (User.currectLoc !== undefined) {
    userLat=User.currectLoc.split(',')[0];
    userLong=User.currectLoc.split(',')[1];
  }
  yelpSearchResults=[];
  reducedArray = [];
  resultsArray=[];
  $.post( "/search",{searchCrit:User}, function(data) {
    console.log( "success" );
  })
    .done(function(data) {
      $('#resultsOuterBox').show();
      getLocation();
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
                // console.log(y);
                // console.log(y.logo);
                // console.log(y.website);
                x.happyHour=y.happyHour;
                x.img = y.logo;
                x.website = y.website;
                var place = new Places(x);
                // console.log(place);
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
          $('#searchBoxWrapper').css('margin-top', '1%');
          var template = $('#restTemplate').html();
          var compileTemplate = Handlebars.compile(template);
          Handlebars.registerHelper("happyHourTimes", function(x) {
              return x;
          });
          uniqueArray.forEach(function(each) {
            var html = compileTemplate(each);
            $('#results').append(html);
            var eachId = each.id;
            each.happyHourTimes.forEach(function(index){
              $('#'+eachId+' .happyHoursIcons').append("<p class='timesIcon "+index.day+"' value='"+index.time+"'>"+index.day+"</p>");
            });
            $('#results').addClass('fadeInUpBig animated');
            happening.forEach(function(x){
              var id = x;
              $(x).find('.hHDropDown').addClass('happeningNow');
              $(x).find('.clock').css('display', 'block');
              countDown(id);
            });
            $('.'+day).css('background-color', 'rgba(255, 0, 0, 0.81)');
            var times = $('#'+eachId+' .'+day).attr('value');
            $('#'+eachId+' .happyHTimes').text(times);
            // console.log(each);
          });
          $('#resultsOuterBox').scroll(function(){
            scrollHappening.bind(this)();
          });

          daysHover();
          resultSizeChange();

          mapFunction();
          if (mapLocation !== null) {
            if (userLat === undefined) {
              User.currectLoc = getParameterByName('currectLoc');
              userLat=User.currectLoc.split(',')[0];
              userLong=User.currectLoc.split(',')[1];
            }
            console.log(userLat);
            locationId = $('#results').find('#'+mapLocation).find('.resultAddress').text();
            locationsName = $('#results').find('#'+mapLocation).find('.resultTitle').text();
            function resultsinfoFunction() {
              return location.href;
            }
            resultsInfoLocation = resultsinfoFunction();
            var resultsInfoArray = resultsInfoLocation.split('&');
            resultsInfo = resultsInfoArray[0]+'&'+resultsInfoArray[1]+'&'+resultsInfoArray[2];
            console.log(resultsInfo);
            // GotToMap();
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


$('#aboutBut').click(function() {
  /* Act on the event */
  console.log('clicked');
  $('body').css('background-image', 'url(' + bgroundImg[Math.floor(Math.random() * bgroundImg.length)] +')');
  $('.loadingImage').hide();
  $('.backgroundVid').hide();
  $('#searchBoxWrapper').hide();
  $('#outerBox').hide();
  $('#about-page').show('slow');
});
