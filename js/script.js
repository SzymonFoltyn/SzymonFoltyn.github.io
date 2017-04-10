$(document).on('click', 'a', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    
    $('#nav li a').removeClass('active');
        $(this).addClass('active');
});