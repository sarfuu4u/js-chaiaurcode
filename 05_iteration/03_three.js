//  for of       array

// [" ", " ", " "]
// [{ }, { }, { }]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// maps
// map is also an object it is For unique value

const map = new Map()
map.set('In', "India")
map.set('USA', "United state of america")
map.set('Fr', "France")
map.set('In', "India") // duplicate not stored

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// object is not iterable
// for (const iterator of object) {
    
// }

