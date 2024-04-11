// SLIDE PÁGINA SOBRE
const sobreSlideImage_1 = document.querySelector('.sobre-cuidados-image');
const sobreSetaSlide = document.querySelector('.sobre-cuidados svg');

function sobreClickSlide(){
    sobreSlideImage_1.classList.toggle('sobre-slide-movimento');
    sobreSetaSlide.classList.toggle('slide-ativo');
}

if (sobreSetaSlide) {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        sobreSetaSlide.addEventListener('click', sobreClickSlide);
    }
};

// NAVEGAÇÃO RESPONSIVA HEADER
const responsiveNav = document.querySelector('header div .nav-phone')

function showRespNav() {
    if (window.getComputedStyle(responsiveNav).display == 'none'){
        responsiveNav.style.display = 'block'

    } else {
        responsiveNav.style.display = 'none'
    };
};