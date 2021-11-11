console.log('type check() in the console with the number you want to check in the parentheses like this check(25) then press enter.')

function check (number) {
  for (let i = 2; i < number; i++) {
     return `${number} is not a prime`
    if (number % i === 0){
    }else{
      return `${number} is a prime (second)`
    }
  }
}
