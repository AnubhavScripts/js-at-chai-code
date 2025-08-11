class user {
    constructor(username, email, password) {
        this.email= email;
        this.username = username;
        this.password = password;
    }
    encryptpassword() {
        return `${this.password}abcdefu`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
const user1 = new user("chai",'abc@example.com','12344')

console.log(user1.changeusername())
console.log(user1.encryptpassword())


