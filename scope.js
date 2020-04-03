function helpMe(){
    let msg = "im on fire";
}
msg    //msg here outside the function has no value because it is outside the scope of the helpMe function


//example 2 

let bird = "eagle";

function birdVariable(){
    let bird = "hawk";
}

//outside the function the bird variable's value is eagle but within the function it is a hawk



//BLOCK SCOPE
//difference between let and var

if(true){
    let animal = 'eel';
}
console.log(animal)
//if we console log animal outside the function (curly brace) it will not be defined 

//example with var

if(true){
    var animal = 'eel';
}
console.log(animal); //since the variable animal is a var type variable it is still defined, because var is not bound by any scope

 //create a function that will double a array that is passed in, so we get a new array
 
function doubleArr(arr){
    const result = []; //we made a empty array called result to push the new numbers for our new array into, our new numbers for our new array is in a variable called double and we will basically push double into this new array called result
    for(let num of arr){
        var double = num * 2; //we use var here because when we want to console log double we want it to keep it's value outside of the loop scope
        result.push(double);
    }
    return result;
}
console.log(doubleArr([1, 2, 3]));