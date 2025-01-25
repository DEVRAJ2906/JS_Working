//For a given array of numbers, print the square of each value using forEach loop
let number = prompt("Enter a number :");
let array = [];
for(let i=1; i<=number; i++){
    array.push(i);
}

array.forEach(square => {
    square = square ** 2;
    console.log(square);
});