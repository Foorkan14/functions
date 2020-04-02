function square(x){
    return (x * x);
    console.log("All done !")
}

//since the console log came after return statement, the console log will not work because whenever JAVA SCRIPT executes a  return statement it moves on with the function and is done with the function



//example 2 function with multiple return statements
//usually functions with conditional statements (IF ELSE statements ) have multiple return statements

//example 2 

function isPurple(color){
    if (color === 'purple'){
        return true;
    }
    else{
        return false;
    }

}

isPurple('blue');