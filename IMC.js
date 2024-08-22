const altura = Number(window.prompt("Informe a Altura: "));
const peso = Number(window.prompt("Informe o Peso: "));

let IMCresult = peso/(altura*altura);

if (IMCresult <= 18.5) window.alert(`Seu IMC: ${IMCresult} - Magreza` );

else if (IMCresult < 25) window.alert(`Seu IMC: ${IMCresult} - Normal` );

else if (IMCresult < 30) window.alert(`Seu IMC: ${IMCresult} - Sobrepeso` );

else if (IMCresult < 35) window.alert(`Seu IMC: ${IMCresult} - Obesidade grau I` );

else if (IMCresult < 40) window.alert(`Seu IMC: ${IMCresult} - Obesidade grau II` );

else window.alert(`Seu IMC: ${IMCresult} - Obesidade grau III` );
