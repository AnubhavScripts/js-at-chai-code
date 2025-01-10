// for 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number ");
        
    }
    // console.log(index);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value is ${i}`);
    
    for (let j = 1; j <= 10; j++) {
    //  console.log(`inner loop value is ${j} and inner loop is ${i}`);
    // console.log(i + '*' + j + '=' + i*j);   
    }
}

let myarray = ["flash", "batman", "superman"]
// console.log(myarray.length);
for ( let index =0; index<myarray.length ; index++){
    let element =  myarray[index];
    // console.log(element);
    
}
// break and continue
// for (let index = 1; index <= 20; index++) {
//     if (index==5) {
//         console.log(`dectected 5`);
//         break;
        
//     }
// console.log(`value of i is ${index}`);
//}
for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`dectected 5`);
        continue;
        
    }
console.log(`value of i is ${index}`);   
}