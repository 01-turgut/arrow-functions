/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumber(a, b) {
//     // Code Block
//     return a + b;
// }

// let sum = addTwoNumber(11,5)
// console.log(sum)

// Arrow Function With Parameters
const addTwoNumber = (a,b) => {
    return a+ b
};

let sum = addTwoNumber(99,1);
console.log(sum)
// Single Line Arrow Function With Parameters
const addTwoNumbers = (a, b) =>  a + b;
let sum2 = addTwoNumbers(19, 1)
console.log(sum2)

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multipleline string    
    </p>`
)

console.log(returnMultipleLines())

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("hello there")

const sayHello = () => console.log("Helloo!");
sayHello()