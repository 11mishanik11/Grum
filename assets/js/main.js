// Бургер 
(function() {
    let burgerBtn = document.querySelector('#burger-btn')
    let headerMenu = document.querySelector('#header-menu')
    
    burgerBtn.onclick = function() {
        if(headerMenu.classList.contains('open')) {
            menuHide()
        }
        else {
            menuShow()
        }
    }
    
    document.onclick = function(e) {
        if(!(e.composedPath().includes(burgerBtn) || e.composedPath().includes(headerMenu))) {
            menuHide()
        } 
    }
    
    function menuShow() {
        headerMenu.classList.add('open')
        burgerBtn.classList.add('open')
    
        burgerBtn.setAttribute('aria-expanded', 'true')
        headerMenu.setAttribute('aria-hidden', 'false')
    }
    
    function menuHide() {
        headerMenu.classList.remove('open')
        burgerBtn.classList.remove('open')
    
        burgerBtn.setAttribute('aria-expanded', 'false')
        headerMenu.setAttribute('aria-hidden', 'true')
    }
})()



// Превью слайдера клиентов
const clientsThumb = new Swiper(".thumb-clients", {

    direction: 'vertical',

    navigation: {
        nextEl: '.thumb-clients__next',
        prevEl: '.thumb-clients__prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          direction: 'horizontal',
        },
        360: {
            slidesPerView: 3,
            direction: 'horizontal',
          },
        992: {
            slidesPerView: 4,
            direction: 'horizontal',
        },
        1140: {
            slidesPerView: 4,
            direction: 'vertical',
        }
    }
})

// Слайдер клиентов
const clientsCarousel = new Swiper(".carousel-clients", {
    slidesPerView: 1,
    effect: 'fade',

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    thumbs: {
        swiper: clientsThumb,
    },
})


// Инит слайдра сертификатов
const diplomasSwiper = new Swiper(".diplomas__swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
})