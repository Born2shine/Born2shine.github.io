(function($) {
    'use strict';

    /*=======================================
         PRELOADER                     
    ======================================= */
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
        $(".slides__preload_wrapper").fadeOut(1500);
    });

    /* =======================================
        For slider
    =======================================*/
    $(".slider_home").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 9000, // Default is 5000
        smartSpeed: 1000, // Default is 250
        loop: true,
        navText: ["<i class='icon-glyph-205'></i>", "<i class='icon-glyph-204'></i>"],
        mouseDrag: true,
        touchDrag: true,
    });
 
 
    /* =======================================
           Progress Bar  
    =======================================*/ 

    function tdProgress(container){
        container.find('.progress_inner').each(function(i) {
            var progress        = $(this);
            var pValue          = parseInt(progress.data('value'), 10);
            var pColor          = progress.data('color');
            var pBarWrap        = progress.find('.bar');
            var pBar            = progress.find('.bar_in');
            pBar.css({width:pValue+'%', backgroundColor:pColor});
            setTimeout(function(){pBarWrap.addClass('open');},(i*300));
        });
    }

    $('.perker_progress').each(function() {
        var pWrap           = $(this);
        pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'}); 
    });


    /* =======================================
           Testimonial Section 
       =======================================*/
    $("#testimonial").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: true,
        smartSpeed: 1000, // Default is 250
        items: 2, //Set Testimonial items
        loop: true,
        margin: 30,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: false,
        dots: true,
        responsive: {
            1200: {
                items: 2
            },
            992: {
                items: 2
            },
            768: {
                items: 2
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    });
    /*=======================================
        Client Section  
    =======================================*/
    $("#client").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: true,
        smartSpeed: 2000, // Default is 250
        items: 5,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        dots: false,
        nav: false,
        navText: ["<i class='logo-nav-icon'></i>", "<i class='logo-nav-icon'></i>"],
        responsive: {
            1200: {
                items: 5
            },
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 3
            },
            280: {
                items: 2
            }
        }
    }); 
    /*=======================================
        slider Section
     ========================================== */
 
    $(".slider_home").on("translate.owl.carousel", function() {
        $(".single_slider h2, .single_slider h5, .single_slider p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".single_slider .slider_btn").removeClass("animated fadeInDown").css("opacity", "0");
    });

    $(".slider_home").on("translated.owl.carousel", function() {
        $(".single_slider h2, .single_slider h5, .single_slider p").addClass("animated fadeInUp").css("opacity", "1");
        $(".single_slider .slider_btn").addClass("animated fadeInDown").css("opacity", "1");
    });

  
    /* =======================================
            single Page Nav
     =======================================*/
 
    // The actual plugin
    $('.single-page-nav').singlePageNav({
        offset: $('.single-page-nav').outerHeight(),
        filter: ':not(.external)',
        updateHash: true,
    });

    /* =======================================
        For Menu
    =======================================*/
    $("#navigation").menumaker({
        title: "",
        format: "multitoggle"
    });

    /* =======================================
    		WOW ANIMATION
    ======================================= */
    var wow = new WOW({
        mobile: false
    });
    wow.init();


    /*=======================================
        Scroll Top
    =======================================*/
    $(".scrollup").on('click', function() {
        $('html,body').animate({
            'scrollTop': '0'
        }, 4000);
        return false;
    });

    $(".home").on('click', function() {
        $('html,body').animate({
            'scrollTop': '0'
        }, 1000);
        return false;
    });

    // $(".about-us").on('click', function() {
    //     $('html,body').animate({
    //         'scrollTop': '899'
    //     }, 2000);
    //     return false;
    // });
    // $(".our-service").on('click', function() {
    //     $('html,body').animate({
    //         'scrollTop': '1660'
    //     }, 2000);
    //     return false;
    // });


})(jQuery);