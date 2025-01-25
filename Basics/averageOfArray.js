//For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//FInd the average marks of the entire class.

let studentMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for(let i=0; i<studentMarks.length; i++){
    sum += studentMarks[i];
}

let average = sum/studentMarks.length;
console.log(`Average of marks of students is ${average}.`);