"use strict";

init();


function init() {
    handlePageLoaded();
    handleLinkClick();
}

function handlePageLoaded() {
    $(window).on("load", () => {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});
        setScrollBehavior();
    });
}

function setScrollBehavior() {
    $("html").niceScroll({
        cursorcolor:"#f74d65",
        scrollspeed :"100",
        cursorborder:"1px solid #f74d65",
        horizrailenabled: "false",
        cursorborderradius: "0px"
    });
}

function handleLinkClick() {
    $('a[href*="#"]:not([href="#"])').on("click", () => {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}