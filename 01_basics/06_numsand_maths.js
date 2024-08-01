const score = 400
// console.log(score);

const balance = new Number(100);
// console.log(balance);

console.log(balance.toString().length);// now the number is converted into string
// console.log(balance.toFixed(2)); // for more accuracy in numbers .shows in points (100.00)

const otherNumber = 23.456;
// console.log(otherNumber.toPrecision(3));// ye first 3 numbers ko precise kr deta hai jaise isme 23.5
 
const hunderds = 1000000;

//console.log(hunderds.toLocaleString('en-IN'));// shows the number in commas in indian system
 

// ==+++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++

// console.log(Math.abs(-4));// converts -ve number into +ve
// console.log(Math.round(4.5));// round offs the number 
// console.log(Math.ceil(4.2));// rounds off to upper number
// console.log(Math.floor(4.9));// rounds off to lower number :- 4

// console.log(Math.min(4,3,5,6,9));// min value from given numbers
// console.log(Math.max(4,3,5,6,9));// max value from given numbers

console.log(Math.random); // gives value between 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min );
