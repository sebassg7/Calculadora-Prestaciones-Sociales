const inputSalario = document.querySelector('#box-wage');
const inputDiasLaborados = document.querySelector('#working-days');
const botonCalcular = document.querySelector('#btnCalcular');
const resultadoCesantias = document.querySelector('#layoffs');
const resultadoInteresesCesantias = document.querySelector('#layoffs-interest');
const resultadoPrima = document.querySelector('#bond');
const resultadoVacaciones = document.querySelector('#holidays');
const resultadoTotalPrestaciones = document.querySelector('#total');


botonCalcular.addEventListener('click', calculoPrestaciones);



const auxTransporte = 140606;
const salarioMinimo = 1300606;  


function calculoPrestaciones () {
    
    let resultados = [];
    

    

    // CÁLCULO DE CESANTIAS

    const salario = Number(inputSalario.value);
    const diasLaborados = Number(inputDiasLaborados.value);  

    const salarioPlusAuxTransporte = salario + auxTransporte;
    const limiteSalario = salarioMinimo * 2;

    if(salarioPlusAuxTransporte > limiteSalario ){
        console.warn('No es beneficiario de Auxilio de Transporte');
        const diasYearLaborales = 360;
        const cesantiasSinAuxilio = ((salario) * diasLaborados)/diasYearLaborales;
        resultados.push(cesantiasSinAuxilio);
        resultadoCesantias.innerText = '$ ' + cesantiasSinAuxilio + ' COP' + ' No es beneficiario de Auxilio de Transporte';

    } else if (salarioPlusAuxTransporte <= limiteSalario){
        const diasYearLaborales = 360;
        const cesantiasConAuxilio = ((salario + auxTransporte) * diasLaborados)/diasYearLaborales;
        resultados.push(cesantiasConAuxilio);
        resultadoCesantias.innerText = '$ ' + cesantiasConAuxilio + ' COP';

    } else {
        resultadoCesantias.innerText = 'Hay un error en los datos'

    };
         
    
    // CÁLCULO INTERESES A LAS CESANTIAS 

        const diasYearLaboralesInteresesCesantias = 360;
        const cesantias = ((salario + auxTransporte) * diasLaborados)/diasYearLaboralesInteresesCesantias;
        const interesAnualCesantias = (12/100);
        const interesesSobreCesantias = (cesantias * diasLaborados*interesAnualCesantias)/360;
        resultados.push(interesesSobreCesantias);
        resultadoInteresesCesantias.innerText = '$ ' + interesesSobreCesantias + ' COP';
    
    // CÁLCULO PRIMA

    const diasYearLaboralesPrima = 360;
   
    if (diasLaborados <= 180){
        const primaPrimerSemestre = ((salario + auxTransporte) * diasLaborados)/diasYearLaboralesPrima;
        resultados.push(primaPrimerSemestre);
        resultadoPrima.innerText = '$ ' + primaPrimerSemestre + ' COP';
        
    } else if (diasLaborados > 180){
        const primaPrimerSemestre = ((salario + auxTransporte) * diasLaborados)/diasYearLaboralesPrima;
        const totalPrima = primaPrimerSemestre;
        resultados.push(totalPrima);
        resultadoPrima.innerText = '$ ' + totalPrima + ' COP';
    
    } else {
        console.warn('Hay un error en los datos');
    };
      
     // CÁLCULO VACACIONES

     const diasYearLaboralesVacaciones = 720;
     const vacaciones = ((salario) * diasLaborados)/diasYearLaboralesVacaciones;
     resultados.push(vacaciones);
     resultadoVacaciones.innerText = '$ ' + vacaciones + ' COP';
    

    // CÁLCULO TOTAL PRESTACIONES

    let suma = 0;
    resultados.forEach(function(resultado) {
    suma += resultado;
    });
    console.log(resultados);

    console.log("La suma es: " + suma);

    resultadoTotalPrestaciones.innerText = '$ ' + suma + ' COP';
};

