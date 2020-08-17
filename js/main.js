// // Main js

// "use strict"

// const main = {
    

//     // ------------- Variable -------------


//     // ------------- Init function -------------

//     init: function() {
//         this.bindEvents();

//         this.slider();
//     },

//     // ------------- Events -------------
//     bindEvents: function() {
//         const _this = this;
//     },

//     // ------------- Functions -------------

   
// }

// $(function() {
//     main.init();
// });

$(document).ready(function() {
    $('.logo-section__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        dots: true,
        autoplay: false,
        arrows: true,
        prevArrow: $('.js-arrow-left'),
        nextArrow: $('.js-arrow-right'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});