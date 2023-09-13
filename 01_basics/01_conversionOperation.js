let score = "33"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let valueInBoolean = Boolean(score)
console.log(typeof valueInBoolean)
console.log(valueInBoolean)


let score1 = "33abc"
console.log(typeof score1)

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)

let valueInBoolean1 = Boolean(score1)
console.log(typeof valueInBoolean1)
console.log(valueInBoolean1)

// "33" => 33
// "33abc" => NaN


let isLogged = true
console.log(typeof isLogged)

let isLoggedInNumber = Number(isLogged)
console.log(typeof isLoggedInNumber)
console.log(isLoggedInNumber)


// true => 1; false => 0
// 1 => true; 0 => false
// "sargs" => true; "" => false  

// -----------------Operation-------------

let value = 4
let negValue = -(value)
console.log(negValue)

console.log(2+2)
console.log(4-3)
console.log(4*3)
console.log(4**3) // 4 to the power 3
console.log(4/3)
console.log(4%3)

let str1 = "Hello"
let str2 = " Sarfraj"
console.log(str1 + str2)
// console.log(str1 - str2) // Not possible on string
// console.log(str1 * str2) // Not possible on string

console.log("1" + "2")
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 3) // if first is string then all are consider as string
console.log(1 + 2 + "3") // if first are number then first apply operation  on number then add string

