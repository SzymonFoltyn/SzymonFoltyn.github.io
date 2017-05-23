$(document).on('click', 'nav li a', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);

    $('nav li a').removeClass('active');
    $(this).addClass('active');
});

$(function () {
    $('.ikon').hover(function () {
        $('.hover').show();
    }, function () {
        $('.hover').hide();
    });
});

$(function() {
    var moveLeft = 20;
    var moveDown = 10;

    $('.ikon-container img').hover(function(e) {
        $('.hover').show()
            .css('top', e.pageY + moveDown)
            .css('left', e.pageX + moveLeft)
            .appendTo('body');
    }, function() {
        $('.hover').hide();
    });

    $('.ikon-container img').mousemove(function(e) {
        $('.hover').css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
    });
});
