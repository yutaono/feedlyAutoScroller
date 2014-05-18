'use strict';

$(function(){
    var speed = 6;
    var isScrolling = false;
    var timer;

    function startTimer() {
        var s = $(window).scrollTop();
        timer = setInterval(function(){
            s += speed;
            $('html, body').animate({scrollTop: s}, 100);
        }, 100);
    }

    function stopTimer() {
        clearInterval(timer);
    }

    $('body').on('keyup', function(e){
        if (e.keyCode !== 73) { // 73はiの文字コード
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