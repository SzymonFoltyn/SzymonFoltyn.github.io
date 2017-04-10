$(document).on('click', '#nav li a', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    $('#nav li a').removeClass('active');
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

    $('.ikon').hover(function(e) {
        $('.hover').show()
            .css('top', e.pageY + moveDown)
            .css('left', e.pageX + moveLeft)
            .appendTo('body');
    }, function() {
        $('.hover').hide();
    });

    $('.ikon').mousemove(function(e) {
        $(".hover").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
    });
});