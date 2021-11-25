console.log('type check() in the console with the number you want to check in the parentheses like this check(25) then press enter.')
let number = 0
function check (num) {
  let composite = false
  for (let i = 2; i < num; i++) {
    if (num % i === 0 && num !== i){
      composite = true
      number = i
      break
    }
  }
if (composite) {
    return `${num} is not a prime. One of ${num}'s divisors is ${number}`
  }else{
    return `${num} is a prime`
}
}