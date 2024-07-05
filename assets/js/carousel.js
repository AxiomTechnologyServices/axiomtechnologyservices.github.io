$(document).ready(function() {
    var owl = $('.testimonials-section .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    })
})

$(document).ready(function () {
    var owl = $('.case_studies_section .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        pagination: true,
        dots: true,
        autoplay:true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                dotsEach: 1,
                items: 1
            },
            576: {
                dotsEach: 1,
                items: 2
            },
            992: {
                dotsEach: 1,
                items: 3
            }
        }
    })
})

$(document).ready(function () {
    var owl = $('.security_testimonial_section .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        pagination: true,
        dots: true,
        autoplay:true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })
})

$(document).ready(function () {
    var owl = $('.secure_service-section .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        pagination: true,
        dots: true,
        autoplay:true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})

$(document).ready(function () {
    var owl = $('.secure_testimonial_section .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        pagination: true,
        dots: true,
        autoplay:true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })
})
