const firstName = 'willdfdf';
const lastName = 'johnson';
const age = 24;
const str = 'Hello there my name is wei';
const tags = 'web design, web development , programing';
let val;

val = firstName + lastName;

//cConcatenation
val = firstName + ' ' + lastName;

//Append
val = 'Brad';
val += 'Traversy';


val = 'Hello, my name is' + firstName + 'and I am' + age;

//Escaping
val = "thst's awesoem";
val = 'Thst\'s awesome'

//Length
val = firstName.length;

//concat()
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[2];

//indexOf()
val =firstName.indexOf('l');
val =firstName.lastIndexOf('l');

//charAt()
val = firstName.charAt('2');
//Get last har
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0,4);

//slice()
val = firstName.slice(0, 4);
val = firstName.slice(-2);

//split()
val = str.split(' ');
val = tags.split(',');

//replace()
val =str.replace('Brad', 'jack');

//includes()
val = str.includes('Hello');
console.log(val);