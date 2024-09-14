
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
// console.log(loginUserMessage()); ###agar koi bhi value put nhi kiya and tb agar 
//print krte hai toh #undefined aata hai @null nhi aata 

//###########################3
// shopping cart
/*function CalculateCartPrice (val1, val2 ,...num1){// rest operator
     return num1;
      
}
console.log(CalculateCartPrice(200, 400, 500,800, 900));*/

const user = {
     username: "phone",
     price: 19999 ,
}
function handleUser(anyobject)
{
     console.log(`username is ${anyobject.username} and its price is ${anyobject.price}`);
     
}
handleUser(user)
/*handleUser ({
     username: "anubhav",
     price: 1999
})*/

const newArray = [200,400, 500, 600]

function returnSecondValue(getArray){
     return getArray[2]

}
console.log(returnSecondValue(newArray));




