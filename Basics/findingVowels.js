//Create  a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

let string = prompt("Enter any string or word :");

function checkVowel(s){
    let num = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for(let i=0; i<s.length; i++){
        for(let j=0; j<vowels.length; j++){
            if(s[i] === vowels[j]){
                num++;
            }
        }
    }
    console.log(`Number of vowels in your word are ${num}`);
}

checkVowel(string);