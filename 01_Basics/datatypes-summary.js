//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["superman", "batman", "spiderman"];
let myObj = {
    name: "ahsan",
    age: 25,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



/* *************** 
Stack (Primitive) => Copy of original value
Heap (Non-Primitive) => Reference of original value
*/


let myName = "Maha";

let myFullName = myName;
myFullName = "Maha Abdul Mukhtar";

console.log(myName);
console.log(myFullName);

let user1 = {
    email: "example@gmail.com"
}

let user2 = user1;

user2.email ="user2@gmail.com";

console.log(user1.email);
console.log(user2.email);
