// Todo list using the spread operator and while loop

let tasks = [];


// for(let i = 0; i<tasks.length;i++){
//     console.log(`Task : ${i+1} : ${tasks[i]}`);
// }



while (true) {
    let task = prompt('Enter the task');
    if(task.toLowerCase() === 'done'){
        break;
    }
    tasks.push(task); 
}

console.log('Your To-Do list : ')

for (let index = 0; index < tasks.length; index++) {
    const element = tasks[index];
    console.log(`Task ${index+1} : ${element}`);
}


