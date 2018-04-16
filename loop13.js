// for loop

// for(let i = 0; i < 10; i++ ){
    
//     if(i === 2){
//         console.log('2 is my favourite number');
//         continue;
//     }

//     if(i === 5){
//         console.log('Stop the loop');
//         break;
//     }
//     console.log('number ' + i);
// }

//While loop

// let i = 10;

// while(i < 10){
//     console.log('Number ' + i);
//     i++;
// }

//Do while
// let i = 20;

// do{
//     console.log('Number ' + i);
//     i++;

// }

// while(i < 10);


//Loop through array
const cars = ['Ford', 'Chevy', 'Honda', 'Buick'];


// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

//Foreach
// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// })

//MAP
// const users = [
//     {id:1, name:'John'},
//     {id:2, name: 'Sally'},
//     {id:3, name: 'Tina'},
//     {id:4, name: 'Nancy'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);

// For in loop
const user = {
    firstName: 'John',
    lasName: 'Doe',
    age:40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}