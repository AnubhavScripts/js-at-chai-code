//array 

const myArr = [3, 2,  4, 5, 8, 9]
const myHero = ["shaktiman" , "naagraj" , "flyingJatt"]
const arr2= new Array(3,4,5,6,7,8)

console.log(myArr[1]);

//Array methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9) // adds the number in the first place of arrays
// myArr.shift() // removes the first digit of the original array

console.log(myArr.includes(4));
console.log(myArr.indexOf(3));
console.log(myArr);

const newArr = myArr.join()// converts array into string
console.log(newArr );

// slice & splice

console.log("A" ,myArr);

const myn1= myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("c", myArr);
console.log(myArr);
