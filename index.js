console.log('type check() in the console with the number you want to check in the parentheses like this check(25) then press enter.')

let composite = false
let prime = false

function check (num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0 && num !== i){
      composite = true
    }else{
      prime = true
    }
  }

  if (composite) {
    return `${num} is not a prime`
  }else{
    return `${num} is a prime`
  }
}