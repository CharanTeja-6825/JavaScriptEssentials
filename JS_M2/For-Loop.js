const array = ['Charan', 'teja', 'rathikindi', 'Btech'];

console.log('General Usage of for loops');

// Definition : For-loops are used to repeat a block of code with a iterative varible 
// and a terminating condition with a updation condition.

for(let i = 0 ; i <= 5 ; i++){
    console.log('Index i : ', i);
}

console.log('This a usage of array');

for (let i = 0; i < array.length; i++) {
   console.log('Index : ', i, array[i]);
}