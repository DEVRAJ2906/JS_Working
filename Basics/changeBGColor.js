// Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

let btn = document.createElement("button");
btn.innerText = "Change Theme";
btn.style.padding = "10px";
btn.style.textAlign = "center";
btn.style.color = "lightblue";
btn.style.backgroundColor = "darkblue";

document.querySelector("body").prepend(btn);

let newbtn = document.querySelector("button");
let bgcolor = "light";

newbtn.addEventListener("click", () => {
    if(bgcolor === "light"){
        document.querySelector("body").style.backgroundColor = "black";
        bgcolor = "dark";
    }else{
        document.querySelector("body").style.backgroundColor = "white";
        bgcolor = "light";
    }
});