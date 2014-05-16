'use strict';

$(function(){
    var isScrolling = false;
    var timer;
    var s = 0;

    function startTimer() {
        var speed = 10;

        timer = setInterval(function(){
            s += speed;
            $('html, body').animate({scrollTop: s}, 100);
        }, 100);
    }

    function stopTimer() {
        clearInterval(timer);
    }

    $('body').on('keyup', function(e){
        if (e.keyCode !== 76) {  // 76はLの文字コード
            return;
        }

        if(isScrolling) {
            isScrolling = false;
            stopTimer();
        } else {
            isScrolling = true;
            startTimer();
        }
    });
});