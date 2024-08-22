function getRandomNumber(){
  return Math.floor(Math.random * 100);
}

function quina(){
   let number1 = getRandomNumber();
   let number2 = getRandomNumber();
   let number3 = getRandomNumber();
   let number4 = getRandomNumber();
   let number5 = getRandomNumber();

   return window.alert(`Numeros da quina: ${number1}, ${number2},${number3}, ${number4}, ${number5}`);
}

function Sena(){
  let number1 = getRandomNumber();
  let number2 = getRandomNumber();
  let number3 = getRandomNumber();
  let number4 = getRandomNumber();
  let number5 = getRandomNumber();
  let number6 = getRandomNumber();

  return window.alert(`Numeros da Sena: ${number1}, ${number2},${number3}, ${number4}, ${number5}, ${number6}`);
}

function Quinzena(){
  let number1 = getRandomNumber();
  let number2 = getRandomNumber();
  let number3 = getRandomNumber();
  let number4 = getRandomNumber();
  let number5 = getRandomNumber();
  let number6 = getRandomNumber();
  let number7 = getRandomNumber();
  let number8 = getRandomNumber();
  let number9 = getRandomNumber();
  let number10 = getRandomNumber();
  let number11 = getRandomNumber();
  let number12 = getRandomNumber();
  let number13 = getRandomNumber();
  let number14 = getRandomNumber();
  let number15 = getRandomNumber();

  return window.alert(`Numeros da Quinzena: ${number1}, ${number2},${number3}, ${number4}, ${number5}, ${number6}, ${number7}, ${number8},
    ${number9}, ${number10}, ${number11}, ${number12}, ${number13},${number14},${number15}`);
}


console.log(quina(), Sena(), Quinzena());

alert(quina(), Sena(), Quinzena());
