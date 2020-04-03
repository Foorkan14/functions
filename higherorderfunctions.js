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