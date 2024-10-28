# MENU MOBILE HTML, CSS e Javascript

### HTML
```HTML
<div class="container-fluid w-100 menu-mobile-container">
        <div class="container">
            <div class="row align-items-center">
                <!-- Logo -->
                <div class="col-6 d-flex justify-content-start align-items-center">
                    <a href="#inicio">
                        <img class="menu-logo" src="src/img/svg/logo-yoga.svg" alt="Logo Yoga">
                    </a>
                </div>
    
                <!-- Menu Toggle -->
                <div class="col-6 d-flex justify-content-end align-items-center">
                    <button class="mobile-menu-toggle"><img src="src/img/svg/menu.svg" alt="Menu Toggle"></button>
                    <div class="mobile-menu">
                        <a class="mobile-menu-close">➜</a>
                        <h3 class="text-center mt-60">Menu</h3>
                        <ul class="menu-mobile-list">
                            <li><a href="#">Início</a></li>
                            <li><a href="#">Sobre Nós</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

```

---

### CSS
```CSS
/* MENU MOBILE */
.mobile-menu { position: fixed; top: 0; right: -300px; width: 300px; height: 100%; background-color: #AEA17E; box-shadow: -1px 0 10px rgba(0, 0, 0, 0.1);  transition: right 0.3s ease; z-index: 66; }
.menu-mobile-container { padding: 10px; position: sticky; top:0; width: 100%; background-color: #fff; z-index: 444; border-bottom: 1px solid rgba(0, 0, 0, 0.1); display: none; }
.menu-logo { width: 100%; max-width: 120px;}
.mobile-menu-close { position: absolute; top: 10px; right: 250px; cursor: pointer; padding: 10px 10px;  color: #181818; border-right: 1px solid #3D3A41 ;}
.mobile-menu-toggle { border:0; background: transparent; }
.mobile-menu-toggle img{ width: 40px; background-color: #e9e9e97e; border-radius: 5px; }
.menu-mobile-list { list-style: none; padding: 0; margin-top: 50px;}
.menu-mobile-list li a { font-weight: 400; font-size: 1.4rem; text-transform: uppercase; color: #181818; display: block; padding: 10px 20px; border-bottom: 1px solid #fff; }
```

**Não esquecer de colocar as classes no media queries e no HTML**
```CSS

@media (min-width: 301px) and (max-width: 380px) {
    /* Estilos para dispositivos pequenos */
    .menu-desktop { display: none; }
    .menu-mobile-container { display: block; }
}
```

---
### Javascript

```JS
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
```