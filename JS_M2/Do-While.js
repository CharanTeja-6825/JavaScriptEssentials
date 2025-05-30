// Do while is different from while loop because it runs atleast once
// before checking the condition is checked, so we can run the code block
// once intially even the condition is wrong !

let i = 5;
do {
    console.log('I am in the loop even the condition is wrong and the i value is', i);
} while (i != 5);