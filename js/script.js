// $(document).ready(function () {
//     $(".carousel").swipe({
//         swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
//             if (direction == 'left') $(this).carousel('next');
//             if (direction == 'right') $(this).carousel('prev');
//         },
//         allowPageScroll:"vertical"
//     });
// });
const navLangButton = document.querySelector('.nav-lang');

//     mobileMenu = document.querySelector('.mobile-menu');


// function hideNavEl() {
//     navBar.classList.add('hide-element');
//     mobileMenu.classList.remove('hide-element');
// }
// function showNavEl() {
//     navBar.classList.remove('hide-element');
//     mobileMenu.classList.add('hide-element');
// }

$(window).on('load resize', function () {
    if ($(this).width() <= 991) {
        $('.nav-lang').attr('class', 'nav-item nav-lang');
        $('.btn-lang').attr('class', 'nav-link btn-lang');
    } 
    if ($(this).width() >= 992) {
        $('.nav-lang').attr('class', 'd-flex pl-3 nav-lang pr-3 nav-item border-sides align-items-center');
        $('.btn-lang').attr('class', 'btn btn-lang btn-outline-info btn-sm');
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
        dots: false,
        autoWidth: true,
        responsive:{
            0:{
                items:2,
                margin: 8,
                loop: false
            },
            500: {
                items:3,
                loop: false,
                margin: 15,
            },
            1000: {
                items:3,
                loop: true,
                margin: 20,
            },
            1200: {
                items:4,
                loop: true,
                margin: 21,
            }
        }
    });
});