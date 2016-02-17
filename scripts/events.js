var txt = ["Search For....","Queen Anne","Pioneer Square","Sushi", "Micro-Brew","Cocatial Bars","Seattle Happy Hour Finder Will Help......", "GET ME DRUNK!!!"];
var timeOut;
var counter =0;
var char = 0;
var num=0;
var time=0;
// flag=true;
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
