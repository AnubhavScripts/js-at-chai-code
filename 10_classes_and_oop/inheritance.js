class User {
 constructor(username){
    this.username = username;
 }
logMe(){
    console.log(`Username is ${this.username}`);
    
}
}
class Teacher extends User {
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;

    }

    addcourse(){
        console.log(`a new course is added by ${this.username}`);
        
    }
}
const chai = new Teacher("chai", 'abc@example.com','1234')
chai.addcourse()