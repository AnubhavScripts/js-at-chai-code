const user = {
     username : "anubhav",
     price:999,   
     
     welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);// give the current context of the program so it will return the contents of user

        
        
     }
}
// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()

// console.log(this); ## this will return nothing becoz it represents nothing outside the user function

//trivia - browser ke liye global object windows hai

// function chai(){
//        let username ="anubhav"
//        console.log(this);
       //### this can't be used in function it can be used in objects
// }
// chai()

// const user = function (){
//        let username ="anubhav"
//        console.log(this);
       //### this keyword can't be used in function it can be used in objects
// }
// chai()

const chai = () => {//arrow function
       let username ="anubhav"
       console.log(this.username);// yahan bhi this keyword use nhi hota hai
}

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3,4));

// const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) =>  (num1 + num2); ## paranthesis mein return keyword nhi likhna hota hai but curly braces mein likhna hoga

const addTwo = (num1, num2) =>  ({username: "anubhav"}); 

console.log(addTwo(3,4));
