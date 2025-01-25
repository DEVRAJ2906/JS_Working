//Create a new class called Admin which inherits from User.
//Add a new method called editData to Admin that allows it to edit website data

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(`Your name is ${this.name} and your email is ${this.email}`);
    } 
}

class Admin extends User{
    editData(name, email){
        this.name = name;
        this.email = email;
    }
}

let admin1 = new Admin();
admin1.editData("devraj","devrajtadbi@gmail.com");