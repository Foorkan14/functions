//defining a function is simple
//function funcName(){
    //what the function does
// }

//example 1 

function grumpus(){
    console.log("object");
    console.log("HI");
    console.log("Bye");
}

//now we have to call the function in orde to use it
//to use it all we have to do is type the name of the function with ()

//so like this

// grumpus();


//using functions in loops

// for (let i = 0; i<10; i++){
//     grumpus();
// }


///DICE ROLL FUNCTION
function rollDie(){
    let roll = Math.floor(Math.random() * 6) //we floor it to get rid of decimal, and math.random will only bring decimal numbers less than 1 but greater than 0
    console.log(`rolled: ${roll}`);
}
// rollDie();


//if we want die to be rolled 6 times we can put this roll function within another function

// function throwDice(){
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
// }

// throwDice();


