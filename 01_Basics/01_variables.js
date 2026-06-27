const accountId = 144553;
let accountEmail = "mahaabdul@gmail.com";
var accountPassword = "12345";
accountCity = "Lahore";
let accountState;   //Undefined

// accountId = 2    not allowed

accountEmail = "mahaabdulmukhtar@gmail.com";
accountPassword = "6789";
accountCity = "Kasur";
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])