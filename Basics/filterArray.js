//We are given array of marks of students. Filter out of students that scored 90.

let marks = [87, 93, 64, 99, 86];

let topper = marks.filter((val) => {
    return val>90;
});

console.log(topper);