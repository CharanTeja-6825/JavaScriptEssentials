let loop = true;

let outcomes = [
    {
        p : 1,
        count : 0,
    },
    {
        p : 2,
        count : 0,
    },
    {
        p : 3,
        count : 0,
    },
    {
        p : 4,
        count : 0,
    },
    {
        p : 5,
        count : 0,
    },
    {
        p : 6,
        count : 0,
    }
]

const rollDice = () => {
    let result = Math.floor(Math.random() * (6) + 1);
    trackScore(result);
}

const trackScore = (result) => {
    let findOutcome = outcomes.filter((outcome) => outcome.p === result);
    findOutcome.map((value) => {
        value.count = value.count + 1;
    })
    console.log("Score Tracker : ");
    outcomes.forEach((val) => {
        console.log(`Outcome : ${val.p} Count : ${val.count}`);
    })
}

while(loop){
    const ip = prompt('Enter anything to roll dice | type exit to stop ! ');
    if(ip.toLowerCase() === "exit"){
        loop = false;
    }else{
        // console.clear();
        rollDice();
    }
}








