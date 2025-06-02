// Def : Functions in javascript are reusable blocks of code which can take inputs from any point of the
// program and return or print an output

// --> No Parameters

// function hello(){
//     console.log('HELLO THERE !');
// }

// hello();


// --> Multiple Parameters - 1 

// function add(m1, m2){
//     console.log(`Sum : ${parseFloat(m1)+parseFloat(m2)}`);
// }

// add(9.8, '8.897');


//  --> Multiple Parameters - 2

// function factorial(num){
//     let fact = 1;
//     for(let i = 1;i<=num ; i++){
//         fact*=i;
//     }
//     console.log(`Factorial of ${num} : ${fact}`);
// }

// factorial(5);

// Anonymous functions the output will be assigned to a variable and used.

// const greet = function(name){
//     return `Hello, ${name}`;
// }
// const greeting = greet('Charan');
// console.log(greeting);

// Arrow Functions - The whole function itself is assigned to the variable

// const greet = (name) => `Hello, ${name}`;

// console.log(greet('Charan'));

// Function Scopes

/* local variables are bound to the function unless they are initialized with var
global variables can be used inside and outside and anywhere in the program
const, let have block scope that means they are bound to the {} where they
are initialized. */

let globalVar = 'This is global';

var localVar = 'This is outside the function';

console.log(localVar);

function testing(){
    localVar = 'this is inside the function and is modified';
    console.log(globalVar);
    console.log(localVar);
}

testing();

console.log(globalVar);
console.log(localVar);
