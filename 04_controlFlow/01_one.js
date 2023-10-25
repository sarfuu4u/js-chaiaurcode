// IF

const isUserLoggedIn = true
if (isUserLoggedIn) {
    console.log("Hello");
}

if (false) {
    console.log("world");
}

// conditional operator
// >, <, >=, <=, ==, !=, === (=== => checking datatypes all well as)
// &&  || 

if (2=="2") {
    console.log("executed");
}
if (2==="2") {
    console.log("executed");
}

// If-else

const temprature = 30
if (temprature < 50) {
    console.log("temprature is less than 50");
} else {
    console.log("temprature is greater than 50");
}

const score = 200
if (score > 100) {
        let power = "fly"
        console.log(`User power : ${power}`);
}

const balance = 1000
if(balance < 500){
    console.log("less than 500");
}else if (balance < 750) {
    console.log("less than 750");
} else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("greater than 900");
}



// Ternary operator

// condition ? ttrue : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");;