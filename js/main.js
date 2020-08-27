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

    // Menjamo kontent u spanu

    // On resize
    $(window).on('resize', function() {
        if (window.innerWidth < 992) {
            $('.boxes__box-left-date-month').html('September');
        } else {
            $('.boxes__box-left-date-month').html('Sep');
        }

        if (window.innerWidth < 641) {
            $('.header').append($('.banner__logo'));
        } else {
            $('.banner__content').prepend($('.banner__logo'));
        }
    });
    
    // On load
    if (window.innerWidth < 992) {
        $('.boxes__box-left-date-month').html('September');
    } else {
        $('.boxes__box-left-date-month').html('Sep');
    }

    if (window.innerWidth < 641) {
        $('.header').prepend($('.banner__logo'));
    }

    // Toggle hamburger menu
    $('.js-hamburger').on('click', function() {
        $(this).toggleClass('hamburger--active');
        $('.js-nav').toggleClass('nav__wrapper--active');
        $('body').toggleClass('menu-open');
    });
});