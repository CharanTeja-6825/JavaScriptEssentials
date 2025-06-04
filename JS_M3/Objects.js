// Def : objects in javascript are containers which
// contain pairs of keys and values inside a {}
// where keys are the labels and values are the data contained
// inside the key.


const obj = {
    name:"CHARAN",
    country : "India",
    hobbies : [
        "Code", " eat", " do something exiciting"
    ],
    age: "19"
};

obj.name='Charan Teja Rathikindi';
obj.country='IND';


console.log(`Hobbies of ${obj.name.substring(0,6)} are ${obj.hobbies}`);

console.log(`Name : ${obj['name']}`);

delete obj.age;

console.log(obj);

// iterating thorugh object

for(const key in obj){
    console.log(`Key = ${key}`);
    console.log(`Values = ${obj[key]}`);
}
