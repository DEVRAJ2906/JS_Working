//Write a code which can give grades to students according to their scores

confirm("Do you want to know about your grades?");
let userScore = prompt("Enter your score :");
let num = isNaN(userScore);

if(!num){
    console.log("Your score is "+userScore);
}


if(userScore>=80 && userScore<=100){
    console.log("Your Grade is A.");
}else if(userScore>=70 && userScore<=79){
    console.log("Your Grade is B.");
}else if(userScore>=60 && userScore<=69){
    console.log("Your Grade is C.");
}else if(userScore>=50 && userScore<=59){
    console.log("Your Grade is D.");
}else if(userScore>=0 && userScore<=49){
    console.log("Your Grade is F.");
}else{
    console.log("You have entered invalid score.");
}