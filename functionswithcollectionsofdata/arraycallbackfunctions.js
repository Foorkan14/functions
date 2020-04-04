//ARRAY CALLBACK METHODS

//built in methods for arrays that require callbacks:

// forEach 
// map 
// filter 
// find 
// reduce 
// some 
// every


//ForEach loop

//accepts a callback function. Calls the function once per element in the array. 

//Example 1:

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

numbers.forEach(function(num){
    console.log(num); //we print num because num will become each number in the array per iteration 
})

//example 2
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n){ //n represents each number within the nums array per iteration 
    console.log(n * n)
    //prints: 81, 64, 49, 36, 25, 16, 9, 4, 1
})

//example 3

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
nums.forEach(function (el){
    if (el % 2 === 0){ //so basically we only want those numbers that are even within the nums array to be printed out
        console.log(el)
        //prints: 8, 6, 4, 2
    }
})
