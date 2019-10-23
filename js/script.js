$(document).ready(function () {
    'use strict';
    smoothScroll();
    // -----------------------------
    //  Headroom Initialize
    // -----------------------------
    $('.main-nav').headroom();
    
    // Testimonial Slider
    $('.testimonial-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
    
    $('.about-item').matchHeight({
        byRow: 0
    });

    // Smooth Scroll to Section
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 0)
        }, 700);
        event.preventDefault();
        // if (screen.width < 992) {
        //     $('.navbar-toggler').click();
        // }
    });
    
    // -----------------------------
    //  Parallax Scene
    // -----------------------------
    if (screen.width > 991) {
        var scene = $('#icons').get(0);
        var parallaxInstance = new Parallax(scene);
        parallaxInstance.friction(0.2, 0.2);
    
        // var scene2 = $('#audienceIcons').get(0);
        // var parallaxInstance2 = new Parallax(scene2);
        // parallaxInstance2.friction(0.2, 0.2);
    }

    // -----------------------------
    //  AOS Initialize
    // -----------------------------
    AOS.init();
});

$(window).on('scroll', function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.main-nav').addClass('nav-bg');
    } else {
        $('.main-nav').removeClass('nav-bg');
    }
});

// -----------------------------
// Smmoth Scroll
// -----------------------------
function smoothScroll() {
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 0)
        }, 1500);
        event.preventDefault();
    });
}