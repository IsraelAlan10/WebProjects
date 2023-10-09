// Funciones de Javascript para el funcionamiento de la pagina web

document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp() {
    if (document.querySelector('.inicio')) {
        navegacionFijaInicio();
    } else {
        navegacionFija();
    }
    
}

function navegacionFijaInicio() {
    const bar = document.querySelector( 'header');
    const main = document.querySelector('.container-menu');
    const body = document.querySelector('.body');
    const parent = document.querySelector('.container');
    const encabezado = document.querySelector('.header-inicio');

    window.addEventListener('scroll', function() {
        if (main.getBoundingClientRect().top < 0) {
            bar.classList.remove('inicio');
            bar.classList.add('header');
            bar.classList.add('fijo');
            body.classList.add('body-scroll-inicio');
            encabezado.remove();
        } else {
            bar.classList.remove('fijo');
            body.classList.remove('body-scroll-inicio');
            bar.classList.add('inicio');
        }
    });

    // console.log('Hola');
}

//Solo para las paginas 
function navegacionFija() {
    const bar = document.querySelector( 'header');
    const main = document.querySelector('.container-menu');
    const body = document.querySelector('.body');
    const parent = document.querySelector('.container');
    const encabezado = document.querySelector('.header-inicio');

    window.addEventListener('scroll', function() {
        if (main.getBoundingClientRect().top < 0) {
            bar.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            bar.classList.remove('fijo');
            body.classList.remove('body-scroll');

        }
    });

    // console.log('Hola');
}
