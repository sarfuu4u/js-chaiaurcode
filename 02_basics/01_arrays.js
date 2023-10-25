// array

const myArr = [0, 1, 2, 3, 4, true, "sarfraj"]
const myArr1 = ["thor", "bahubali"]
const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[2]);

// Array methods

myArr.push(6) // For adding a new element in array
myArr.push(9)
console.log(myArr);

myArr.pop() // For deleting last element of the array
console.log(myArr);

myArr.unshift(9) // For adding a new element in the start of the array
console.log(myArr);

myArr.shift() // For deleting the first element of the array
console.log(myArr);

console.log(myArr.includes(9)); // For checking the element is present in the array or not
console.log(myArr.includes(2));

const newArr = myArr.join() // Adds all the elements of the array into a string 
console.log(newArr);
console.log(typeof newArr);

// slice or splice
// splice() is that slice() returns a copy of an array, 
// while splice() modifies the original array.

console.log("A ", myArr2);

const myn1 = myArr2.slice(1,3)
console.log(myn1);
console.log("B ", myArr2);

const myn2 = myArr2.splice(1,3)
console.log(myn2);
console.log("C ", myArr2);

// -------------##############---------------

const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);   //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3][1]);   //flash

const allHero = marvel_heroes.concat(dc_heroes)  // combine two or more array and return a new array
console.log(allHero);

const all_new_heros = [...marvel_heroes, ...dc_heroes]  // spread operator same as concat operator
console.log(all_new_heros);

const another_array =[1, 2, 3, [4, 5, 6], 7, [8, 9, [1, 2, 3]] ]
const real_another_array = another_array.flat(Infinity)  //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

console.log(Array.isArray("Sarfraj"));
console.log(Array.from("Sarfraj"));
console.log(Array.from({name : "Sarfraj"}));  // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // make a array of passes value
