//Get user to input a number using prompt. Check if the number is multiple of 5 or not.

confirm("Do you want to find out whether your number is a multiple of 5?");
let userNum = prompt("Enter any valid number :");

if(userNum%5 === 0){
    alert("Your entered number "+userNum+" is a multiple of 5.");
}else{
    alert("Your entered number "+userNum+" is not a multiple of 5.");
}