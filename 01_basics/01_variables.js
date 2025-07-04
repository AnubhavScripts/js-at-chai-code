const accountID= 2345// const is used for constant value
let accountEmail="anu123@hgb.com"// let and var is used for variable and while var has scope issue, let is used.
var accountPassword="8989"
accountCity = "patna" 

// accountID= 3.  not allowed
accountEmail = "ABC@default.com";
accountPassword="87878";
accountCity="delhi";
accountState="up"
console.log(accountID);
console.table([accountEmail,accountID,accountPassword,accountCity,accountState]);

/* prefer not to use var as 
it creates issue in block 
and functional scope*/