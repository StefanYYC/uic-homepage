var width = $(window).width();
$(window).resize(function () {
    if (width == 768) {
        $('nav').addClass('scrolled');
    }
});