// MENU MOBILE
$(document).ready(function() {
    var mobileMenuToggle = $('.mobile-menu-toggle');
    var mobileMenu = $('.mobile-menu');
    var container = $('.container.full.row-menu');
    var fechaMenu = $('.mobile-menu-close');

    mobileMenuToggle.click(function() {
        container.css('marginRight', mobileMenu.css('right') === '0px' ? '0' : '300px');
        mobileMenu.css('right', mobileMenu.css('right') === '0px' ? '-300px' : '0');
    });

    function fechamenu() {
        if (mobileMenu.css('right') === '0px') {
            container.css('marginRight', '0');
            mobileMenu.css('right', '-300px');
        }
    }

    $(document).on('click', function(event) {
        var target = $(event.target);

        // Fecha o menu se o clique não estiver dentro do menu ou do botão de alternância
        if (!target.closest('.mobile-menu, .mobile-menu-toggle').length) {
            fechamenu();
        }
    });

    fechaMenu.click(fechamenu);

    mobileMenu.click(function(event) {
        event.stopPropagation();
    });
});


//Gerenciamento Centralizado de alt e title de Imagens
const brandName = "Shanti Yoga";
const images = document.querySelectorAll('img[data-brand]');
images.forEach(image => {
    image.setAttribute('alt', brandName);
    image.setAttribute('title', brandName);
});


// Galeria de imagens
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 40,
        autoplay: true,           
        autoplayTimeout: 3000,    
        responsive: {
            0: { items: 2 },      
            600: { items: 2 },    
            1000: { items: 4 }    
        }
    });
});


