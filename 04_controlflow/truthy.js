 const userEmail= []

//  if(userEmail){
//     console.log("got the mail");
    
//  }else{
//     console.log("don't have the mail");  
//  }

//falsy values

// 1. false,
// 2. 0 , -0, 
// 3. 0n in bigInt,
// 4. "",
//  5. null, undefined, NaN, 

// *************************************************************************************************

//truthy values

// 1. "0",  'false' both in single or double quotes, 
// " ", [], {}, function () {}

// if (userEmail.length===0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("bject is empty");
    
}

//****************************************************************

// Nullish coalescing operator(??): null or undefined
// the above operator is only made for null and undefined cases jisme we have to give
// value either null or the value 

let val1;

// val1= 5??10;
// val1= null?? 10
// val1= undefined ?? 15
val1= null?? 10?? 15// 10 value liya isne



 console.log(val1);
 
//*(****************)
 // terniary operator

//  condition ? true : false 
const iceteaprice = 100
iceteaprice<=80?console.log("less than 80") : console.log("more than 80");

