$(document).ready(function () {
    // Click event for navigation
    $('nav a').click(function (event) {
        event.preventDefault();
        $('nav a').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    // Scroll event for setting active section
    $(window).scroll(function () {
        var currentPosition = $(this).scrollTop();
        $('section').each(function () {
            var top = $(this).offset().top - 300,  // Adjust this value according to the height of your header
                bottom = top + $(this).outerHeight();

            if (currentPosition >= top && currentPosition <= bottom) {
                $('nav a').removeClass('active');
                $('nav a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });
});