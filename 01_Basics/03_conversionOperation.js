let score = "Maha";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number (score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// undefined => NaN
// "string" => NaN
// null => 0
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true 0 => false
// "" => false
// "string" => false

let age = 25;

let stringAge = String (age);

console.log(stringAge);
console.log(typeof stringAge);
