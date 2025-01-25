//Creating an object to store information of any real world entities

//creating pen named object
const pen = {
    Name : "Parker Jotter Standard CT Ball Pen",
    Color : "Black",
    Rating : 4,
    Prize : 270,
    Discount : 5,
};

    console.log("Here, we are displaying information about pen.");

for(val in pen){
    console.log(val+" is "+pen[val]+".");   //printing information
}

console.log("----------");
//creating profile named object
const profile = {
    Name : "Devraj Tadvi",
    Post : 195,
    followers : 569000,
    following : 4,
}

    console.log("Here, we are displaying information about profile.");

for(value in profile){
    console.log(value+" is "+profile[value]+".");   //printing information
}