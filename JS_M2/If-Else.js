let age = 19;

// General Usage of if-else

if (age >= 19) {
    console.log('you are eligible to vote');
}else{
    console.log('You are not eligible to vote');
}

//Nested if-else

if(age >= 25){
    if(age > 20){
        console.log('You are older than 20');
    }else{
        if(age > 15 && age <=18){
            console.log('You are near the eligibility criteria');
        }
    }
}else{
    console.log('You are not eligible to go inside the nested statements');
}


// if-else ladder

if(age > 30){
    console.log('stop 1');
}
else if(age > 25){
    console.log('stop 2');
}else if(age > 35){
    console.log('stop 3');
}
else{
    console.log('last stop');
}


//if-else with multiple conditions checked at once 

