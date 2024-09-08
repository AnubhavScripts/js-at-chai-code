
function sayMyName(){
console.log("e");
console.log("x");
console.log("o");
console.log("n");
console.log("o");
console.log("v");
console.log("a");
 
}
sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers (number1,number2){
//   let result = number1 + number2  
//   return result  ##agar ye end mei hai toh iske baad kuch print nhi hoga
return number1 + number2
        
     } 
addTwoNumbers(1,2)//3 is output
// console.log("result:", result); 

function loginUserMessage(username){
     if (username === undefined) {
          console.log("Please enter username");
          return

     }
     return `${username} just logged in`
}

// console.log(loginUserMessage("anubhav"));
console.log(loginUserMessage());// agar koi bhi value put nhi kiya and tb agar 
//print krte hai toh #undefined aata hai @null nhi aata 



