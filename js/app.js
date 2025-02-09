$(document).ready(function(){

    //Hero Silde
        $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        responsive:{
            0:{
                nav: false,
            },
            700:{
                nav: true,
            }
        
        }
    });

        //Hero Silde
        $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav: true,
        dots: true,
        smartSpeed: 1000,
        margin: 24,
        responsive:{
            0:{
                items: 1,
                nav: false,
                margin: 0,
            },
            700:{
                items: 2,
            },
            1140: {
                items: 2,
                center: true,
            }
        
        }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 10,
        nav: false,
        items: 1,
        smartSpeed: 600,
    })
});