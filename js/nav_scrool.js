$(document).ready(function() {
        $(".home").click(function () {
            var offset = 0; //Offset of 00px
            $('html, body').animate({
                scrollTop: $("#go_top").offset().top + offset
            }, 2000);
        });

    $(".functions").click(function () {
        var offset = 0; //Offset of -75px
        $('html, body').animate({
            scrollTop: $("#features").offset().top + offset
        }, 2000);
    });

    $(".nav-entry").click(function () {
        var offset = 0; //Offset of -75px
        $('html, body').animate({
            scrollTop: $("#form-entry").offset().top + offset
        }, 2000);
    });

    $(".authors").click(function () {
        var offset = 0; //Offset of -75px
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

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav-link-home, .nav-link-name, .nav-link-entry, .nav-link-authors').addClass('outOfTop_');
        $('.nav-h1 ').css({fontSize: '1em'})
        $('.logo-main').css({width: '1.5em'})
        $('.navbar').css({height: '70px'})


    } else {
        $('.nav-link-home, .nav-link-name, .nav-link-entry, .nav-link-authors').removeClass('outOfTop_');
        $('.nav-h1 ').css({fontSize: '2rem'})
        $('.logo-main').css({width: '2em'})
        $('.navbar').css({height: 'auto'})
    }
});
