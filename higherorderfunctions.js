//we can also store multiple functions in a array

function add(x, y){
    return x + y;
}

const subtract = function(x, y){
    return x - y;

}

function multiple(x, y){
    return x * y;
}

const divide = function(x, y){
    return x / y;
}


const operations = [add, subtract, multiple, divide];

console.log(operations[1]); // we will get subtract function

//now if we want to use subtract function that is within the operations array we will do:

console.log(operations[1](100, 4));

//the reason why we would store functions within a array is to use them with loops

for (let num of operations){
    let result = num(30, 5); //now since num will go thru this array, becoming a different function with each loop, it will then use the number's 30 and 5 in each function
    console.log(result);
}

//storing them in a object

const thing = {
    doSomething: multiple //doSomething is a object and it's value is the multiple function
}


//higher order functions

//higher order functions are functions that operate on/with other functions. 
//they can accept other functions as arguments, or they can return a function


//example 1 function that accepts other functions as arguments

