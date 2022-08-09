
$(window).on('load', function() {
    $('.preloader').slideUp(700)
});


$(".left").mouseenter(function () { 
    $(this).attr("src", "img/left-active.svg")
});

$(".left").mouseleave(function () { 
    $(this).attr("src", "img/left.svg")
});

$(".right").mouseenter(function () { 
    $(this).attr("src", "img/right_active.svg")
});

$(".right").mouseleave(function () { 
    $(this).attr("src", "img/right.svg")
});



let count = 0

$(".button__right").click(function(){ 
    if (count >= 2){
        $('.section__3__img').animate({right: "0px"}, 500)
        count = 0;
    }  
    else{
        $('.section__3__img').animate({right: "+=100%"}, 500)
        count++;
    }
});

$(".button__left").click(function(){ 
    if (count <= 0){
        $('.section__3__img').animate({right: "200%"}, 500)
        count = 2;
    }  
    else{
        $('.section__3__img').animate({right: "-=100%"}, 500)
        count--;
    }
});



let countSection_5 = 0


$(".section__5__button__right").click(function(){ 
    if (countSection_5 >= 2){
        $('.section__5__img').animate({right: "0px"}, 500)
        countSection_5 = 0;
    }  
    else{
        $('.section__5__img').animate({right: "+=100%"}, 500)
        countSection_5++;
    }
});

$(".section__5__button__left").click(function(){ 
    if (countSection_5 <= 0){
        $('.section__5__img').animate({right: "200%"}, 500)
        countSection_5 = 2;
    }  
    else{
        $('.section__5__img').animate({right: "-=100%"}, 500)
        countSection_5--;
    }
});



let animatePosition__1 = $(".section__2").offset();
let animatePosition__2 = $(".section__3").offset();
let animatePosition__3 = $(".section__4").offset();
let animatePosition__4 = $(".section__5").offset();
let animatePosition__5 = $(".section__6").offset();

$(window).resize(function() {
    animatePosition__1 = $(".section__2").offset();
    animatePosition__2 = $(".section__3").offset();
    animatePosition__3 = $(".section__4").offset();
    animatePosition__4 = $(".section__5").offset();
    animatePosition__5 = $(".section__6").offset();
});
    
$(".section__6__container").slideUp(0)

$(document).scroll(function () { 
    var screenTop = $(document).scrollTop();

    if (screenTop >= animatePosition__1.top - 600){
        $(".section__2__col__1").animate(
            {left: "0px"},
            1500);
        $(".section__2__col__2").animate(
            {opacity: "1"},
            1500); 
    };

    if (screenTop >= animatePosition__2.top - 600){
        $(".section__3__col__1").animate(
            {left: "0px"},
            1500);
        $(".section__3__col__2").animate(
            {right: "0px"},
            1500);
    };

    if (screenTop >= animatePosition__3.top - 600){
        $(".section__4__p").animate(
            {opacity: "1"},
            1500);
    }

    if (screenTop >= animatePosition__4.top - 600){
        $(".section__5__contant").animate(
            {left: "0"},
            1500);
    }
    if (screenTop >= animatePosition__5.top - 600){
        $(".section__6__container").slideDown(1500)
    }
});


