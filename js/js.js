$(document).ready(function() {
    $('.main-menu ul li').hover(function() {
        $(this).find('.submenu').stop(true, true).slideDown(300);
    }, function() {
        $(this).find('.submenu').stop(true, true).slideUp(300);
    });
});
