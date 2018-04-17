$(function () {
    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();
        $('#whiteoverlay').css('opacity',currentScrollTop/$('#whiteoverlay').height());

    });
});