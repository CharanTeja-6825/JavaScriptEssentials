// for of loop

const items = ["mobile" , "laptop", "ipad", "television"];

// for(let item of items){
//     console.log(item);
// }


// for each loop -> for each loop uses callback function to iterate over the iterable items.

// items.forEach(function(item){
//     console.log(item);
// });

//  for ... in loop is used iterate over an object

const me = {
    name:'Charan',
    city:'Nellore',
    uni:'KL University'
};

for(const key in me){
    console.log(`Key : ${key}`);
    console.log(`Value for me[${key}] : ${me[key]}`);
}