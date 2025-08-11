// let myname= "anubhav  "

// console.log(myname.trueLength);

let myHeros = ["thor","spiderman"
]

let heroPower = {
    thor :"spark",
    spiderman:"sling",
    spiderpower : function (){
      console.log(`spidy power is ${this.spiderman}`);
      
    }
}
 
Object.prototype.anubhav = function (){
console.log(`anubhav is present in all objects`);
}
// heroPower.anubhav()
// myHeros.anubhav()

Array.prototype.sayname= function () {
    console.log(`anubhav says hello`);
}
myHeros.sayname()
// heroPower.sayname()

const teacher =  {
    makevideos : true
}

const TeacherAssistant = {
    isAvailable : false

}
const TAsupport =  {
        makeAssignment : 'js assignment',
        fulltime : true
}