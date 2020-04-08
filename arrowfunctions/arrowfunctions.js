//alternative way of writingfunctions
//dont have to wrte functinn keyword all you have to do is this:


//example 1 a function expression without arrow format

// const square = function(x){ //x is what will be passed through as the argument
//     return x * x; 
// }

// //now same function as arrow function
// const square = (x) => {
//     return x * x;
// }

//really only difference is that we dont write function key word
//they also behave differently when it comes to the keyword this



//example 2 

const isEven = (num) =>{
    return num % 2 === 0;
}
console.log(isEven(4)); //will return true

//example 3

const multiply = (x, y) =>{
    return(x * y);
}


//2 rules for arrow functions 

//rule 1 parenthesis are optioma if there is only one parameter
const square = x =>{
    return x * x;
}


//rule number 2 you can use empty parenthesis for functions with no parameters;

const singAsong = () => {
    return "LA LA LA LA LA LA ";
}

//ARROW FUNCTIONS WITH IMPLICIT RETURN STATEMENTS

//WORKS IN CERTAIN SCENARIOS

//MEANS YOU DONT HAVE TO WRITE RETURN STATEMENT ITSELF

//EXAMPLE 1

// const square = n => {
//     return n * n;
// }

//consists of a single expression that we are returning,we arent doing any other logic first, we arent using a conditional , we arent making a variable we are simply returning a expression
//in scenarios where we are returning a expressuon we can rewrite the function with parenthesis instead of curly brackets

const square = n => (
    n * n
)

//we can even leave out the parenthesis and do everything in one line

const square = n => n * n


//with arrays

//example 1 without arrow function

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const doubles1 = nums.map(function(n){
    return n * 2;
})

//now use arrow function

const doubles2 = nums.map(n =>{
    return n *2
})

//since we have single expression in this case n we can rewrite the function with parenthesis instead

const doubles3 = nums.map(n => n * 2);



// example 2 


const parodyList = nums.map(function(n){
    if (n%2 ===0){
        return even;
    }else{
        return odd;
    }
})

//now same function as arrow function

const parodyList = nums.map(n =>{
    if (n%2 === 0){
        return 'even'; 
    } else{
        return 'odd';
    }
})




