(function($) {
    "use strict";

    $(window).on('load', function() {
        $(".preloader").fadeOut("slow", function() {
            $(".preloader-left").addClass("slide-left");
        });

        $('#lionhero').owlCarousel({
            animateOut: 'fadeOut',
            nav: true,
            navText: [
                '<i class="ion-ios-arrow-thin-left"></i>',
                '<i class="ion-ios-arrow-thin-right"></i>'
            ],
            items: 1,
            navSpeed: 400,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
        });

        $('#liontextslider').owlCarousel({
            nav: false,
            items: 1,
            navSpeed: 400,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
        });

        $('#liontestimonial').owlCarousel({
            nav: true,
            navText: [
                '<i class="ion-ios-arrow-thin-left"></i>',
                '<i class="ion-ios-arrow-thin-right"></i>'
            ],
            items: 1,
            navSpeed: 400,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
        });
    });

    $('.portfolio-block, .menu-item').on('click', function() {

        //Portfolio masonry
        var $container = $('#portfolio-container');
        $container.isotope({
            masonry: {
                columnWidth: '.portfolio-item'
            },
            itemSelector: '.portfolio-item'
        });
        $('#filters').on('click', 'li', function() {
            $('#filters li').removeClass('active');
            $(this).addClass('active');
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
        });

    });

    // Typing Animation (Typed.js)
    $('#element').typed({
        strings: ["UX, UI Designer", "Web App Developer", "Social Animal!"],
        typeSpeed: -50,
        loop: true,
        startDelay: 500,
        backDelay: 3000,
        contentType: 'html',
    });

    //Video background
    var myPlayer;
    $(function() {
        myPlayer = $("#bgndVideo").YTPlayer({ useOnMobile: true, mobileFallbackImage: "assets/mask-4.png" });

    });

    //Portfolio Modal
    $(document).on('click', '.open-project', function() {
        var projectUrl = $(this).attr("href");
        $('.inline-menu-container').removeClass('showx');
        $('.sidebar-menu').addClass('hidex');
        $('.content-blocks.pop').addClass('showx');
        $('.content-blocks.pop section').load(projectUrl + ' .load-data > *');
        return false;
    });

    //Blog post Modal
    $('.open-post').on('click', function() {
        var postUrl = $(this).attr("href");
        $('.inline-menu-container').removeClass('showx');
        $('.sidebar-menu').addClass('hidex');
        $('.content-blocks.pop').addClass('showx');
        $('.content-blocks.pop section').load(postUrl);
        return false;
    });

    //On Click Open Menu Items
    $('.menu-block, .menu-item').on('click', function() {
        $('.name-block').addClass('reverse');
        $('.name-block-container').addClass('reverse');
        $('.menu-blocks').addClass('hidex');
        $('.inline-menu-container').addClass('showx');
        $('.inline-menu-container.style2').addClass('dark');
    });
    //On Click Open About/Resume Block
    $('.about-block, .menu-item.about').on('click', function() {
        $('.content-blocks').removeClass('showx');
        $('.content-blocks.about').addClass('showx');
        $('.menu-item').removeClass('active');
        $('.menu-item.about').addClass('active');
    });
    //On Click Open Portfolio Block
    $('.portfolio-block, .menu-item.portfolio').on('click', function() {
        $('.content-blocks').removeClass('showx');
        $('.content-blocks.portfolio').addClass('showx');
        $('.menu-item').removeClass('active');
        $('.menu-item.portfolio').addClass('active');
    });
    //On Click Open Blog Block
    $('.blog-block, .menu-item.blog').on('click', function() {
        $('.content-blocks').removeClass('showx');
        $('.content-blocks.blog').addClass('showx');
        $('.menu-item').removeClass('active');
        $('.menu-item.blog').addClass('active');
    });
    //On Click Open Contact Block
    $('.contact-block, .menu-item.contact').on('click', function() {
        $('.content-blocks').removeClass('showx');
        $('.content-blocks.contact').addClass('showx');
        $('.menu-item').removeClass('active');
        $('.menu-item.contact').addClass('active');
    });

    //On Click Close Blocks
    $('#close').on('click', function() {
        $('.name-block').removeClass('reverse');
        $('.name-block-container').removeClass('reverse');
        $('.content-blocks').removeClass('showx');
        $('.menu-blocks').removeClass('hidex');
        $('.inline-menu-container').removeClass('showx');
        $('.menu-item').removeClass('active');
    });
    //On Click Close Blog Post And Project Details
    $('#close-pop').on('click', function() {
        $('.content-blocks.pop').removeClass('showx');
        $('.sidebar-menu').removeClass('hidex');
        $('.inline-menu-container').addClass('showx');
        $('.content-blocks.pop section').empty();
    });

    $('.menu-block, .menu-item, #close').on('click', function() {
        $('.content-blocks').animate({ scrollTop: 0 }, 800);
    });

    //Function for 'Index-Menu2.html'
    $('#home').on('click', function() {
        $('.content-blocks').removeClass('showx');
        $('.menu-item').removeClass('active');
        $(this).addClass('active');
        $('.inline-menu-container.style2').removeClass('dark');
    });

    //Custom Cursor
    if (('.cursor').length > 0) {
        var $circleCursor = $('.cursor');

        function moveCursor(e) {
            var t = e.clientX + "px",
                n = e.clientY + "px";
            TweenMax.to($circleCursor, .2, {
                left: t,
                top: n,
                ease: 'Power1.easeOut'
            });
        }
        $(window).on('mousemove', moveCursor);

        function zoomCursor() {
            TweenMax.to($circleCursor, .2, {
                borderWidth: '1px',
                opacity: 0.1,
                scale: 2,
                ease: 'Power1.easeOut'
            });
        }

        $(document).on('mouseenter', 'a, .zoom-cursor, .menu-item', zoomCursor);

        function noCursor() {
            TweenMax.to($circleCursor, .2, {
                opacity: 0,
                ease: 'Power1.easeOut'
            });
        }
        $(document).on('mouseenter', 'button, .btn', noCursor);

        function defaultCursor() {
            TweenLite.to($circleCursor, .1, {
                borderWidth: '2px',
                opacity: 0.5,
                scale: 1,
                ease: 'Power1.easeOut'
            });
        }

        $(document).on('mouseleave', 'a, .zoom-cursor, .menu-item, button, .btn', defaultCursor);

        $(document).ready(function() {

            $('.cursor').css('transform', 'scale(1)');
        });
    }

    //Leaflet Map

    var mymap = L.map('map').setView([-33.8386865,151.0493946], 14);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: '',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);

    var icon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div class='map-marker'></div>",
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

    L.marker([-33.8386865,151.0493946], { icon: icon }).addTo(mymap);

})(jQuery);