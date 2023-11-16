document.addEventListener('DOMContentLoaded', () => {
    elementos();
});

function elementos() {

    //Primer tarea
    console.log('hola mundo');
    const articulos = document.querySelectorAll('h3').length;
    console.log('Numero de articulos:', articulos);

    //Segunda tarea
    const lineas = document.querySelectorAll('hr').length;
    console.log('Numero de lineas: ', lineas);

    //Tercer tarea
    const listas = document.querySelectorAll('li').length;
    console.log('Numero de listas: ', listas);

    //Cuarta Tarea
    const listaElementos = document.querySelectorAll('#elemen li').length;
    console.log('Numero de lista en Lista elementos: ', listaElementos);
    
    const listaElementosa = document.querySelector('#elemen li a').href;
    console.log('Codigo de enlace: ',listaElementosa);

    //Quinta Tarea

    const listaMenu = document.querySelectorAll('#menu li').length;
    mostrarDatos('listas en el menu', listaMenu);

    const numEnlaces = document.querySelectorAll('#menu ul li a').length;
    mostrarDatos('enlaces en menu', numEnlaces);

    const enlaces = document.querySelector('#menu ul li a').href;
    console.log('Enlace:', enlaces);

    //Sexta tarea

    const imagenes = document.querySelectorAll('img').length;
    mostrarDatos('imagenes', imagenes);

    //Septima Tarea

    const imagenesSexta = document.querySelector('.imgAr2 img');
    console.log('La primera imagen es', imagenesSexta.alt, 'y su archivo es', imagenesSexta.src);

    const imagenesSextaTotal = document.querySelectorAll('.imgAr2').length;
    mostrarDatos('imagenes en el articulo 2', imagenesSextaTotal);

    //Octava Tarea

    const imagenesOctava = document.querySelectorAll('#imgAr3 img').length;
    mostrarDatos('imagenes en el articulo 3', imagenesOctava);

    const imagenDos = document.querySelector('#imgAr3').getElementsByTagName('img')[1];
    console.log('El enlace de la imagen dos es',imagenDos.src);

    const imagenCuatro = document.querySelector('#imgAr3').getElementsByTagName('img')[3];
    console.log('El enlace de la imagen cuatro es',imagenCuatro.src);

    //Novena Tarea

    const enlacesAll = document.querySelectorAll('a');
    mostrarDatos('enlaces total', enlacesAll.length);

    //Decima tarea

    const enlacesArt = document.querySelectorAll('#text1 a');
    mostrarDatos('enlaces total en el parrafo 1', enlacesArt.length);
}

function mostrarDatos(dato, res){
    console.log('El numero de', dato, 'es', res);
}