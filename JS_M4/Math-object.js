// Math object in java script is not a seperate object that is to be created 
// rather a built-in object which is made to be used with its methods..

// 1. Rounding a number

console.log(`Rounding 6.9 to ${Math.round(6.9)}`);

// floor value of a number

console.log(`Floor value of 6.9 is ${Math.floor(6.9)}`);

// ceiling value of a number

console.log(`Ceiling value of 6.9 is ${Math.ceil(6.9)}`);

// max, min between numbers

console.log(`Max Value : ${Math.max(5465, 786, 9999, 10000)}`);

console.log(`Min Value : ${Math.min(5465, 786, 9999, 10000)}`);

// Absolute Values using abs method

console.log(`Absolute Value of 2 - 3 : ${Math.abs(2 - 3)}`);
console.log(`Absolute Value of 3 - 2 : ${Math.abs(3 - 2)}`);


// Math.pow() --> returns base ** exponent

console.log(Math.pow(2, 20));

// Math.exp() --> returns e ** argument

console.log(Math.exp(3));

// Math.sqrt() --> returns square root of a function

console.log(Math.sqrt(16));


// function to check if a number is perfect square


const isPerfectSquare = (num) => {
    if(Math.sqrt(num) % 1 === 0){
        console.log(`${num} is perfect square`);
    }else{
        console.log(`${num} is not a perfect square`);
    }
}

console.log(parseInt(Math.random(10) * 1000));

isPerfectSquare(25);





