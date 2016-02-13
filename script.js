// $backgroundVideo = $('.fullscreen-bg__video');
// $backgroundVideo.volume=0;

$height = $(window).height();
console.log($height);
$('#outerBox').css('height', ($height * 0.77));

var txt = "Queen Anne, Sushi, Cheap, GET ME DRUNK";
var timeOut;
var txtLen = txt.length;
counter =0;
var char = 0;
$('#searchBox').attr('placeholder', '|');
(function typeIt() {
    var humanize = Math.round(Math.random() * (200 - 30)) + 30;
    timeOut = setTimeout(function () {
        char++;
        var type = txt.substring(0, char);
        $('#searchBox').attr('placeholder', type + '|');
        typeIt();
        if (char == txtLen) {
            $('#searchBox').attr('placeholder', $('#searchBox').attr('placeholder').slice(0, -1)); // remove the '|'
            clearTimeout(timeOut);
        }
    }, humanize);
}());
