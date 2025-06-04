

const students = [];
let loop = true;

const addStudent = () => {
    const student = {
        name:"",
        id:"",
        gender : "",
        age : "",
        score : 0,
    }

    for(const key in student){
        input = prompt(`Enter Student ${key}`);
    }

    students.push(student);

    window.alert('Student added Successfully');
};

const removeStudent = () => {
    const id = prompt('Enter student ID : ');
    const index = students.findIndex((student) => student.id === id);
    if(index !== -1){
        students.splice(index, 1);
        window.alert(`${id}, removed successfully !`);
    }else{
        window.alert(`${id}, not found !`);
    }
}

const viewAllStudents = () => {
    if(students.length == 0){
        window.alert('Student List is Empty');
    }else{
        students.forEach((student) => {
        console.log(`${student.name}`);
        console.log(`${student.age}`);
        console.log(`${student.gender}`);
        console.log(`${student.score}`);
        console.log(`${student.id}`);
        })
    }
}

const findStudentById = () => {
    const id = prompt('Enter student id : ');
    const filteredStudent = students.findIndex((student) => student.id === id);
    if(filteredStudent === null){
        window.alert(`${id} is not found`);
    }else{
        for(const key in filteredStudent){
            console.log(`${key} : ${filteredStudent[key]}`);
        }
    }
}

const filterByScore = () => {
    const score = parseInt(prompt('Enter score to be filtered ? '));
    if(score >= 100){
        window.alert('Score must be less than 100');
    }else{
        const scoreStudents = students.filter((student) => student.score >= score);
        scoreStudents.forEach((student) => {
        console.log(student);
        })
    }
}


while(loop){
    console.log('Select : ');
    console.log('1.Add Student');
    console.log('2.find Student');
    console.log('3.remove Student');
    console.log('4.filter Student by score');
    console.log('5.View All Students');

    const choice = parseInt(prompt('Enter you choice : '));

    switch (choice) {
        case 1:
            addStudent();
            break;
        case 2:
            findStudentById();
            break;
        case 3:
            removeStudent();
            break;
        case 4:
            filterByScore();
            break;
        case 5:
            viewAllStudents();
            break;
        default:
            loop = false;
            break;
    }
}

