// Dates start from jan 1, 1970 

let myDate =  new Date()
console.log(myDate);
console.log(typeof myDate)

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());

console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

console.log(myDate.toISOString());
console.log(myDate.toJSON());

//let myCreatedDate = new Date(2023, 0, 21, 5, 45)
// let myCreatedDate = new Date("2023-10-02")

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.toLocaleString());
console.log(newDate.getDay() + 1);
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

console.log(`Hello day is ${newDate.getDay() + 1} and month is ${newDate.getMonth() + 1}`);  // best way

newDate.toLocaleString('default', {
    weekday: "long"
})