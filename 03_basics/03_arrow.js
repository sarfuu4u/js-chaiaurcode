const user = {
    username: "Sarfraj",
    price: 99,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

//1// function chai(){
//     let username = "Sarfraj"
//     console.log(this.username);
// }
// chai()


//2// const chai = function(){
//     let username = "Sarfraj"
//     console.log(this.username);
// }
// chai()


//==========arow function================


const chai = () => {
    let username = "Sarfraj"
    console.log(this);
}
//chai()


const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(4, 5));

const addThree = (num1, num2, num3) => (num1 + num2 + num3)
console.log(addThree(2, 5, 7));