// #Primitive data type
// 7 types;- boolean , number, null , undefined , string, symbol, BigInt

const score = 100;
const scoreValue = 200.33;
const temp = null;
const isLoggedIn= false;
let debit;

const id= Symbol('123');
const anotherId= Symbol('123');
console.log(id===anotherId); // the values of two variable is not same

const bigNumber= 1234768746875364689n;


// Reference data type (Non Primitive):
// Functions, Object , Arrays
const heroes = ["shaktiman", "naagraj", "hanuman"] ;// array
let MyObj= {
    name: "anubhav",
    age: 19,
}

const myFunction = function () {
    console.log( "hello world");
    
}

console.log(typeof heroes);// object
console.log(typeof myFunction);// function
console.log(typeof MyObj);// object
console.log(typeof bigNumber);// bigInt
console.log(typeof temp);//null ==> object
console.log(typeof id);// symbol
console.log(typeof debit);// undefined
console.log(typeof scoreValue);// number
console.log(typeof temp);// objeCt


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory types
// Stack (Primitive), Heap (Non-Primitive)

let myYouTubeName = "ExoNova";

let anotherName = myYouTubeName;
anotherName = "anubhav";

console.log(anotherName);// anubhav 
console.log(myYouTubeName);// exonova
// ye isi liye hua kyunki stack memory mei jaisi hi humne anothername ko value diya usko myyoutubename ka copy mila original data nhi mila

let userOne = {
    email: "anubhav@abc.com",
    upi : "abc@hdfc"
}
 let userTwo= userOne

 userTwo.email = "exonova@adx.com";

 console.log(userOne.email);// exonova@adx.com
console.log(userTwo.email);// exonova@adx.com

// idhar same value isilliye aaya kyunki heap memory mein reference ek se hi lete hai dono , so agar ek change 
// dono ka hi value change hoga. mtlb real value change hogi.
