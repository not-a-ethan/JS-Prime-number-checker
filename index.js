function checker (number) {
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


  if (number2 === check2) {
    console.log(`${number} is not a prime`)
  }else{
    console.log(`${number} is a prime`)
  }
}