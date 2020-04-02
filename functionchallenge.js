
//Password operator 
//no spaces in password
//password cannot be same as username

// function password(password, username){
//     if(password.length < 8 ){
//         return false;
//     }
//     if(password.indexOf(' ')!== -1){ //basically we are asking the function to check for any spaces in the index, and if we look up something with indexOf and it is not present then we get -1 , but if it is present then we do not get a -1, hence in this function we are saying to the function if we do not get a -1 (which will mean a space is present) then return false
//         return false;
//     }
//     if(password.indexOf(username)!== -1){ //password cannot be username
//         return false;
//     }
//     return true; 
// }

// password('wjnjenf ');

// //another way of writing this is 

// function password(password, username){
//     if((password.length < 8 )|| (password.indexOf (' ') !== -1) || (password.indexOf(username) !== -1) ) {
//         return false;
//     }
//     return true;
//     }


// practice number 2 finding average
