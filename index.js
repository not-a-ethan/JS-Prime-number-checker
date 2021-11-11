console.log('type check() in the console with the number you want to check in the parentheses like this check(25) then press enter.')

function check (number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0){
      return `${number} is not a prime`
    }else{
      return `${number} is a prime`
    }
  }
}