function sayMyName(){
    console.log("S");
    console.log("a");
    console.log("r");
    console.log("f");
    console.log("r");
    console.log("a");
    console.log("j");
}

sayMyName()        //for calling the function

function addTwoNumbers(number1, number2){
    return number1 + number2
}
const result = addTwoNumbers(2, 5)
console.log("Result : ", result);

function loginUserMessage(username = "Sir"){
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Sarfraj"));

// rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 400));

const user = {
    username: "sarfraj",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "sam",
    price: 3333
})

const myNewArray = [100, 200, 300, 400]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2000, 3000, 4000, 5000]));