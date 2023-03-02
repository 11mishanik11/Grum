// Бургер 
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



// Слайдер клиентов
// Прогресс бар
const circle = document.querySelector('.mini-clients__circle');
const r = circle.r.baseVal.value;
const circumference = 2 * Math.PI * r;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}

setProgress(100);




// Инит слайдра
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