$(document).ready(function () {

    //slinderin owl caruseli
    $('.owl__slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        mouseDrag: true,
        responsive: {

            320: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1200: {
                items: 4,
                autoWidth: true
            }
        }





    })

    var selectormob = $('.owl__slider');

    //sag oxun elementin
    $('.our__slider-next').click(function () {
        selectormob.trigger('next.owl.carousel');
    });

    //sol oxun elementin
    $('.our__slider-prev').click(function () {
        selectormob.trigger('prev.owl.carousel');
    });


    //partnorsun owl caruseli
    $('.owl-partnors').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            320: {
                items: 1
            },
            600: {
                items: 1
            },
            900: {
                items: 2
            },
            1000: {
                items: 3
            }
        }


    })

    var selector = $('.owl-partnors');

    //sag oxun elementin
    $('.partnors-next').click(function () {
        selector.trigger('next.owl.carousel');
    });

    //sol oxun elementin
    $('.partnors-prev').click(function () {
        selector.trigger('prev.owl.carousel');
    });



    $('.owl-caryer').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            320: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1000: {
                items: 4
            }
        }


    })

    var select_caryer = $('.owl-caryer');

    //sag oxun elementin
    $('.caryer-next').click(function () {
        select_caryer.trigger('next.owl.carousel');
    });

    //sol oxun elementin
    $('.caryer-prev').click(function () {
        select_caryer.trigger('prev.owl.carousel');
    });


    $('.owl-student').owlCarousel({
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            320: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }


    })


        var select_student = $('.owl-student');
        //sag oxun elementin
        $('.student-next').click(function () {
            select_student.trigger('next.owl.carousel');
        });

        //sol oxun elementin
        $('.student-prev').click(function () {
            select_student.trigger('prev.owl.carousel');
        });

        document.querySelector('.my-owl-nav').style.display = 'block'

        document.querySelector('.my-owl-nav').style.display = 'none'

    

});



$('.header__sidebar--OpenIconbox').click(function () {

    $(".header__sidebar").toggleClass('active');

})

$('.header__sidebar--CloseIconbox').click(function () {

    $(".header__sidebar").toggleClass('active');

})









jQuery(document).ready(function ($) {
    var path = window.location.pathname.split('/').pop();

    if (path == '') {
        path = 'index.html';
    }

    var target = $('nav a[href="' + path + '"]');
    target.addClass('header__nav--active');
})