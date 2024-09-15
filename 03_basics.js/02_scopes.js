

if (true){
    let a = 10;
    const b = 20;
    // console.log("inner ",a);
    
    // var c = 30;// baat aisi hai kyunki iska scope defined hai bs if ke bracket tk
}// hi isiliye ye bahar print nhi hona chahyie
// console.log(a);
// console.log(b);
// console.log(c);// upar wale dono nhi hue print but ye ho gya
// jo ki issue hai var ke saath , if wala statement is block scope and bahar is global scope


// #### NESTED SCOPE //

function one() {
    const username = "anubhav"
    
    function two () {
    
        const website = "youtube"
        // console.log(username);
        
    }

    two()
    // console.log(website);### // #ye pritn nhi hoga kyunki chota scope bde scope ko
    // access kr skta hai but bda scope chote scope ko nhi kr skta , accha nhi lgta hai
    
}
one()// function call kiya

if (true) {
    const username1 = "exonova"
    if (username1 === "exonova") {
        const website = " snapchat"
        // console.log(username1 + website);
    }
    // console.log(website);// scope ke bahar hai nhi print hoga
    
}
// console.log(username);// scope ke bahar hai nhi print hoga



// ++++++++++++ INTERESTING ++++++++++++++++++++++++++++++


addOne(5)// agar pehle bhi intialise kr diya to ye print ho jaayega
 function addOne(num){
    return num + 1
 }

const addtwo = function(num){
    return num + 2
}
addtwo(5)// agar isko pehle intialise kr diya toh nhi ho paayega print 
//kyunki humlog value creation ke saath value holding bhi kr rhe hai