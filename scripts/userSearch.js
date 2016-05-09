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
  this.img = obj.img,
  this.website = obj.website
}
var User = {
  currectLoc: "",
  reqNeighborhood:undefined,
  terms:""
};

var userloc;
var userLat;
var userLong;
var entered = false;
var day;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getUserLoc);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function getUserLoc(position) {
    userloc = position.coords.latitude + ','+ position.coords.longitude;
    userLat=position.coords.latitude;
    userLong=position.coords.longitude;
    User.currectLoc=userloc;
    console.log(User);
}

$('#mapView').hide();
$('#backButton').hide();
$('#about-page').hide();
getLocation();

function resultSizeChange() {
  $height = $(window).height();
  $('body').css('height', $height);
  if($(window).width() < 500){
    console.log('working');
    $('#outerBox').css('height', ($height * 0.77));
    $('#about-page').css('height', ($height * 0.92));
    $('#resultsOuterBox').css('height', ($height * 0.77));
  }
  else if($(window).width() < 697){
    console.log('working');
    $('#outerBox').css('height', ($height * 0.725));
    $('#about-page').css('height', ($height * 0.875));
    $('#resultsOuterBox').css('height', ($height * 0.725));
  }
  else if ($(window).width() < 935) {
    $('#outerBox').css('height', ($height * 0.715));
    $('#about-page').css('height', ($height * 0.855));
    $('#resultsOuterBox').css('height', ($height * 0.715));
  }
  else{
    $('#outerBox').css('height', ($height * 0.71));
    $('#about-page').css('height', ($height * 0.85));
    $('#resultsOuterBox').css('height', ($height * 0.71));
  }
}
resultSizeChange();
$(window).resize(function() {
    resultSizeChange();
  });



function sortLocations(locations, lat, lng) {
  function dist(l) {
    return (l.latitude - lat) * (l.latitude - lat) +
      (l.longitude - lng) * (l.longitude - lng);
  }

  locations.sort(function(l1, l2) {
    return dist(l1.location.coordinate) - dist(l2.location.coordinate);
  });
}

var yelpSearchResults=[];
var reducedArray = [];
var resultsArray=[];
var happening = [];
var yelpNeighborhoods=[
    "QUEEN ANNE","PIONEER SQUARE","DOWNTOWN","CAPITOL HILL","SEATTLE","GREEN LAKE","UNIVERSITY DISTRICT","FIRST HILL","INTERNATIONAL DISTRICT","FREMONT","SOUTH LAKE UNION","SLU","NORTH GATE", "NORTHGATE","BALLARD","GREEN WOOD","GREENWOOD","MAPLE LEAF","WEDGEWOOD","WEDGE WOOD","WEDGWOOD","VIEW RIDGE","RAVENNA","UNIVERSITY VILLAGE","WALLINGFORD","MAGNOLIA","LOWER QUEEN ANNE","MONTLAKE","LAKE UNION","WESTLAKE","BELLTOWN","CENTRAL DISTRICT","MADRONA","RAINER VALLEY","MOUNT BAKER","COLUMBIA CITY","RAINIER BEACH","RAINIER VALLEY","HILLMAN CITY","SEWARD PARK","BEACON HILL","SODO"
    ];
var bgroundImg = ['/images/backBrew.jpg', '/images/optimismBrewing.jpg', '/images/seattleBrew.jpg','/images/seattleBrew.jpg','http://blog.clippervacations.com/wp-content/uploads/2015/04/CopperworksDistilling_TastingRoom.jpg',"http://static1.squarespace.com/static/52330cfde4b0833bcd13f5bc/t/530972cae4b04bff4a3aa4cc/1393128141830/465189_327142707332836_1151580238_o.jpg?format=2500w","http://i0.wp.com/www.duparandcompany.com/blog/wp-content/uploads/2014/06/KP1_0086.jpg","https://cdn1.vox-cdn.com/thumbor/l7N2xYTgbPhxJUEnQkFipSZwTkE=/0x71:1425x873/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/44193834/EATL_-_Old_Fourth_Distillery_-_04.0.0.jpg","http://greenweddingshoes.com/wp-content/uploads/2016/02/westlanddistillery-wedding-20.jpg","http://copperworksdistilling.com/site/wp-content/uploads/2013/09/Copperworks-sign-and-exterior_1.jpg","http://www.cornichon.org/Westland%20ADI.jpg","https://s-media-cache-ak0.pinimg.com/originals/76/7e/0f/767e0f46d25f364450df1a0bcd94a77d.jpg"];

var searchParser= function(){
  //Ensure you bind this to the element calling it.
  // console.log('Parse Location test');
  // console.log(userloc);

  // console.log(userLat,userLong);

  userSearchData=$(this).val();
  yelpNeighborhoods.forEach(function(x){
    if(userSearchData.toUpperCase().indexOf(x)>-1){
      User.reqNeighborhood=x;
    }
  });
  console.log(userSearchData);
  User.terms=userSearchData.toUpperCase().replace(User.reqNeighborhood,"");
  if (userSearchData === '') {
    console.log('clear');
    User.reqNeighborhood = undefined;
    User.terms = '';
  }
  console.log(User);
};

hhNow=function(x){
  // console.log("hnow running");
  x.forEach(function(obj){
  for(var key in obj.happyHour){
    if (key.toString().indexOf(moment()._d.toString().slice(0,3)) > -1){
      // console.log(key);
      day = key.slice(0,3);
      // console.log(day);
    }
    if (moment().isSame(moment().day(key))){//if object day is the same as today
      // console.log(obj.happyHour[key]);
      for(i=0;i<obj.happyHour[key][0].length;i++){
        // console.log(obj);
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
console.log('color');
};

var hhTimes=function(x){
  console.log(x);
  x.forEach(function(obj){
    obj.happyHourTimes=[];
    obj.happyHourTime=[];
    obj.happyHourTimeFilter=[];
    for(var key in obj.happyHour){
      for(i=0;i<obj.happyHour[key][0].length;i++){
        var startHour=Number(obj.happyHour[key][0][i].split(":")[0]);
        var startMin=Number(obj.happyHour[key][0][i].split(":")[1]);
        var endHour=Number(obj.happyHour[key][1][i].split(":")[0]);
        var endMin=Number(obj.happyHour[key][1][i].split(":")[1]);
        // console.log("Happy Hours: "+moment().day(key).hour(startHour).minute(startMin).format('llll')+"-"+moment().day(key).hour(endHour).minute(endMin).format('llll'));
        obj.happyHourTime.push({'day': moment().day(key).format('ddd'), 'time':moment().hour(startHour).minute(startMin).format('h:mma')+"-"+moment().day(key).hour(endHour).minute(endMin).format('h:mma')});
      }
      // console.log(arry);
    }
    console.log(obj);
    for (index = 0; index < obj.happyHourTime.length; index++) {
      var nextOne = 1;
      while (nextOne < obj.happyHourTime.length) {
        if (obj.happyHourTime[index].day === obj.happyHourTime[nextOne].day) {
            if (obj.happyHourTime[index].time === obj.happyHourTime[nextOne].time) {
            obj.happyHourTimes.push({'day':obj.happyHourTime[index].day, 'time': obj.happyHourTime[index].time});
            nextOne = obj.happyHourTime.length;
          }
          else{
            obj.happyHourTimes.push({'day': obj.happyHourTime[index].day, 'time': obj.happyHourTime[nextOne].time +" & "+ obj.happyHourTime[index].time});
            nextOne = obj.happyHourTime.length;
          }
        }
        else if(nextOne === obj.happyHourTime.length-1) {
          obj.happyHourTimes.push({'day':obj.happyHourTime[index].day, 'time': obj.happyHourTime[index].time});
        }
        nextOne++;
      }
    }
    for (index = 0; index < obj.happyHourTimes.length-1; index++) {
      var next = index+1;
      // console.log(next);
      if (obj.happyHourTimes[index].day == obj.happyHourTimes[next].day) {
        if (index === 0) {
          obj.happyHourTimes.splice(next, 1);
        }
        else{
          obj.happyHourTimes.splice(index, 1);
        }
      }
    }
  });
};

function sortLocations(locations, lat, lng) {
  function dist(l) {
    return (l.latitude - lat) * (l.latitude - lat) +
      (l.longitude - lng) * (l.longitude - lng);
  }

  locations.sort(function(l1, l2) {
    return dist(l1.location.coordinate) - dist(l2.location.coordinate);
  });
}

function daysHover() {
  var thisID;
  var nowTime;
  $('.timesIcon').hover(function() {
    var times = $(this).attr('value');
    var thisId = $(this).parent().parent().parent().parent().attr('id');
    thisID = '#'+thisId;
    // console.log(thisID);
    nowTime = $(thisID+" .happyHTimes").text();
    // console.log(nowTime);
    $(this).css('background-color', 'rgba(255, 0, 0, 0.81)');
    $(thisID+" .happyHTimes").text(times);
    if ($(this).text()!==day) {
      $(thisID+" ."+day).css('background-color', 'rgba(0, 0, 0, 0.81)');
    }
  }, function() {
    $(this).css('background-color', 'rgba(0, 0, 0, 0.81)');
    $('.'+day).css('background-color', 'rgba(255, 0, 0, 0.81)');
    // console.log(nowTime);
    $(thisID+" .happyHTimes").text(nowTime);
    // console.log(nowTime);
  });
}

defaultSearch = function(){
  document.activeElement.blur();
  $("#searchBox").blur();
if(entered === false){
  entered = true;
  console.log($('#searchBox').val());
  if ($('#searchBox').val() === '') {
    User.reqNeighborhood = undefined;
    User.terms = "";
  }
  $('#results').empty();
  $('#resultsOuterBox').unbind('scroll');
  yelpSearchResults=[];
  reducedArray = [];
  resultsArray=[];
  // searchCrit=$('#searchBox').val();
  $.post( "/search",{searchCrit:User}, function(data) {
    // console.log( "success" );
  })
    .done(function(data) {
      $('#resultsOuterBox').show();
      // $('#searchIcon').hide();
      if(window.location.href.indexOf('search') <= -1){
        window.history.pushState("search/" + data.url," ","search/?" + data.url);
      }
      else{
        window.history.pushState("search/" + data.url," ","?" + data.url);
      }
      $('body').css('background-image', 'url(' + bgroundImg[Math.floor(Math.random() * bgroundImg.length)] +')');

      if (data.yelp.hasOwnProperty('statusCode')){
        console.warn("Error was logged when trying to retrieve results from the Yelp API: "+ data.yelp.data);
        alert("There was a problem processing your request. Please try again or check the console for more information");
      }
      else {
        data.yelp.forEach(function(x){
            happyHourArray.forEach(function(y) {
              if (x.id === y.id) {
                x.happyHour=y.happyHour;
                x.img  = y.logo;
                x.website = y.website;
                var place = new Places(x);
                resultsArray.push(place);
              }
            });
          });
          hhNow(resultsArray);
          if (resultsArray.length === 0) {
            $('#results').html('<img id="sadPanda" src="http://cdn.meme.am/instances/57095046.jpg"><h4 id="tryAgain">Search Again...</h4>');
          }
          hhTimes(resultsArray);
          uniqueArray=_.uniq(resultsArray,function(x){
            return x.name;
          });
          $('.backgroundVid').css('background-color', 'rgba(250, 250, 250, 0)');
          $('.fullscreen-bg__video').addClass('fadeOutUp animated');
          setTimeout(function() {
            console.log('time Done');
            $('.fullscreen-bg__video').hide();
            $('#iframeAPIplayer').css('display', 'none');
            $('#iframeAPIplayer').remove();
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
              countDown(x);
            });
            $('.'+day).css('background-color', 'rgba(255, 0, 0, 0.81)');
            var times = $('#'+eachId+' .'+day).attr('value');
            $('#'+eachId+' .happyHTimes').text(times);
          });
          $('#resultsOuterBox').scroll(function(){
            scrollHappening.bind(this)();
          });
          daysHover();

          resultSizeChange();
          mapFunction();
          var endFlag = false;
      }
      entered = false;
  })
    .fail(function() {
      alert("Error Communicating With Server");
    })
    .always(function() {
  });
}
};

$('#searchBox').keypress(function(event) {
  if(event.which===13){
    defaultSearch();
  }
});

$('#searchIcon').click(function(){
  defaultSearch();
});
