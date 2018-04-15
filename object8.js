const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@gmail.com',
    hobbies:['music', 'sport'],
    address:{
        city:'Miami',
        state:'FL'
    },
    getBirthYear: function(){
        return 1987 - this.age;
    }
}
let val;

val = person;
//Get specific value
val = person.frstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'John', age:30},
    {name: 'Mike', age:23},
    {name: 'Sally', age:23}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}