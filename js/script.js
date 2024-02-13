// Teste pagina sobre

function sobreClickSlide(){
    sobre_slide_image_1.classList.toggle('sobre-slide-movimento')
    sobre_Seta_Slide.classList.toggle('slide-ativo')
}

const sobre_slide_image_1 = document.querySelector('.sobre-cuidados-image')

const sobre_Seta_Slide = document.querySelector('.sobre-cuidados svg')

sobre_Seta_Slide.addEventListener('click', sobreClickSlide)