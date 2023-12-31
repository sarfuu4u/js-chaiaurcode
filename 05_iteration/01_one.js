// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + " * " + j + " = " + i*j);
    }   
}

// Break 

for (let i = 1; i <= 20; i++) {
    if (i==10) {
        console.log("10 is detected");
        break
    }
    console.log(`Value of i is ${i}`);
    
}

// continue

for (let i = 1; i <= 20; i++) {
    if (i==10) {
        console.log("10 is detected");
        continue
    }
    console.log(`Value of i is ${i}`);    
}

