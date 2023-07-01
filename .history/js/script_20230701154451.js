$(function(){
    var $win = $(window),
        $fv = $('.fv'),
        $header = $('.header'),
        fvHeight = $fv.outerHeight();
        fixedClass = 'fixed';

    $win.on('load scroll', function() {
        var value = $(this).scrollTop();
        if($win.width() > 768) {
            if(value > fvHeight) {
                $header.addClass(fixedClass);
            } else {
                $header.removeClass(fixedClass);
            }
        }
    });
});

// スライダー
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    cssEase: 'linear'
});

//ハンバーガーボタン
$('.hamburger-btn').on('click', function() {
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
});


$(document).ready(function(){
    if ($(window).width() < 768) {
        $('.header-item').on('click', function() {
            $('.header-nav').fadeToggle(300);
            $('.hamburger-btn').toggleClass('cross');
            $('body').toggleClass('noscroll');
        })
    }
});

$('#page-link a[href*="#"]').click(function() {
var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top;
    $('body,html').animate({scrollTop: pos},500);
    return false;
});

