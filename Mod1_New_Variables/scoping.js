//Two new variables 'let' and 'const'

//var variables can be reassigned and updated
var width = 100;
console.log(width);
//>>> 100

width = 200;
console.log(width);
//>>> 200

var width = 300;
console.log(width);
//>>> 300

//var variables are function scope. That is they are only available within the function that they are created.
//or if they are not created within a function they are globally scoped and available in the window.

//even though dogYears is within an if statement, it is still globally scoped to the window because it is not in a function
var age = 100;
if(age > 12) {
    var dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`);
}
// >>> You are 700 dog years old!

//___________________

//unlike var, let and const are scoped to the block not the function. (a block is code within {...} )
//If we use let or const in the if statement below, it will be scoped to that block only.

var age = 100;
if(age > 12) {
    let dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`);
}

var age = 100;
if(age > 12) {
    const dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`);
}

//You cannot redeclare a let variable within your code.

//for example, this is not allowed:
let width = 100;
let width = 200;
console.log(width);
//>>> 100

//___________________

//The difference between const and let

//let is made to be updated, where const is not.

let width = 100;
width = 200;
console.log(width);
//>>> 200

//You use const with a variable you never want to change.
//***NOTE that while you can't update a const variable, you can update the properties of a const variable.

const person = {
    name: josh,
    age: 37;
}

person.age = 40;
console.log(person);
// >>> {
//     name: josh,
//     age: 40;
// }

//___________________

//Temporal Dead Zone

var pizza = 'pizza dish';
console.log(pizza);
//>>>pizza dish


console.log(pizza);
var pizza = 'pizza dish';
//>>>undefined (you can still access the variable, but not what it defines)

//with let and const, however you cannot access a variable before it has been defined. This is what is know as the temporal dead zone.
console.log(pizza);
let pizza = 'pizza dish';
//>>>error

console.log(pizza);
const pizza = 'pizza dish';
//>>>error

//___________________

//Which should you use: var, let, or const????

//Here are two approaches:

// First approach:
//use const by default
//use let only if rebinding is needed. That is, only if you need to update the value of your variable.
//never use var.

//Second approach:
//use var for top-level variables that are share accross many (especially larger) scopes.
//use let for localized variables in smaller scopes
//refactor let and const only after some code has been written and you're reasonably sure that you've got a case where there shouldn't be a variable reassignmet.
