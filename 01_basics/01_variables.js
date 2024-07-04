const accountID= 2345
let accountEmail="anu123@hgb.com"
var accountPassword="8989"
accountCity = "patna" 

// accountID= 3.  not allowed
accountEmail = "ABC@default.com";
accountPassword="87878";
accountCity="delhi";
accountState="up"
console.log(accountID);
console.table([accountEmail,accountID,accountPassword,accountCity,accountState]);

/* prefer not to use varr as 
it creates issue in block 
and functional scope*/