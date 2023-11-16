document.addEventListener('DOMContentLoaded', function() {
    if(document.querySelector('#ej2'))  {
        hospital();
    }

    if(document.querySelector('#ej3'))  {
        IMC();
    }
    
});

function hospital() {

    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', e => {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const costo = document.querySelector('#costo');
        const costoHospitalizacion = document.querySelector('#costo-hospitalizacion');
        const diasHospital = document.querySelector('#num-dias-hospital');
        const costoVarios = document.querySelector('#costo-varios');
        const costoMedicamentos = document.querySelector('#costo-medicamentos');
        const deducciones = document.querySelector('#deducciones');

        const resultado = document.querySelector('#insertar');

        resultado.textContent = `Hola ${nombre}, estuviste ${diasHospital.value} dias en el hospital y tus gastos son los siguientes: `;

        var datos = [costo.value, costoHospitalizacion.value, costoVarios.value, costoMedicamentos.value];
        var nombres = [costo.placeholder, costoHospitalizacion.placeholder, costoVarios.placeholder, costoMedicamentos.placeholder];

        //Convertimos los datos a float
        const datosR = datos.map((item) => parseFloat(item));

        suma = 0;
        for(var i = 0; i < datos.length; i++) {
            suma += datosR[i];
        }

        var deduccionesFl = parseFloat(deducciones.value); 

        // console.log(nombres[0])

        for(i = 0; i < datos.length; i++) {
            const padre = document.querySelector('#insertar2');

            const li = document.createElement('li');

            li.textContent = `-> $${nombres[i]}: ${datos[i]} MXN`;

            padre.appendChild(li);
        }

        const total = document.querySelector('#insertar3');
        total.textContent = `Tus gastos totales son de $${suma} MXN`;

        const resultado2 = document.querySelector('#insertar4');

        resultado2.textContent = `Y tus deducciones son de $${deduccionesFl} MXN`;

        const resultado3 = document.querySelector('#insertar5');
        resultado3.textContent = `Tus gastos totales menos deducciones son de $${suma - deduccionesFl} MXN`

    })
}

function IMC() {
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', e => {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const peso = document.querySelector('#peso').value;
        const altura = document.querySelector('#altura').value;
        const edad = document.querySelector('#edad').value;
        const alergia = document.querySelector('#alergia').value;


        
        var imc = peso / Math.pow(altura, 2);

        var resultado = imc.toFixed(3);

        // console.log(imc.toFixed(3)); 

        const respuesta = document.getElementById('resultado');

        const respuesta2 = document.querySelector('#resultado2');
        const respuesta3 = document.querySelector('#resultado3');

        if (25 <= resultado <= 22) {
            respuesta.textContent = `Hola ${nombre} tu IMC es de ${resultado}, tu peso es bueno y se encuentra dentro de lo correcto, sigue así.`;
        }
        if (resultado < 22) {
            respuesta.textContent = `Hola ${nombre} tu IMC es de ${resultado}, tu peso es bajo, te recomiendo comer más y el ejercicio.`;
        }
        if(imc > 25) {
            respuesta.textContent = `Hola ${nombre} tu IMC es de ${resultado}, tu peso es alto te recomiendo más ejercicio y una dieta para controlarlo.`;
        }

        if (edad >= 60) {
            respuesta2.textContent = `Debido a tu edad te sugerimos comer comidas baja en grasa y azucar, como verduras y alimentos no procesados.`
        }
        if(edad < 40 && edad >20) {
            respuesta2.textContent = `Recuerda seguir el ritmo de comidas sanas, no pierdas el camino, lo mejor es cuidar a tu cuerpo para llegar a grande con la mejor salud posible, trata de no comer alimentos procesados y haz ejercicio regularmente`
        }
        if(edad <= 40 && edad < 60) {
            respuesta2.textContent = `Estas en la etapa de adultez y te recomiendo seguir controlando tus comidas, trata de mantener una dieta balanceada para llegar a la vida adulta con la mejor salud posible`
        }
        if(edad <= 20 && edad > 0) {
            respuesta2.textContent = `La mejor vida te espera si comes regularmente y sanamente, estas en la etapa mas temprana de tu vida y de aqui depende hacia donde quieres ir`
        }

        if(alergia == 'no') {
            respuesta3.textContent = `Es bueno que no tengas alergias, ya que puedes comer cualquier comida sin que esto te afecte, es una gran oportunidad para ti, aprovechalo al maximo, pero siempre regulandote con lo que comes.`
        }
        if(alergia == 'si') {
            respuesta3.textContent = `No esta mal tener alergias, solo significa que debemos cuidarnos mas a menudo con lo que comemos, y saber controlar nuestros apetitos con ciertos alimentos que podrian ser daniños.`
        }
    } );
}
