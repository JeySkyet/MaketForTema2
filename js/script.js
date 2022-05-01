$(document).ready(function(){
    $('.new-wallpaper__slider').owlCarousel({
    items: 4,
    loop:true,
    margin:10,
    nav:true,
    navText : ["<i class='arrow-left'><img src='image/arrow-left.png' /></i>","<i class='arrow-right'><img src='image/arrow-right.png' /></i>"]
    });
    
    $('.colors-slider').owlCarousel({
    items: 6,
    loop:true,
    margin:10,
    nav:true,
    navText : ["<i class='arrow-left'><img src='image/arrow-left.png' /></i>","<i class='arrow-right'><img src='image/arrow-right.png' /></i>"]
    });

    $(".button_play").on("click", function(){
    $('#video')[0].play();
    $('.button_play').hide();
    });
    $("#video").on("click", function(){
    $('#video')[0].pause();
    $('.button_play').show();
    });

    $('.header__slider').owlCarousel({
    items: 1,
    loop:true,
    margin:0,
    nav:true,
    navText : ["<i class='arrow-left'><img src='image/arrow-left-white.png' /></i>","<i class='arrow-right'><img src='image/arrow-right-white.png' /></i>"]
    });

    $('.footer-bottom__arrow').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1200);
        return false;
        });
    });