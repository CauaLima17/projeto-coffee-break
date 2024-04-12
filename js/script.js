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

// NAVEGAÇÃO PELO MENU (PESQUISA)
const searchBox = document.getElementById('search-box');

searchBox.addEventListener('input', () => {
    let userSearch = searchBox.value;
    let granParent;
    const menuElementNames = document.querySelectorAll('.menu-item .menu-item-nome');

    menuElementNames.forEach((element) => {
        granParent = element.parentElement.parentElement;

        if (!element.textContent.toLowerCase().includes(userSearch.toLowerCase())){
            granParent.style.display = 'none';
        } else {
            granParent.style.display = 'grid';
        };
    });
});

// MOSTRANDO ELEMENTO ESCOLHIDO
const menuItemButtons = document.querySelectorAll('.menu-item-conteudo button');
const activeElement = document.getElementById('item-ativo');

menuItemButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let granParent = button.parentElement.parentElement;
        let productName = granParent.querySelector('.menu-item-nome').textContent;
        let productDescription = granParent.querySelector('.menu-item-descricao').textContent;
        let productPhoto = granParent.querySelector('.menu-item-image picture');

        let activeElement__ProductName = activeElement.querySelector('.item-ativo-nome');
        activeElement__ProductName.textContent = productName;

        let activeElement__ProductDescription = activeElement.querySelector('.item-ativo-descricao');
        activeElement__ProductDescription.textContent = productDescription;

        let activeElement__ProductPhoto = activeElement.querySelector('.item-ativo-image');
        activeElement__ProductPhoto.innerHTML = productPhoto.innerHTML;

        activeElement.style.display = 'block';
    });
});

function exitActiveElement(){
    activeElement.style.display = 'none'
};