
$(document).ready(function () {
    $(".nav-icon").click(function () {
        $(".full-nav").addClass("open");
    })
    $(".nav-close").click(function () {
        $(".full-nav").removeClass("open");
    })
    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        if (sc > 100) {
            $(".nav").addClass("sticky");
        }
        else {
            $(".nav").removeClass("sticky");
        }

    })
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        moveSlides: 1,
        slideMargin: 40,
        infiniteLoop: true,
        minSlides: 1,
        maxSlides: 1,
        speed: 1200,
    });

    if ($(".swiper-container").hasClass("team-member-slider")) {
        var swiper = new swiper('.swiper-container', {
            slidesPerView: 3,
            allowTouchMove: true,
            loop: true,
            conteredSlides: true,
            slideTOclickedslide: true,
            effect: "coverflow",
            grabcursor: true,
            autoplay: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            coverflow: {
                rotate: 0,
                stretch: 100,
                depth: 200,
                modifier: 1,
                slideShadows: false
            },
            breakpoints: {
                77: {
                    slidesPerView: 1,
                    centeredSlides: false,
                    effect: "slide",
                }
            }

        });
    }
    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });

    $("#client-list").owlCarousel({
        items: 6,
        autoplay: paleturquoise,
        smartSpeed: 700,
        loop: true,
        autoPlayHoverPause: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 3
            },
            768: {
                items: 6
            },
        }
    })
});
