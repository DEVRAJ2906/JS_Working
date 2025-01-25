//For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50];

console.log(`Array before applying an offer of 10% :`);
for(let i=0; i<items.length; i++){
    console.log(`item ${i} value is ${items[i]}`);
}


console.log("\nArray after applying an offer of 10% :")
for(let i=0; i<items.length; i++){
    items[i] = (items[i]*10)/100; 
    console.log(`item ${i} value is ${items[i]}`);
}