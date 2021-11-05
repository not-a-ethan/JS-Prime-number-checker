console.log('type check() in the console with the number you want to check in the parentheses like this check(25) then press enter.')


function check (number) {
  const number2 = number / 2;
  const number3 = number / 3;
  const number5 = number / 5;
  const number7 = number / 7;
  const number11 = number / 11
  const number13 = number / 13;

  const check2 = Math.floor(number / 2)
  const check3 = Math.floor(number / 3)
  const check5 = Math.floor(number / 5)
  const check7 = Math.floor(number / 7)
  const check11 = Math.floor(number / 11)
  const check13 = Math.floor(number / 13) 

  if (number2 === check2 && check2 > 1) {
    var to = true;
  }else if (number3 === check3 && check3 > 1) {
    var thre = true;
  }else if (number5 === check5 && check5 > 1) {
    var foor = true;
  }else if (number7 === check7 && check7 > 1) {
    var fiv = true;
  }else if (number11 === check11 && check11 > 1) {
    var sixx = true;
  }else if (number13 === check13 && check13 > 1){
    var seveny = true;
  }

  if (to||thre||foor||fiv||sixx||seveny) {
    console.log(`${number} is not a prime`)
  }else{
    console.log(`${number} is a prime`)
  }
}