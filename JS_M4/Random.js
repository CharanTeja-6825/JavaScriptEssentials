// Math.random() can generate random floating point double values between
// 0 and 1 we can manipulate these values by multiplying them with
// other numbers and rounding them off;

const generateRandomDigit = (size) => {
    console.log(Math.floor(Math.random() * size)+1);
}

generateRandomDigit(10);
generateRandomDigit(100);
generateRandomDigit(1000);
generateRandomDigit(10000);
generateRandomDigit(100000);
generateRandomDigit(1000000);


const generateRandomInRange = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min + 1) + min));
}

console.log('Random numbers between range : ')

generateRandomInRange(3, 5);
generateRandomInRange(0, 5);
generateRandomInRange(3, 12);
generateRandomInRange(30, 512);
generateRandomInRange(33, 5111);
generateRandomInRange(3986, 4000);
