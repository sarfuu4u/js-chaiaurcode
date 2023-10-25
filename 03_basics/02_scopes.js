// var c= 300

let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("Inner:", a);
}

console.log(a);

function one(){
    const username = "Sarfraj"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
one()

if (true) {
    const username = "Sarfraj"
    if (username === "Sarfraj") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//==================interseting================

console.log(addOne(5));    // it is valid
function addOne(num){
    return num + 1
}
// console.log(addOne(5));

// console.log(addTwo(4));    // error throw
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(4));

