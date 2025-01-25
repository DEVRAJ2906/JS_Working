// Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(`Your name is ${this.name} and your email is ${this.email}`);
    } 
}

let user1 = new User("devraj", "devrajtadvi0@gmail.com");
user1.viewData();