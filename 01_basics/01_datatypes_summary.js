// Primitive

// 7 types: String , Number, null , undefined, Boolean, symbol, BigInt

const score = 123
const scoreValue = 100.34

const isLogged = true
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')  // both values are not same

const bigNumber = 2142343242442n  // BigInt


// reference (Non-primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "spiderman", "Thor"]

let myObj = {
    name : "sarfraj",
    age : 20
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof bigNumber)  // BigInt
console.log(typeof undefined)
console.log(typeof myObj)
console.log(typeof isLogged)
