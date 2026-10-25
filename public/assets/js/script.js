
/* *********** TABLE OF CONTENTS ***************

 01 Open Sidebar JS
 02 Mobile Dropdown JS
 03 Sticky Header JS
 04 Data Background JS
 05 Blog Social JS
 06 Contact Info JS
 07 Fancybox Video Popup JS
 08 Hero Slider JS
 09 Camping Slider JS
 10 Completed Project Slider JS
 11 Testimonial Slider JS
 12 Blog Slider JS
 13 What We Do Slider JS
 14 Testimonial Slider JS
 15 Gallery Slider JS
 16 Service Slider JS
 17 Recent Course Slider JS
 18 AOS JS
 19 Counter JS
 20 Ajax Form JS

************************************************ */

(function ($) {
    'use strict';

    $(window).on('load', function () {
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({ overflow: 'visible' });
    });

    /*--------------------------------------------------------------
    01 Open Sidebar JS
    --------------------------------------------------------------*/
    $('[data-toggle="sidebar"]').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('overflow-hidden');
        $('.off-canvas-sidebar').toggleClass('active');
        $('.off-canvas-sidebar-body').toggleClass('active');
    });

    $('[data-close="sidebar"]').on('click', function (e) {
        e.preventDefault();
        $('body').removeClass('overflow-hidden');
        $('.off-canvas-sidebar').removeClass('active');
        $('.off-canvas-sidebar-body').removeClass('active');
    });

    $('[data-toggle="menubar"]').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('overflow-hidden');
        $('.off-canvas-menubar').toggleClass('active');
        $('.off-canvas-menubar-body').toggleClass('active');
    });

    $('[data-close="menubar"]').on('click', function (e) {
        e.preventDefault();
        $('body').removeClass('overflow-hidden');
        $('.off-canvas-menubar').removeClass('active');
        $('.off-canvas-menubar-body').removeClass('active');
    });

    /*--------------------------------------------------------------
    02 Mobile Dropdown JS
    --------------------------------------------------------------*/
    $('.off-canvas-menu .has-dropdown > a').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $(this).parent().children('.sub-menu').slideToggle();
        $(this).parent().siblings().children('.sub-menu').slideUp();
        $(this).parent().siblings().removeClass('active');
    });

    /*--------------------------------------------------------------
    03 Sticky Header JS
    --------------------------------------------------------------*/
    const win = $(window);
    const stickyId = $('.header-area');

    win.on('scroll', function () {
        const scroll = win.scrollTop();

        if (scroll < 245) {
            stickyId.removeClass('sticky-header');
        } else {
            stickyId.addClass('sticky-header');
        }
    });

    /*--------------------------------------------------------------
    04 Data Background JS
    --------------------------------------------------------------*/
    $('[data-background]').each(function () {
        const background = $(this).attr('data-background');

        if (background) {
            $(this).css('background-image', 'url("' + background + '")');
        }
    });

    $('[data-bg-color]').each(function () {
        const color = $(this).attr('data-bg-color');

        if (color) {
            $(this).css('background', color);
        }
    });

    /*--------------------------------------------------------------
    05 Blog Social JS
    --------------------------------------------------------------*/
    $('.total-shared').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });

    document.querySelectorAll('.blog-card').forEach(function (card) {
        card.addEventListener('mouseleave', function () {
            const shared = this.querySelector('.social-share');

            if (shared) {
                shared.classList.remove('active');
            }
        });
    });

    /*--------------------------------------------------------------
    06 Contact Info JS
    --------------------------------------------------------------*/
    $('.contact-info').on('mouseenter', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    /*--------------------------------------------------------------
    07 Fancybox Video Popup JS
    --------------------------------------------------------------*/
    // Bind only explicitly marked video links.
    // React photo galleries can continue using Fancybox.show().
    if (window.Fancybox) {
        const videoSelector = 'a[data-fancybox="video"][href]';

        if (document.querySelector(videoSelector)) {
            window.Fancybox.bind(videoSelector, {
                Html: {
                    youtube: {
                        controls: 0,
                        rel: 0,
                        fs: 0
                    }
                }
            });
        }
    }

    /*--------------------------------------------------------------
    08 Hero Slider Active JS
    --------------------------------------------------------------*/
    function animateSwiperElements(selector, init) {
        const animated = function () {
            $(selector + ' [data-animation]').each(function () {
                const anim = $(this).data('animation');
                const delay = $(this).data('delay');
                const duration = $(this).data('duration');

                $(this)
                    .removeClass('anim' + anim)
                    .addClass(anim + ' animate__animated')
                    .css({
                        webkitAnimationDelay: delay,
                        animationDelay: delay,
                        webkitAnimationDuration: duration,
                        animationDuration: duration
                    })
                    .one(
                        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                        function () {
                            $(this).removeClass(anim + ' animate__animated');
                        }
                    );
            });
        };

        animated();

        init.on('slideChange', function () {
            $(selector + ' [data-animation]').removeClass('animate__animated');
        });

        init.on('slideChange', animated);
    }

    if ($('.hero-slider-active-1').length > 0) {
        const sliderActive1 = '.hero-slider-active-1 .swiper';
        const sliderInit1 = new Swiper(sliderActive1, {
            slidesPerView: 1,
            paginationClickable: true,
            loop: true,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            autoplay: {
                delay: 5000,
                waitForTransition: true,
                disableOnInteraction: false
            },
            pagination: {
                el: '.hero-slider-pagination-1',
                clickable: true
            },
            navigation: {
                nextEl: '.hero-slider-button-next-1',
                prevEl: '.hero-slider-button-prev-1'
            },
            a11y: false
        });

        animateSwiperElements(sliderActive1, sliderInit1);
    }

    if ($('.hero-slider-active-2').length > 0) {
        const sliderActive2 = '.hero-slider-active-2 .swiper';
        const sliderInit2 = new Swiper(sliderActive2, {
            slidesPerView: 1,
            paginationClickable: true,
            loop: true,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            autoplay: {
                delay: 5000,
                waitForTransition: true,
                disableOnInteraction: false
            },
            pagination: {
                el: '.hero-slider-pagination-2',
                clickable: true
            },
            navigation: {
                nextEl: '.hero-slider-button-next-2',
                prevEl: '.hero-slider-button-prev-2'
            },
            a11y: false
        });

        animateSwiperElements(sliderActive2, sliderInit2);
    }

    if ($('.hero-slider-active-3').length > 0) {
        const sliderActive3 = '.hero-slider-active-3 .swiper';
        const sliderInit3 = new Swiper(sliderActive3, {
            slidesPerView: 1,
            paginationClickable: true,
            loop: true,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            autoplay: {
                delay: 5000,
                waitForTransition: true,
                disableOnInteraction: false
            },
            pagination: {
                el: '.hero-slider-pagination-3',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' +
                        (index + 1) + '</span>';
                }
            },
            navigation: {
                nextEl: '.hero-slider-button-next-3',
                prevEl: '.hero-slider-button-prev-3'
            },
            a11y: false
        });

        animateSwiperElements(sliderActive3, sliderInit3);
    }

    /*--------------------------------------------------------------
    09 Camping Slider Active JS
    --------------------------------------------------------------*/
    function initCampingSlider(selector, pagination, next, prev, extra = {}) {
        if (!$(selector + ' .swiper').length) return;

        return new Swiper(selector + ' .swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1,
            paginationClickable: true,
            centeredSlides: true,
            autoplay: { delay: 3000 },
            pagination: {
                el: pagination,
                clickable: true
            },
            navigation: {
                nextEl: next,
                prevEl: prev
            },
            a11y: false,
            breakpoints: {
                320: { slidesPerView: 1, centeredSlides: false },
                768: { slidesPerView: 2, centeredSlides: false },
                1024: { slidesPerView: 2, centeredSlides: false },
                1200: { slidesPerView: 3 }
            },
            ...extra
        });
    }

    initCampingSlider(
        '.camping-slider-active',
        '.camping-pagination',
        '.camping-button-next',
        '.camping-button-prev'
    );

    initCampingSlider(
        '.camping-slider-active-2',
        '.camping-pagination-2',
        '.camping-button-next-2',
        '.camping-button-prev-2'
    );

    initCampingSlider(
        '.camping-slider-active-3',
        '.camping-pagination-3',
        '.camping-button-next-3',
        '.camping-button-prev-3'
    );

    /*--------------------------------------------------------------
    10 Completed Project Slider Active JS
    --------------------------------------------------------------*/
    function initCompletedProjectSlider(selector, pagination, next, prev) {
        if (!$(selector + ' .swiper').length) return;

        return new Swiper(selector + ' .swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1,
            paginationClickable: true,
            centeredSlides: true,
            speed: 1000,
            autoplay: { delay: 3000 },
            pagination: {
                el: pagination,
                clickable: true
            },
            navigation: {
                nextEl: next,
                prevEl: prev
            },
            a11y: false,
            breakpoints: {
                320: { slidesPerView: 1.05 },
                768: { slidesPerView: 1.5 },
                1024: { slidesPerView: 1.5 },
                1200: { slidesPerView: 2.5 }
            }
        });
    }

    initCompletedProjectSlider(
        '.completed-project-slider-active',
        '.completed-project-pagination',
        '.completed-project-button-next',
        '.completed-project-button-prev'
    );

    initCompletedProjectSlider(
        '.completed-project-slider-active-2',
        '.completed-project-pagination-2',
        '.completed-project-button-next-2',
        '.completed-project-button-prev-2'
    );

    /*--------------------------------------------------------------
    11 Testimonial Slider Active JS
    --------------------------------------------------------------*/
    if ($('.testimonial-slider-active .swiper').length > 0) {
        new Swiper('.testimonial-slider-active .swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1.3,
            paginationClickable: true,
            centeredSlides: true,
            autoplay: { delay: 3000 },
            pagination: {
                el: '.testimonial-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.testimonial-button-next',
                prevEl: '.testimonial-button-prev'
            },
            a11y: false,
            effect: 'cards',
            grabCursor: true,
            cardsEffect: {
                slideShadows: false,
                perSlideOffset: 14,
                perSlideRotate: 0
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.07,
                    cardsEffect: { perSlideOffset: 8 }
                },
                768: { slidesPerView: 1.3 },
                1024: { slidesPerView: 1.3 },
                1200: { slidesPerView: 1.3 }
            }
        });
    }

    /*--------------------------------------------------------------
    12 Blog Slider Active JS
    --------------------------------------------------------------*/
    if ($('.blog-slider-active .swiper').length > 0) {
        new Swiper('.blog-slider-active .swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 2,
            paginationClickable: true,
            pagination: {
                el: '.blog-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.blog-button-next',
                prevEl: '.blog-button-prev'
            },
            a11y: false,
            breakpoints: {
                320: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1200: { slidesPerView: 2 },
                1440: { slidesPerView: 2.7 }
            }
        });
    }

    /*--------------------------------------------------------------
    13 What We Do Slider Active JS
    --------------------------------------------------------------*/
    if ($('.whatwedo-slider-active .swiper').length > 0) {
        new Swiper('.whatwedo-slider-active .swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 4,
            paginationClickable: true,
            autoplay: { delay: 3000 },
            pagination: {
                el: '.whatwedo-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.whatwedo-button-next',
                prevEl: '.whatwedo-button-prev'
            },
            a11y: false,
            breakpoints: {
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
                1440: { slidesPerView: 4.7 }
            }
        });
    }

    /*--------------------------------------------------------------
    14 Testimonial Slider Active JS
    --------------------------------------------------------------*/
    if ($('.testimonial-slider-active-2 .swiper').length > 0) {
        new Swiper('.testimonial-slider-active-2 .swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 3,
            paginationClickable: true,
            autoplay: { delay: 3000 },
            pagination: {
                el: '.testimonial-pagination-2',
                clickable: true
            },
            navigation: {
                nextEl: '.testimonial-button-next-2',
                prevEl: '.testimonial-button-prev-2'
            },
            a11y: false,
            breakpoints: {
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
                1200: { slidesPerView: 3 }
            }
        });
    }

    /*--------------------------------------------------------------
    15 Gallery Slider Active JS
    --------------------------------------------------------------*/
    if ($('.gallery-slider-active .swiper').length > 0) {
        new Swiper('.gallery-slider-active .swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1,
            paginationClickable: true,
            autoplay: { delay: 3000 },
            pagination: {
                el: '.gallery-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.gallery-button-next',
                prevEl: '.gallery-button-prev'
            },
            a11y: false
        });
    }

    /*--------------------------------------------------------------
    16 Service Slider Active JS
    --------------------------------------------------------------*/
    if ($('.service-slider-active .swiper').length > 0) {
        new Swiper('.service-slider-active .swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 3,
            paginationClickable: true,
            pagination: {
                el: '.service-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.service-button-next',
                prevEl: '.service-button-prev'
            },
            a11y: false,
            breakpoints: {
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
                1200: { slidesPerView: 3 }
            }
        });
    }

    /*--------------------------------------------------------------
    17 Recent Course Slider Active JS
    --------------------------------------------------------------*/
    if ($('.recent-course-slider-active .swiper').length > 0) {
        new Swiper('.recent-course-slider-active .swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1,
            paginationClickable: true,
            autoplay: { delay: 3000 },
            pagination: {
                el: '.recent-course-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.recent-course-button-next',
                prevEl: '.recent-course-button-prev'
            },
            a11y: false
        });
    }

    /*--------------------------------------------------------------
    18 AOS JS
    --------------------------------------------------------------*/
    if (window.AOS) {
        window.AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
            offset: 120,
            delay: 0,
            duration: 400,
            easing: 'ease',
            once: true,
            mirror: false,
            anchorPlacement: 'top-bottom'
        });
    }

    /*--------------------------------------------------------------
    19 Counter JS
    --------------------------------------------------------------*/
    if (window.PureCounter) {
        new PureCounter();
    }

    /*--------------------------------------------------------------
    20 Ajax Form JS
    --------------------------------------------------------------*/
    $(function () {
        const form = $('#contact-form');
        const formMessages = $('.form-message');

        form.on('submit', function (e) {
            e.preventDefault();

            const formData = form.serialize();

            $.ajax({
                type: 'POST',
                url: form.attr('action'),
                data: formData
            })
                .done(function (response) {
                    formMessages.removeClass('error').addClass('success');
                    formMessages.text(response);
                    $('#contact-form input, #contact-form textarea').val('');
                })
                .fail(function (data) {
                    formMessages.removeClass('success').addClass('error');

                    if (data.responseText !== '') {
                        formMessages.text(data.responseText);
                    } else {
                        formMessages.text(
                            'Oops! An error occurred and your message could not be sent.'
                        );
                    }
                });
        });
    });

})(jQuery);
