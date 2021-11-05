console.log('type check() in the console with the number you want to check in the parentheses like this check(25) then press enter.')


function check (number) {
  for (const i = 0; number > i; i++) {
    const numbercheck = number/i;
    const check = Math.floor(number/i)
    const notOne = numbercheck-check

    if (numbercheck === check && notOne > 1){
      return `${number} is not a prime`
    }else{
      return `${number} is a prime`
    }
  }
}