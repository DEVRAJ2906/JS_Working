//Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array.

let number = prompt("Enter a number :");
let array = [];

for(let i=1; i<=number; i++){
    array.push(i);
}

console.log(`Array : ${array}`);

let sum = array.reduce((prev, curr) => {
    return prev + curr;
});

console.log(`Sum of all elemnts of array is ${sum}.`);

let product = array.reduce((prev, curr) => {
    return prev * curr;
});

console.log(`Product of all elemnts of array is ${product}.`);
