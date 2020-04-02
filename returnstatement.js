//Return statements are built in methods that return values when we call them and we can store those values:
//printing something to the console is different then storing something in the console
//to be able to use the return values we must either store the return value in a variable or we print it out

//example 1

// "hello".toUpperCase(); //this will execute and have a return value but once it executes the return value will be lost because we did not store it 
// so to store it we can store it in a variable 
// const scream = "hello".toUpperCase();
// usually we only print something when we are debugging, but when it comes to using functions we dont typicslly console.log our return values we store them

//we will store return value without using return 
//attempt 1

// function add(x,y){
//     console.log(x + y);

// }

// const sum = add(14, 12);

//if we were to run this function we would be able to print out the value from 14+12 but we would not be able to store it within the variable sum, and to test it after we run this function once we can try running the const sum again and it will return undefined because nothing was able to be stored because we did not store the return value


//ATTEMPT 2 

//so basically to be able to store a return value we are to first:
// use a return statement within a function
//then we store the function within a variable, for demonstration purposes i will use the sum variable again


function add(x,y){
    return (x + y);

}

const sum = add(14, 12);

//now when we console.log sum we will get 26 because now the return value has been stored within it