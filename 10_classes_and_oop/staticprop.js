class User {
   constructor(username){
    this.username = username;
   }
   logMe(){
    console.log(`username:${this.username}`);
   }
   static createID(){
    return `123`
   }
}
const anubhav = new User("edxonva")
// console.log(anubhav.createID());
class teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}
const exo = new teacher("exon","abc@gf.com")
console.log(exo.createID());
