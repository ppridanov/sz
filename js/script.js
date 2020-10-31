// $(document).ready(function () {
//     $(".carousel").swipe({
//         swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
//             if (direction == 'left') $(this).carousel('next');
//             if (direction == 'right') $(this).carousel('prev');
//         },
//         allowPageScroll:"vertical"
//     });
// });
const navBar = document.querySelector('.navbar-nav'),
    mobileMenu = document.querySelector('.mobile-menu');


function hideNavEl() {
    navBar.classList.add('hide-element');
    mobileMenu.classList.remove('hide-element');
}
function showNavEl() {
    navBar.classList.remove('hide-element');
    mobileMenu.classList.add('hide-element');
}

$(window).on('load resize', function () {
    if ($(this).width() <= 1000) {
        hideNavEl();
    } 
    if ($(this).width() >= 1001) {
        showNavEl();
    }
})
$(document).ready(function () {
    $(".slider").owlCarousel({
        items: 1,
        dots: true,
        loop: true
    });
    $(".slider-card").owlCarousel({
        items: 4,
        loop: true,
        margin: 8,
        responsive:{
            0:{
                items:2
            },
            500: {
                items:3,
                loop: false
            },
            1000: {
                items:3,
                loop: false
            },
            1200: {
                items:4,
                loop: false
            }
        }
    });
});