//Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
//1. Remove the first company from the array
//2. Remove Uber and Add Ola in its place
//3. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift();
console.log("You have removed the element of an array from the beginning.");
console.log(companies);
console.log("\n");

let removedCompany = companies.splice(1,1,"Ola");
console.log(`You have removed the ${removedCompany} company and added the Ola company in place of it`);
console.log(companies);
console.log("\n");

companies.push("Amazon");
console.log("You have added Amazon company at the end.");
console.log(companies);
