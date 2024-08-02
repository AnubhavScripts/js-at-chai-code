//dates

let myDate =  new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString ());
// console.log(typeof myDate); //object 

// let myCreatedDate = new Date(2024,0,23,5,30);
// let myCreatedDate = new Date("2024-01-23"); **used in usa
let myCreatedDate = new Date(" 01-23-2024"); //in india
// console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
 newDate.toLocaleString('default',{
     weekday: "long"
 })