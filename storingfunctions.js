//we can store functions within variables

//example 1 

const square = function (num) {
    return num * num;
}

// square(7); //we just called the function that is within the square variable


//by doing this we can pass functions as arguments for other functions


//example 1 first we will create a function the 'old fashion way" then we will modify that function and store it within a variable
function add(x, y){
    return x + y;
}
//function without a name, that we will store within a variable

const sum = function(x, y){
    return x + y;
}
//to execute our function the new way we will do:

console.log(sum(7, 8));