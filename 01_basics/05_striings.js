const name = "anubhav";
const age = 19;

console.log(`hello my name is ${name} and my age is ${age}`);

const gameName = new String('exo-nov-a');
// console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const newOne = "   exonova   ";// removes the unnecessary spaces
console.log(newOne);
console.log(newOne.trim());

const url = "https://anubhav.com/anubhav%20exo";
console.log(url.replace('%20' , '-'));// replaces items
console.log(url.includes('anubhav') );// true
console.log(url.includes('abcdfg') );//false

console.log(gameName.split('-'));// splits the word at the given character