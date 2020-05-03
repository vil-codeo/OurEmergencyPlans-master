$(function () {
    $('.main-slider__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        fade: true,
        speed: 400,
        rows: 0,
        cssEase: 'linear',
        pauseOnHover: false,
    });

    $('.features__item-text').mCustomScrollbar({
        theme: "light-thin",
        setHeight: false,
        scrollButtons: false,
    });

    $('.banner__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        rows: 0,
        speed: 500,
        cssEase: 'linear',
    });

    $(".faq-page__box").not(":first").hide();
    $(".faq-page__tabs .faq-page__item").click(function () {
        $(".faq-page__tabs .faq-page__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".faq-page__box").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    $('.faq__read-more').click(function () {
        if ($(this).next().is(':hidden')) {
            $(this).next().slideDown('slow');
        } else {
            $(this).next().slideUp('slow');
        }
    });

    $('.header__hamburger').on('click', function(){
        $('.header__menu').addClass('active');
        $('body').addClass('shadow');
        $('.header').addClass('shadow');
    });
    $('.header__menu-closs').on('click', function(){
        $('.header__menu').removeClass('active');
        $('body').removeClass('shadow');
        $('.header').removeClass('shadow');
    });
    
    $.fn.scrollToTop = function () {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() != "0") {
            $(this).fadeIn("slow")
        }
        var scrollDiv = $(this);
        $(window).scroll(function () {
            if ($(window).scrollTop() == "0") {
                $(scrollDiv).fadeOut("slow")
            } else {
                $(scrollDiv).fadeIn("slow")
            }
        });
        $(this).click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow")
        })
    };
    $(function () { $("#toTop").scrollToTop(); });
    new WOW().init({
        offset: 50, 
    });

});