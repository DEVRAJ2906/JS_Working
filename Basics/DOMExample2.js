//Create a new button element. Give it a text "Click Me" , background color of red and text color of white.
//Insert the button as the first element inside the body tag.

let btn = document.createElement("button");
btn.innerText = "Click Me";
btn.style.backgroundColor = "red";
btn.style.color = "white";

document.querySelector("body").prepend(btn);