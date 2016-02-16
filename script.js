$height = $(window).height();
console.log($height);
$('#outerBox').css('height', ($height * 0.77));

// var txt = "Queen Anne, Sushi, Cheap, GET ME DRUNK";
// var timeOut;
// var txtLen = txt.length;
// counter =0;
// var char = 0;
// $('#searchBox').attr('placeholder', '|');
// (function typeIt() {
//     var humanize = Math.round(Math.random() * (200 - 30)) + 30;
//     timeOut = setTimeout(function () {
//         char++;
//         var type = txt.substring(0, char);
//         $('#searchBox').attr('placeholder', type + '|');
//         typeIt();
//         if (char == txtLen) {
//             $('#searchBox').attr('placeholder', $('#searchBox').attr('placeholder').slice(0, -1)); // remove the '|'
//             clearTimeout(timeOut);
//         }
//     }, humanize);
// }());

var txt = ["Queen Anne"," Sushi", "Cheap", "GET ME DRUNK!!!"];
var timeOut;
counter =0;
var char = 0;
var num=0;
var time=0;
// flag=true;
$('#searchBox').attr('placeholder', '|');
var humanize = Math.round(Math.random() * (205 - 30)) + 30;
function typeIt(x) {
        timeOut = setTimeout(function () {
        char++;
        var type = x.substring(0, char);
        $('#searchBox').attr('placeholder', type + '|');
        typeIt(x);
      },humanize);
      if ((char === x.length)&&(num<=txt.length-2)) {
        clearTimeout(timeOut);
        removeIt();
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
      console.log(num);
      typeOut();
    }
   console.log('test');
}
function typeOut(){
  while(num === time){
    typeIt(txt[num]);
    break;
  }
}
typeOut();
