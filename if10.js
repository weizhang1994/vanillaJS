//if(something)
//  do something
//}else {
//   do something else
//}

const id = 100;

// //Equal to
// if(id == 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// //Not Equeal to
// if(id != 101){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// //Equal to value and type
// if(id === 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// //Equal to value and type
// if(id !== 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }


// //Wrong way to test if ID undefined
// if(id){
//     console.log(`The ID is ${id}`)
// } else {
//     console.log(`No ID`)
// }
// //Correct way to test if ID undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`)
// } else {
//     console.log(`No ID`)
// }

//greater or less than
// if(id > 200){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

//IF ELSE

const color = 'yellow';

// if(color === 'red'){
//     console.log('Color is red');
// } else if(color === 'blue'){
//     console.log('Color is blue');
// } else {
//     console.log('Color is nor red nor blue');
// }

// LOGICAL OPERator

const name = 'Steve';
const age = 60;

// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`)
} else if(age >=13 && age <=19){
    console.log(`${name} is a teenager` );
} else {
    console.log(`${name} is an adult`);
}
// OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else{
    console.log(`${name} is registerd for the race`);
}

//ternary operator
console.log(id === 100 ? 'correct' : 'incerrect');

//Without braces
if(id ===100)
    console.log('correct');
else
    console.log('ince');
