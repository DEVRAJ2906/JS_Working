//Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the <p> element.
//Did you notice, how you overwrite the class name when you add a new element. Solve this problem using classList.

let p = document.querySelector("p");
// p.setAttribute("class", "second");

p.classList.add("second");