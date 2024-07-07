// console.log( 2 > 2);
// console.log( 2 >= 2);
// console.log( 2 == 2);
// console.log( 2 != 2);
// console.log( 2 <= 2);

console.log( "02" > 1);
console.log( "2" > 0);

console.log(null == 0); // equity check can't do that becoz its method to work is diff.
console.log(null >= 0);// comparison converts null to a number
console.log(null > 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);  //will give all value false

// === strict check

console.log("2" == 2); // idhar conversion ho jata hai datatypes ka     #true
console.log("2" === 2); // idhar type of data bhi check hota hai.  #false