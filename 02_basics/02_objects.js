// two methods for defining object = literal , constructor->(singleton)

// Object literals

const mySym = Symbol("key1")

const jsUser ={
    name: "Sarfraj",
    "fullName": "Sarfraj Ahmad",
    [mySym]: "mykey1",
    age: 20,
    location: "Bhopal",
    email: "Sarfuu38@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Friday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["fullName"]);
console.log(jsUser[mySym]);

jsUser.email = "sarfuu484734@gmail.com"  // Changing the value of email
// Object.freeze(js_user)  //after freezing we can't change the value
jsUser.email ="sarfrajahmad@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

console.log("End");

// -----------#################---------------------

//const tinderUser11 = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sarfraj"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sarfraj",
            lastname: "Ahmad"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 ={
    3: "c",
    4: "d"
}
// const obj3 ={obj1, obj2}
//const obj3 = {...obj1, ...obj2}
const obj3 = Object.assign({}, obj1, obj2) //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

console.log(obj3);

const users = [
    {
        id: 1,
        email: "sarfuu@gmail.com"
    },
    {
        id: 2,
        email: "aaaa@gmail.com"
    },
    {
        id: 3,
        email: "bbb@gmail.com"
    }
]
console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// -------------------#################--------------------

const course = {
    courseName: "js",
    price: "99",
    courseInstructor: "Hitesh"
}

//console.log(course.courseInstructor);

const {courseInstructor: Instructor} = course //destructuring of objects
console.log(Instructor);

//API
// {
//     "name": "Hitesh",
//     "courseName": "js_in_hindi",
//     "price": 999
// }
[
    {},
    {},
    {}
]
