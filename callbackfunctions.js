// A CALLBACK FUNCTION IS A FUNCTION PASSED INTO ANOTHER FUNCTION AS AN ARGUMENT, WHICH IS THE  INVOKED INSIDE THE OUTER FUNCTION

//ANYTIME WE PASS A FUNCTION INSIDE ANOTHER FUNCTION, THAT IS CALLED A CALLBACK FUNCTION (REMEMBER WHEN WE PASSED IN THE LAUGH FUNCTION INSIDE THE CALLTWICE FUNCTION)

//SOMETIMES WE USE ANONYMOUS FUNCIONS AS CALLBACK FUNCTIONS

//EXAMPLE 1


function grumpus(){
    alert("aaaaaah")
}

// setTimeout(func, 5000); //this function is basically saying that a function will be executed after however many seconds (in this example we are using 5000 miliseconds (5 seconds))

setTimeout(grumpus, 5000);


//anonymous function version of the same code

setTimeout(function (){
    alert("WELCOME! ");
}, 5000);