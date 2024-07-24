$(document).ready(function() {
    $('.menu-button').on('click', function() {
        $('.menu-overlay').toggleClass('d-none');
    });

    $('.menu-overlay').on('click', function() {
        $(this).toggleClass('d-none');
    });

    $('.btn').on('mousedown', function() {
        $(this).addClass('animate__bounceIn');
    });

    $('.btn').on('mouseup', function() {
        $(this).removeClass('animate__bounceIn');
    });
});