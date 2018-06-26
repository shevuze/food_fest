;(function($) {
    "use strict";
    var slider = $('.ba-slider');

    slider.slick({
        dots:true,
        slideToScroll:1,
        slideToShow:1,
        slide: '.ba-slide',
        prevArrow: '.slick-prev',
        nextArrow: '.slick-next',  
        
    });

})(jQuery);


