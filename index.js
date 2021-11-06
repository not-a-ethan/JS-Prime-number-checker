console.log('type check() in the console with the number you want to check in the parentheses like this check(25) then press enter.')


function check (number) {
  for (const i = 2; number > i; i++) {
    const numbercheck = number/i;
    const check = Math.floor(number/i)

    if (numbercheck === check){
      return `${number} is not a prime`
      break
    }else{
      return `${number} is a prime`
    }
  }
}