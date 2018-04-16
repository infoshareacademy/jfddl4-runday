$(document).ready(function() {
        $(".home").click(function () {
            var offset = 0; //Offset of 00px
            $('html, body').animate({
                scrollTop: $("#go-top").offset().top + offset
            }, 2000);
        });

    $(".functions").click(function () {
        var offset = -75; //Offset of -75px
        $('html, body').animate({
            scrollTop: $("#features").offset().top + offset
        }, 2000);
    });

    $(".nav-entry").click(function () {
        var offset = -75; //Offset of -75px
        $('html, body').animate({
            scrollTop: $("#form-entry").offset().top + offset
        }, 2000);
    });

    $(".authors").click(function () {
        var offset = -75; //Offset of -75px
        $('html, body').animate({
            scrollTop: $("#authors").offset().top + offset
        }, 2000);
    });

    $(".go_top").click(function () {
        var offset = 0; //Offset of 00px
        $('html, body').animate({
            scrollTop: $("#go_top").offset().top + offset
        }, 2000);
    });


});