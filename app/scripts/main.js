$(function(){
  var speed = 10;

  var s = 0;
  setInterval(function(){
    s += speed;
    $("html, body").animate({scrollTop: s}, 100);
  }, 100);
});