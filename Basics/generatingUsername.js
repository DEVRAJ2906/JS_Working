//Prompt the user to enter their fullname. Generate a username for them based on the input.
//Start username with @, followed by their fullname and ending with the fullname length.

let userName = prompt("Enter your fullname without gap:");

userName = "@"+userName+userName.length;
alert(`Your username is ${userName}`);

