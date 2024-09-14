

if (true){
    let a = 10
    const b = 20
    var c = 30// baat aisi hai kyunki iska scope defined hai bs if ke bracket tk
}// hi isiliye ye bahar print nhi hona chahyie
console.log(a);
console.log(b);
console.log(c);// upar wale dono nhi hue print but ye ho gya
// jo ki issue hai var ke saath , if wala statement is block scope and bahar is global scope
