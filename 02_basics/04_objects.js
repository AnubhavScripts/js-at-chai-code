// objects declared through the help of singleton or the constructor method

// const tinderUser = new Object()                    ##singleton hai ye
const tinderUser = {} // not a singleton

tinderUser.id = "exonova123"
tinderUser.name = "anubhav"
tinderUser.lastLogedIn = false

// console.log(tinderUser);

const regularUser = {
           email : "ap98@test.com",
           fullName: {
                userName:{
                    firstname : "anubhav",
                    lastname: "parashar",
                }
           }
}

// console.log(regularUser.fullName);

const obj1 ={1: "a", 2:"b"}
const obj2= {3:"c", 4:"d"}

// const obj3 = {obj1, obj2} ## one way
// const obj3= Object.assign({}, obj1, obj2)// most effective way 
const obj3 = {...obj1, ...obj2}
console.log(obj3);
 
const users = [
    {

    },
    {

    },
    {

    },
]
user[1].email // acessing the first value of the objecct 

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

