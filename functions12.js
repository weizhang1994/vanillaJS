//function decareation

function greet(firstname = 'John', lastname = 'Doe'){
    // if(typeof firstName === 'undefined'){
    //     firstName = 'John'
    // }
    return 'Hello ' + firstname + ' ' + lastname;
}


console.log(greet('wei', 'zhang'));

//Function expressions

const square = function(x){
    return x*x;
};

console.log(square());

//Immediately invokable function expressions - IIFES

// (function(){
//     console.log('IFFE run..')
// })();

// (function(name){
//     console.log('Hello ' +name)
// })('brad');

//PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}
    todo.add();
    todo.edit(22);
    todo.delete();