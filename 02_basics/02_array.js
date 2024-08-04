 const marvel_heros = ["thor", "ironman","spiderman"]
 const dc_heros = ["superman","flash","batman"]

//  marvel_heros.push(dc_heros)
//  console.log(marvel_heros);

//  console.log(marvel_heros[3][2]);
 
//  const allHeros = marvel_heros.concat(dc_heros)// it requires new array for proper functioning
//  console.log(allHeros);// through concat 2 arrays got merged seemlessly

// spread operator
const allNewHeros= [...marvel_heros,...dc_heros]// spread does the same as concat but is more 
console.log(allNewHeros);// convinient as we can add any number of arrays

const another_array = [1, 2, 3, 4, [5, 6, 7], 8, 9, [10, 11, [12, 13 ,13 ], 15 ], 16]
const another_array_2 = another_array.flat(Infinity)
console.log(another_array_2);// array ke andar array ko bhi ,ye ek jagah concatenate kr deta hai

console.log(Array.isArray("anubhav"));
console.log(Array.from("anubhav"));
console.log(Array.from({name: "Anubhav"}));// returns empty array, we must use keys

let score1=100
let score2 =200
let score3=300
console.log(Array.of(score1, score2, score3)); // forms an array




 