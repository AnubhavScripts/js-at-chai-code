// Immediately Invoked Function Expressions {iife}

(function chai (){
    console.log("db connected");
    // named iife
})();// first one covers up the function declaration and second contains the execution part
// iife is also used to tackle the pollution caused by variables in global scope

(() => {
    console.log("db connected two");
    // unnamed or simple iife
})()
// this was not getting printed because of semicolon not given in the first code or previous block of code