let dataTemperatura = Number(window.prompt("Escolha um numero a temperatura que sera digitada: "));

console.log("1 - Celsius");
console.log("2 - Kelvin");
console.log("3 - Farenheit");

switch(dataTemperatura){
  case 1:
    const celsius = Number(window.prompt("Digite o valor em Celsius: "));
    break;
  
  case 2:
    const kelvin = Number(window.prompt("Digite o valor em Kelvin: "));
    break;
  
  case 3:
    const farenheit = Number(window.prompt("Digite o valor em Farenheit: "));
    break;

  default: console.log("Error, Escolha uma alternativa valida!");
}

let temperaturaDesejada = Number(window.prompt("Digite em qual voce quer transformar: 1 - Celsius, 2 - Kelvin 3 Farenheit" ));


switch(temperaturaDesejada){
  case 1: // Celsius
  if(dataTemperatura == 2)  {
    const kelvinTotal = celsius + 273.15;
    window.alert(`Resultado: ${kelvinTotal}`);
    break;
  } 
  else if(dataTemperatura == 3) {
    const farenheitTotal = (farenheit - 32) / 1.8;
    window.alert(`Resultado: ${farenheitTotal}`);
    break;
  }  
  else window.alert("Error! nao tem como transforma celsius para celsius");
    break;
  
  case 2: // Kelvin
    if(dataTemperatura == 1 ){
      const celsiusTotal = celsius - 273.15;
      window.alert(`Resultado: ${celsiusTotal}`); 
      break;
    }

    else if(dataTemperatura == 3){
      window.alert(`Resultado: ${farenheitTotal1}`); 
      break;

    }

    else window.alert("Error! nao tem como transforma celsius para Kelvin");
    break;
    
  case 3: // Farenheit
      if(dataTemperatura == 1)
      {
        const celsiusTotal = (farenheit - 32)/1.8;
        window.alert(`Resultado: ${celsiusTotal}`);
        break;
      }
      else if (dataTemperatura == 2) {
        const kelvinTotal = ((farenheit + 459.67) * 5 )/9
      }

    break;  
}

