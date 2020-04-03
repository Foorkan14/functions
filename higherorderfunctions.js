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

function callTwice(func){
    func();
    func();
}

function laugh(){
    console.log("hahahahahah");
}
callTwice(laugh)//we are passing the function laugh into the function callTwice

//example 2 function that accepts function as argument

function callThreeTimes(func){
    func();
    func();
    func();
}

function cry(){
    console.log("BOOO I AM SAD! ");
}
callThreeTimes(cry);


//example 3  we will create a function that will call a function (use a function) n number of times

function repeatNTIMES(func, num){
    for(let i = 0; i < num; i++){ //we want function to run all the way up to however much num is equal to
        func ();
    }
}

repeatNTIMES(cry, 5); //so cry takes place of func, and 5 takes place of num



//this function will accept 2 functions but will randomy run only one of them

function pickOne(func1, func2){
    let rand = Math.random()
        if (rand < 0.5){ //if the number that randomly is selected is less than .5 than we will run function1 
            func1();
        } else{
            func2();
        }
    
}

pickOne(laugh, cry);