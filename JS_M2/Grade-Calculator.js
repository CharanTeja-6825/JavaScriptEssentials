const avg = (marks) => {
    let aval = 0
    for(let mark of marks){
        aval+=mark;
    }
    return aval/3;
}

marks = [];

for(let i = 0;i < 3 ; i++){
    let subject = prompt(`Enter marks in Subject ${i+1}`);
    marks.push(parseFloat(subject));
}

const aval = avg(marks);

if(aval >= 90 && aval <=100){
    console.log(`Your average is ${aval} : and Grade is O`);
}else if(aval >= 80 && aval <90){
    console.log(`Your average is ${aval} : and Grade is A+`);
}else if(aval >= 70 && aval <80){
    console.log(`Your average is ${aval} : and Grade is B`);
}else{
    console.log(`Your average is ${aval} : and Grade is C`);
}