// map call back function

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map((num) => num + 10)

console.log(newNums);

// Chenning
const newNums1 = myNumbers.map((num) => num * 10).map((num) => num + 1)
console.log(newNums1);
const newNums2 = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 50)
console.log(newNums2);

// reduce method

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const initialValue = 0

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, initialValue)

const myTotal = myNums.reduce((acc, currval) => acc + currval, initialValue)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js course",
        price: 999
    },
    {
        itemName: "html course",
        price: 99
    },
    {
        itemName: "css course",
        price: 199
    },
    {
        itemName: "dev course",
        price: 599
    },
    {
        itemName: "app course",
        price: 9999
    }
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalPrice);

