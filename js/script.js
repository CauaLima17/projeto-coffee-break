// Função de slide (Página Sobre)

const sobre_slide_image_1 = document.querySelector('.sobre-cuidados-image');

const sobre_Seta_Slide = document.querySelector('.sobre-cuidados svg');

function sobreClickSlide(){
    sobre_slide_image_1.classList.toggle('sobre-slide-movimento');
    sobre_Seta_Slide.classList.toggle('slide-ativo');
}

if (sobre_Seta_Slide) {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        sobre_Seta_Slide.addEventListener('click', sobreClickSlide);
    }
}


// Função de filtro (Página menu)

const botaoFiltrarMenu = document.querySelector('.menu-header button');

const filtrosDoMenu = document.querySelector('.menu-header-filtros');

function abrirFiltrosMenu () {
    filtrosDoMenu.classList.toggle('display-block');
}

if (botaoFiltrarMenu) {
    botaoFiltrarMenu.addEventListener('click', abrirFiltrosMenu);
}


//