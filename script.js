const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () =>{
    const DATO = parseInt(document.getElementById('peso').valueAsNumber)  //me lleva a input// 


    if(DATO > 0){
    ERROR.style.display = 'none'
    let flujo = calcFlujo(DATO);
    let mantenimiento = flujo*1.5;
    FLU.innerHTML = flujo + 'cc/hr';
    MAN.innerHTML = 'm+m/2  ' + mantenimiento + '  cc/hr';
    FLU.style.display = 'block';
    MAN.style.display = 'block';
}   else{
    ERROR.style.display = 'block';
    FLU.style.display = 'none'
    MAN.style.display = 'none';
}
})


//function calcFlujo(peso){
   // let resto = peso;
    //let flujo = 0;
   // if (resto>20){
      //  let aux = resto-20;
       // flujo = flujo + aux*1;
        //resto = resto - aux;
   // } 
    //if (resto>10){
      //  let aux = resto-10;
        //flujo = flujo + aux*2;
        //resto = resto - aux;
    //}
    //flujo = flujo + resto*4.1;
    //return flujo;
//}
const A= 1000
const B= 500
const C= 90
function calcFlujo(peso){
    let valor= peso

  if(valor>30){
    let resto= (valor)+(90);
    let Mult= valor*4;
    let suma= Mult+7;
    let Div= (suma/resto)*1500
    let resultado= Div/24
     return resultado;
  }
  else if(valor>20){
    let CadaKg= (valor-20)*20
    let suma= A+B;
    suma+=CadaKg;
    let resultado= suma/24;
    return resultado;
  }
  else if(valor<=10){
    let CadaKg= valor*100
    let suma= CadaKg;
    let resultado= suma/24;
    return resultado;
  }
  else if(valor<=20){
    let CadaKg= (valor-10)*50;
    let suma= A;
    suma+=CadaKg;
    let resultado= suma/24;
    
    return resultado;
  }
}