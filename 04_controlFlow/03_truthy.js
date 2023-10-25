// const userEmail = "sarfuu38@gmail.com"
const userEmail = []

if (userEmail) {
    console.log("Email found");
} else {
    console.log("Email not found");
}

// Falsy value
// false , 0 , -0 , bigInt , 0n ,"" , null , undefined , NaN

// Truthy value
// other than falsy , "0" , 'false' , "false" , " " , [] , {} , function(){} 

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptObj = {}
if (Object.keys(emptObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalexcing Opearator (??):  null undefined

let val1;
// val1 = 5 ?? 10           // => 5
// val1 = null ?? 10         // => 10
//val1 = undefined ?? 15        // => 15
val1 = null ?? 10 ?? 20          // => 10

console.log(val1);

