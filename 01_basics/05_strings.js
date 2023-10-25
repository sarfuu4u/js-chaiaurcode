const name ="sarfraj"
const repoCount = 7

// console.log(name + repoCount + "Value") // not the best way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // best way

const gameName =new String('Sarfraj')

console.log(gameName.length)
console.log(gameName[2])

console.log(gameName.toUpperCase)
console.log(gameName.toLowerCase)

console.log(gameName.charAt(2))
console.log(gameName.indexOf("f"))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString)

const newStringOne = "    Sarfraj   "
console.log(newStringOne.trim)

const url = "https://sarfraj.com/sarf%uu%asar"

console.log(url.replace('%', '-'))
console.log(url.replace('r', 'a'))
console.log(url.includes('sarf'))
