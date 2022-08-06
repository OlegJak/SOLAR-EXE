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