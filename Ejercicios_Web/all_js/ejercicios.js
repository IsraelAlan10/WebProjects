document.addEventListener('DOMContentLoaded', function() {
    if(document.querySelector('#ej1')) {
        calcularRFC();
    }
    if (document.querySelector('#ej2')) {
        calcularIMC();
    }
    if (document.querySelector('#ej3')) {
        calcularSueldo();
    }
    if(document.querySelector('#ej4')) {
        convertirUnidades();
    }
    if(document.querySelector('#ej5')) {
        agregarElementos();
        calcularCalificaciones();
        recargar();
    }
    if(document.querySelector('#ej6')) {
        triangular();
        // recargar();
    }
    if(document.querySelector('#ej7')) {
        triangular2();
        // recargar();
    }
    if(document.querySelector("#ej8")) {
        arbol();
        recargar();
    }
});

function calcularRFC() {
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', e => {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const paterno = document.querySelector('#paterno').value;
        const materno = document.querySelector('#materno').value;
        const date = document.querySelector('#nacimiento').value;
        
        var resultado = (paterno.substr(0, 2)) + (materno.substr(0,1)) + (nombre.substr(0,1)) + (date.substr(2,2)) + (date.substr(5,2)) + (date.substr(8,2));
        
        var rfc = resultado.toUpperCase();

        const respuesta = document.getElementById('resultado');
        respuesta.textContent = `Tu RFC es ${rfc}`;
    } );
}

function calcularIMC() {
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', e => {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const peso = document.querySelector('#peso').value;
        const altura = document.querySelector('#altura').value;
        
        var imc = peso / Math.pow(altura, 2);

        var resultado = imc.toFixed(3);

        // console.log(imc.toFixed(3)); 

        const respuesta = document.getElementById('resultado');

        if (25 <= resultado <= 22) {
            respuesta.textContent = `Hola ${nombre} tu IMC es de ${resultado}, tu peso es bueno y se encuentra dentro de lo correcto, sigue así.`;
        }
        if (resultado < 22) {
            respuesta.textContent = `Hola ${nombre} tu IMC es de ${resultado}, tu peso es bajo, te recomiendo comer más y el ejercicio.`;
        }
        if(imc > 25) {
            respuesta.textContent = `Hola ${nombre} tu IMC es de ${resultado}, tu peso es alto te recomiendo más ejercicio y una dieta para controlarlo.`;
        }
    } );
}

function calcularSueldo() {
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', e => {
        e.preventDefault();

        const pago = document.querySelector('#pago').value;
        const hora = document.querySelector('#hora').value;
        
        var pagoSemanal;
        var extra;
        var pagoExtra;
        // var extraTriple;


        if(hora < 40) {
            pagoSemanal = hora * pago;
            // console.log(pagoSemanal);
        }else if(41 <= hora <= 47 ) {
            extra = hora - 40;
            pagoExtra = (pago * 2) * extra;
            pagoSemanal = (40 * pago) + pagoExtra;
            // console.log("SegundoIf");
        } else if(hora >= 48) {
            extra = hora - 47;
            pagoExtra = ((pago * 2) * 7) + ((pago * 3) * extra);
            pagoSemanal = (40 * pago) + pagoExtra;
        }

        const resultado = document.getElementById('resultado');
        resultado.textContent = `Tu pago por tus ${hora} horas trabajadas es de ${pagoSemanal}`;

    } );
}

function convertirUnidades() {
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', e => {
        e.preventDefault();



        var valor = document.getElementById("cantidad").value;
        var unidad = document.getElementById("unidad").value;
        var unidad2 = document.getElementById("unidad1").value;

        var resultado;
        var conversion = "";
        var conversion2 = "";

        //Metro a otras unidades
        if(unidad == 1 && unidad2 == 2) {
            resultado = valor * 100;
            conversion = "metros";
            conversion2 = "centimetros";
            
        } else if(unidad == 1 && unidad2 == 1) {
            resultado = valor;            ;
            conversion = "metros";
            conversion2 = "metros";
        } else if(unidad == 1 && unidad2 == 3) {
            resultado = valor * 3.281;            ;
            conversion = "metros";
            conversion2 = "pies";
        }else if(unidad == 1 && unidad2 == 4) {
            resultado = valor * 1.094;
            conversion = "metros";
            conversion2 = "yardas";
        } 
        //Centimetro a otras unidades
        else if (unidad == 2 && unidad2 == 1) {
            resultado = valor / 100;
            conversion = "centimetros";
            conversion2 = "metros";
        }  else if (unidad == 2 && unidad2 == 2) {
            resultado = valor;
            conversion = "centimetros";
            conversion2 = "centimetros";
            console.log(resultado);
        } else if(unidad == 2 && unidad2 ==3) {
            resultado = valor / 30.48;
            conversion = "centimetros";
            conversion2 = "pies";
        } else if(unidad == 2 && unidad2 == 4) {
            resultado = valor / 91.44;
            conversion = "centimetros";
            conversion2 = "yardas";
        }
        //Pie a otras unidades 
        else if (unidad == 3 && unidad2 == 1) {
            resultado = valor / 3.281;
            conversion = "pies";
            conversion2 = "metros";
        } else if(unidad == 3 && unidad2 ==2) {
            resultado = valor * 30.48;
            conversion = "pies";
            conversion2 = "centimetros";
        }  else if(unidad == 3 && unidad2 ==3) {
            resultado = valor;
            conversion = "pies";
            conversion2 = "pies";
        } else if(unidad == 3 && unidad2 == 4) {
            resultado = valor / 3;
            conversion = "pies";
            conversion2 = "yardas";
        }
        //Yarda a otras unidades
        else if (unidad == 4 && unidad2 == 1) {
            resultado = valor / 1.094;
            conversion = "yardas";
            conversion2 = "metros";
        } else if(unidad == 4 && unidad2 ==2) {
            resultado = valor * 91.44;
            conversion = "yardas";
            conversion2 = "centimetros";
            console.log(resultado);
        } else if(unidad == 4 && unidad2 == 3) {
            resultado = valor * 3;
            conversion = "yardas";
            conversion2 = "pies";
        } else if(unidad == 4 && unidad2 == 4) {
            resultado = valor;
            conversion = "yardas";
            conversion2 = "yardas";
        }

        const res = document.getElementById('resultado');
        res.textContent = `${resultado}`;

        const res2 = document.getElementById('resultado-txt');
        res2.textContent = `${valor} ${conversion} es igual a ${resultado} ${conversion2}`;
    } );
}

function agregarElementos() {
    const formulario = document.querySelector('#form-agregar');
    formulario.addEventListener('submit', e => {
        e.preventDefault();

        //Padre
        const formInterno = document.querySelector('.insert');
        
        const label = document.createElement("label");
        label.classList.add('form-label');
        label.classList.add('margin-left');
        label.innerHTML = "Materia: ";
        

        const input = document.createElement("input");
        input.classList.add('input');
        input.id = "materia";
        input.type = "text";
        input.placeholder = "Ingrese la materia:";
        input.required = "";

        const labelCal = document.createElement("label");
        labelCal.classList.add('form-label');
        labelCal.classList.add('margin-left');
        labelCal.innerHTML = "Calificacion: ";

        const inputCal = document.createElement("input");
        inputCal.classList.add('input');
        inputCal.id = "calificacion";
        inputCal.type = "number";
        inputCal.placeholder = "Ingrese la Calificacion:";
        inputCal.required = "";

        formInterno.appendChild(label);
        formInterno.appendChild(input);
        formInterno.appendChild(labelCal);
        formInterno.appendChild(inputCal);

        
    });
}
function calcularCalificaciones() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', e => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
       
        var materia = []; 
        var materia = document.querySelectorAll('#materia');

        var calificacion = [];
        var calificacion = document.querySelectorAll('#calificacion');

        //Arreglos para los datos obtenidos
        var datos = [];
        var materias = [];

        //For each para iterar sobre todas las datos y pasar a un array
        var i = 0;
        var l = 0;

        calificacion.forEach(cal => {
            i = i;
            datos[i] = cal.value;
            i++;
        });

        materia.forEach(cal => {
            l = l;
            materias[l] = cal.value;
            l++;
        });
        console.log(materias);

        //Sumamos las datos
        var suma = 0;

        const calificaciones = datos.map((item) => parseFloat(item));

        // console.log(calificaciones);

        //For para las materias
        for(var i = 0; i < datos.length; i++) {
            suma += calificaciones[i];
        }
        //Sacamos la calificacion final dividiendo todo
        var calFinal = suma / calificaciones.length;


        //For para iterar sobre cada materia y calificacion
        for (var j = 0; j < materias.length; j++) {

            const div = document.querySelector('.insert2');
            const comprobacion = document.querySelector('.gris');

            // if(comprobacion == null) {
                const h3 = document.createElement("h3");
                h3.classList.add('resultado-txt');
                h3.classList.add('gris');
                h3.id = "gris";

                div.appendChild(h3);
            // }
            
            const mensaje = document.querySelectorAll('.gris');
            mensaje[j].textContent = `Materia: ${materias[j]} con calificación de ${datos[j]}`;
        }

        if(calFinal < 6 ) {

            const div = document.querySelector('.insert');
            
            
            const h3 = document.createElement("h3");
            h3.classList.add('mensaje');
            h3.classList.add('rojo');
            h3.id = "mensaje";

            div.appendChild(h3);

            const h3Nuevo = document.querySelector('.verde');
            h3Nuevo.classList.remove('verde');
            h3Nuevo.classList.add('rojo');


            const mensaje = document.getElementById('mensaje');
            mensaje.textContent = `Alumno no Aprobado`;
            
        } else {

            const div = document.querySelector('.insert');

            const h3 = document.createElement("h3");
            h3.classList.add('mensaje');
            h3.classList.add('verde');
            h3.id = "mensaje";

            div.appendChild(h3);

            const h3Nuevo = document.querySelector('.verde');
            h3Nuevo.classList.remove('rojo');
            h3Nuevo.classList.add('verde');

            const mensaje = document.getElementById('mensaje');
            mensaje.textContent = `Alumno Aprobado`;
        }   
        
        //Crear e inserta mensaje con calificacion final
        const insert = document.querySelector('.insert');

        const h3 = document.createElement("h3");
            h3.classList.add('resultado-txt');
            h3.classList.add('azul');
            h3.id = "resultado-txt";

        insert.appendChild(h3);


        const resultado = document.getElementById('resultado-txt');
        resultado.textContent = `La calificación del alumno ${nombre} es ${calFinal.toFixed(1)}`;

        //Final de Calificacion final

        const recargar = document.querySelector('#recargar');

        const button = document.createElement("button");
        button.classList.add('btn');
        button.classList.add('btn-form');
        button.type = "submit";
        button.textContent = "Nueva Consulta";

        recargar.appendChild(button);

    });
}
function recargar() {
    const recargar = document.querySelector('#recargar');

    recargar.addEventListener('click', e => {
        window.location.reload();
    })
}

function triangular() {
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', e => {

        e.preventDefault();
    
        function piramide(numPisos) {
            for (let i = 0; i < numPisos; i++) {
              let piso = '';
              for (let j = 1; j < numPisos - i; j++) {
                piso = piso + ' ';
              }
          
              for (let j = 0; j < i + 1; j++) {
                piso = piso + '*';
              }
              console.log(piso);
            }
          }
          
          piramide(5);
        
    })
}
function triangular2() {
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', e => {

        e.preventDefault();

        
    
        function piramide(numPisos) {
            for (let i = 0; i < numPisos; i++) {
              let piso = '';
          
              for (let j = 0; j <= i + 1; j++) {
                piso = piso + '*';
              }
              console.log(piso);
            }
          }

          function piramideInvertida(numPisos) {
            for(let i = numPisos; i >= 1; i--) {
              let piso = '';
                for(let j = 1; j <= i; j++) {
                    piso = piso + '*';
                }
                console.log(piso);
            }
          }
          
          piramide(3);
          piramideInvertida(3);
        
    })
}
function arbol() {
    
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', e => {

        e.preventDefault();

        const ciclos = document.querySelector('#ciclos').value;

        console.log(ciclos);

        function imprimirPatron(ciclos) {
            
            for (let i = 1; i <= ciclos; i++) {
              for (let j = 1; j <= i; j++) {
                let linea = '';
                for (let k = 0; k < j; k++) {
                  linea += '*';
                }
                console.log(linea);
              }
            }
          }
          
          imprimirPatron(ciclos);

        const recargar = document.querySelector('#recargar');

        const button = document.createElement("button");
        button.classList.add('btn');
        button.classList.add('btn-form');
        button.classList.add('recargar');
        button.type = "submit";
        button.textContent = "Nueva Consulta";

        recargar.appendChild(button);
          
        
    })
}