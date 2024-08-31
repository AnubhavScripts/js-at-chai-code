// declaring objects:-  constructor and object literals
// singleton forms in constructor method 
// Object.create = this is the constructor method

//1.)  object literals

const mySym = Symbol("key1")// when used outside objects.

const jsUser = {
    name: "Anubhav ",
    age:21,
    premika:"Sneha Gupta",
    relationPeriod: "1 Year",
mail: "kanubhav998@gmail.com",
 lastLoginDays:["monday", "tuesday"],
 [mySym]: "key8",// used for symbol,when it is declared in objects.[square bracket is a must when declared in objects.]

}
// console.log(jsUser.mail);

jsUser.mail= "kanubhav888@yahoo.com"
// Object.freeze(jsUser)
jsUser.mail = "kumar.yahoo.in"

// console.log(jsUser.mail);

jsUser.greetings = function(){
    console.log("hello JS user");
    
}

jsUser.greetingsTwo = function(){
    console.log(`Hello JS User, ${this.premika}`);
    
}

console.log(jsUser.greetings());

console.log(jsUser.greetingsTwo());


