const inputSalario = document.querySelector('#box-wage');
const inputDiasLaborados = document.querySelector('#working-days');
const botonCalcular = document.querySelector('#btnCalcular');
const resultadoCesantias = document.querySelector('#layoffs');
const resultadoInteresesCesantias = document.querySelector('#layoffs-interest');
const resultadoPrima = document.querySelector('#bond');
const resultadoVacaciones = document.querySelector('#holidays');
const resultadoTotalPrestaciones = document.querySelector('#total');


botonCalcular.addEventListener('click', calculoCesantias);
botonCalcular.addEventListener('click', interesesCesantias);
botonCalcular.addEventListener('click', liquidacionPrimaPrimerSemestre);
botonCalcular.addEventListener('click', liquidacionVacaiones);


const auxTransporte = 140606;
const salarioMinimo = 1300606;  


let resultados = [];



// let totalResultadosCalculados = resultados.reduce((a, b) => a + b, 0);
// console.log(totalResultadosCalculados);

function calculoCesantias () {
    
    
    const salario = Number(inputSalario.value);
    const diasLaborados = Number(inputDiasLaborados.value);  

    const salarioPlusAuxTransporte = salario + auxTransporte;
    console.log(salarioPlusAuxTransporte);
    const limiteSalario = salarioMinimo * 2;

    if(salarioPlusAuxTransporte > limiteSalario ){
        console.warn('No es beneficiario de Auxilio de Transporte');
        const diasYearLaborales = 360;
        const cesantiasSinAuxilio = ((salario) * diasLaborados)/diasYearLaborales;
        resultadoCesantias.innerText = '$ ' + cesantiasSinAuxilio + ' COP' + ' No es beneficiario de Auxilio de Transporte';
        resultados.push(cesantiasSinAuxilio);
        // return cesantiasSinAuxilio;

    } else if (salarioPlusAuxTransporte <= limiteSalario){
        const diasYearLaborales = 360;
        const cesantiasConAuxilio = ((salario + auxTransporte) * diasLaborados)/diasYearLaborales;
        resultadoCesantias.innerText = '$ ' + cesantiasConAuxilio + ' COP';
        resultados.push(cesantiasConAuxilio);
        // return cesantiasConAuxilio;

    } else {
        resultadoCesantias.innerText = 'Hay un error en los datos'
        // console.warn('Hay un error en los datos');
    };
};

function interesesCesantias (){
    
    const salario = Number(inputSalario.value);
    const diasLaborados = Number(inputDiasLaborados.value);  
    
    const diasYearLaborales = 360;
    const cesantias = ((salario + auxTransporte) * diasLaborados)/diasYearLaborales;
    const interesAnualCesantias = (12/100);
    const interesesSobreCesantias = (cesantias * diasLaborados*interesAnualCesantias)/360;
    resultadoInteresesCesantias.innerText = '$ ' + interesesSobreCesantias + ' COP';
    resultados.push(interesesSobreCesantias);
    // return interesesSobreCesantias;
};

function liquidacionPrimaPrimerSemestre (){
    
    const salario = Number(inputSalario.value);
    const diasLaborados = Number(inputDiasLaborados.value);  
    
    const diasYearLaborales = 360;
    if (diasLaborados <= 180){
        const primaPrimerSemestre = ((salario + auxTransporte) * diasLaborados)/diasYearLaborales;
        resultadoPrima.innerText = '$ ' + primaPrimerSemestre + ' COP';
        resultados.push(primaPrimerSemestre);
        // console.log(primaPrimerSemestre);
        // return  primaPrimerSemestre;
    } else if (diasLaborados > 180){
        const primaPrimerSemestre = ((salario + auxTransporte) * diasLaborados)/diasYearLaborales;
        // console.log(primaPrimerSemestre);
        // const primaSegundoSemestre = ((salario + auxTransporte) * diasLaborados)/diasYearLaborales;
        // console.log(primaSegundoSemestre);
        const totalPrima = primaPrimerSemestre;
        resultadoPrima.innerText = '$ ' + totalPrima + ' COP';
        resultados.push(totalPrima);
        // return  totalPrima;
        // console.log(totalPrima);
    } else {
        console.warn('Hay un error en los datos');
    };
};


function liquidacionVacaiones(){
    
    const salario = Number(inputSalario.value);
    const diasLaborados = Number(inputDiasLaborados.value);  
    
    const diasYearLaborales = 720;
    const vacaciones = ((salario) * diasLaborados)/diasYearLaborales;
    resultadoVacaciones.innerText = '$ ' + vacaciones + ' COP';
    resultados.push(vacaciones);
    return  resultadoVacaciones;
};

// function totalPrestaciones(){
//     const totalPrestaciones = resultadoVacaciones;
//     resultadoTotalPrestaciones.innerText = '$ ' + totalPrestaciones + ' COP';
    
// }

// function liquidacionPrimaSegundoSemestre (salario, diasLaborados){
//     const diasYearLaborales = 360;
//     const primaSegundoSemestre = ((salario + auxTransporte) * diasLaborados)/diasYearLaborales;
//     return  primaSegundoSemestre;
// };