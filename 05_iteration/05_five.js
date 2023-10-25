// for each     

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach((val) => {
    console.log(val);
});

coding.forEach( function (val) {
    console.log(val);
})

coding.forEach( (item, index, arr) => {
console.log(item, index, arr);
}) 

console.log("End");


const myCoding = [
    {
        langName: "javascript",
        fileName: "js"
    },
    {
        langName: "python",
        fileName: "py"
    },
    {
        langName: "java",
        fileName: "java"
    },
    {
        langName: "C++",
        fileName: "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.fileName);
});

console.log("End");

// // for each loop doesn't return any value

// const coding1 = ["js", "ruby", "java", "python", "cpp"]

// const value1 = coding1.forEach((item) => {
//     console.log(item);
//     return item
// });

// console.log(value1);