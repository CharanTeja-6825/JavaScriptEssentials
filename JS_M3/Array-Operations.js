// Common operations which are built - in methods in the array are,

// push, pop, shift, unshift

const OS = ['Mac', 'Windows', 'Linux', 'Ubuntu'];

console.log(`Initial Array : ${OS}`);

// push : Adds element at the end of the array

console.log(OS.push('MS-DOS')); //prints the new length of the array

console.log(`Modified Array : ${OS}`);

// pop : removes and returns the last added element of the array

const latest = OS.pop();

console.log(`Latest Operating System (popped item) : ${latest}`);

console.log(`Updated Array : ${OS}`);

// shift : shift operation deletes the initial element in the array by shifting the indices.

console.log(OS.shift()); // returns the added element like pop operation.

console.log(OS);

// unshift : unshift operation adds the element at the start of the array.

console.log(OS.unshift('Mac OS')); // returns the new length of the array.

console.log(OS);


// splice operator : 
//  -> operation 1 : select index, from that you can delete how many elements that
// you want for yourself.

// -> operation 2: operation 1 + add another string argument for the element which 
// can be replaced at that position.

// let's start : 

// operation 1:

OS.splice(2,1);

console.log(OS);

// operation 2 :
OS.splice(1,2,'Arch-Distro')

console.log(OS);


// filter method is used to filter element
// from the actual array based on a specific
//  condition

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numbers.filter(num => num % 2 === 0);
const odds = numbers.filter(num => num % 2 !== 0);

console.log(numbers);
console.log(evens);
console.log(odds);


// map method is used to operate each element in  the array
// using the lambda function in an iterative
// such that a fixed operation will be performed
// on each element in the array and is updated.

const squares = numbers.map(num => num ** 2);
console.log(`Squares of the numbers : ${squares}`);

