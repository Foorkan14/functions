//defining a function is simple
//function funcName(){
    //what the function does
// }

//example 1 

// function grumpus(){
//     console.log("object");
//     console.log("HI");
//     console.log("Bye");
// }

//now we have to call the function in orde to use it
//to use it all we have to do is type the name of the function with ()

//so like this

// grumpus();


//using functions in loops

// for (let i = 0; i<10; i++){
//     grumpus();
// }


// //DICE ROLL FUNCTION
// function rollDie(){
//     let roll = Math.floor(Math.random() * 6) //we floor it to get rid of decimal, and math.random will only bring decimal numbers less than 1 but greater than 0
//     console.log(`rolled: ${roll}`);
// }
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


//FUNCTIONS WITH ARGUMENTS BEING PASSED THROUGH THEM

//arguments are inputs to a function

//example 1 simple function witb argument
// function greet(nickname){
//     console.log(`Salam, ${nickname}`);
// }
// greet("Ali");

//example 2 lets modify the roll die and throw dice functions
//lets specify how many times exactly we want the throw dice to execute the roll die function, so curently when we execute the throw dice function it executes the roll die function 6 times now we will modify the throw dice function so that we specify how many times we want it to exxecute the rolldie function 

//DICE ROLL FUNCTION
//roll die function
function rollDie(){
    let roll = Math.floor(Math.random() * 6) //we floor it to get rid of decimal, and math.random will only bring decimal numbers less than 1 but greater than 0
    console.log(`rolled: ${roll}`);
}

//throw dice function
function throwDice(numRolls){
   for(let i = 0; i < numRolls; i++){
       rollDie(); // so if we pass in 5 as a argument then the dice will roll (it will execute the roll die function) until it reaches 5  
   }
}

throwDice(3);