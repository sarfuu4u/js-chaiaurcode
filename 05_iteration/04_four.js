// for in loop   object

const myobj ={
    js: "javascript",
    rb: "Ruby",
    cpp: "C++",
    swift: "Swift by apple"
}


for (const key in myobj) {
    console.log(key);
}

for (const key in myobj) {
    console.log(myobj[key]);
}

for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
}

const programming = ["js", "html", "css", "py", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}