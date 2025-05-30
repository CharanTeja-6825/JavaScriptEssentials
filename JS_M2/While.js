// While - loop : while loop is not as good and organized as a for loop it contains only
// terminating condition as the argument and until the condition is broken the loop lives.
// we need to write the declarations outside the loop and updations inside the loop

let i = 1;

while (i < 5) {
    console.log(i);
    i++;
}

let userInput = '';

while(userInput !== 'Jai Balayya'){
    userInput = prompt('Answer the question correctly !');
    console.log('Wrong Answer !');
}