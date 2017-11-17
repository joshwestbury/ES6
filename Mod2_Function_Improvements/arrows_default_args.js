/*arrow functions have three main benefits
   1. They are much more concise
   2. They have implicit returns, which allow us to write one line code.
   3. They do not rebind the value of 'this'  when using an arrow function inside of another function.
*/

const names = ['wes', 'kait', 'lux'];

//write a function that attaches 'bos' to the end of each value in the array.

//to do this, we will use the map functions

const fullName = names.map(function(name) {
    return `${name} bos`;
});

console.log(fullName);
//>>>[wes boss, kait boss, lux boss]

//__________________________

//We can write the same code more succinctly using arrow functions

const fullName2 = name.map((name) => {
    return `${name} bos`;
})

console.log(fullName2);
//>>>[wes boss, kait boss, lux boss]

//note that the parentheses around the 'name' argument is optional if there is only one argument.

//____________________________

//arrow functions also allow us to make implicit returns

const fullName3 = name.map(name => return `${name} bos`);

console.log(fullName3);
//>>>[wes boss, kait boss, lux boss]

const fullName4 = name.map(() => return `cool bos`);

console.log(fullName4);
//>>>[cool boss, cool boss,  cool boss]

//_____________________________

/*arrow functions are anonymous functions. That is, they are not named.  But you can put them in a variable, as in fullName4 above.*/

const sayMyName = (name)  => {alert(`Hello ${name}`)}

sayMyName('Josh');
//alert will say "Hello Josh"
