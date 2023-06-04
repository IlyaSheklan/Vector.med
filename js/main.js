'use strict';

// Slider main
(function(){
    	
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

    });

})();