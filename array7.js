//Create some arrays
const numbers = [43, 54, 34, 90, 8, 8];
const number2 = new Array(7, 45, 44, 43, 98);
const fruit = ['fui', 'apple', 'banana'];
const mixed = [33, 'suger', true, undefined, null, {a:1}, new Date()];
let val;

//Get array length
val = numbers.length;

//Check if is a array
val = Array.isArray(numbers);
//Get single value
val = numbers[3];
val = numbers[0];
//Insert into array
numbers[2] = 100;
//Find index of value
val = numbers.indexOf(90);

//Mutating arrays
//Add on to end
// numbers.push(250);
// //Add on to front
// numbers.unshift(10);
// //Take off from end
// numbers.pop();
// //Take off from the front
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// //Reverse
// numbers.reverse();

//Concatenate array
val = numbers.concat(number2);

//Sorting arrays
val = fruit.sort();
val = numbers.sort();

//Use the "compare function"
val = numbers.sort(function(x, y){
    return x-y;
});

//Reverse sort
val = numbers.sort(function(x,y){
    return y-x;
});

//Find
function under50(num){
    return num < 50;
}
function over50(num){
    return num > 50;
}
val = numbers.find(under50);

console.log(numbers);
console.log(val);