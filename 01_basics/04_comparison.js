// console.log( 2 > 2);
// console.log( 2 >= 2);
// console.log( 2 == 2);
// console.log( 2 != 2);
// console.log( 2 <= 2);

console.log( "02" > 1);
console.log( "2" > 0);

console.log(null == 0); // equity check can't do that becoz its method to work is diff.   //false
console.log(null >= 0);// comparison converts null to a number. //true
console.log(null > 0); //false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);  //will give all value false

// === strict check

console.log("0" == false); // idhar conversion ho jata hai  values  ka     #true. {both the value is same}
console.log("2" === "3"); // idhar type of data bhi check hota hai.  #false. {one is a string a another is a number}