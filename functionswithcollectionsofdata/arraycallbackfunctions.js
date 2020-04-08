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
nums.forEach(function (number){
    if (number % 2 === 0){ //so basically we only want those numbers that are even within the nums array to be printed out
        console.log(number)
        //prints: 8, 6, 4, 2
    }
})

//example 4 
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
function printTriple(n){ //this isnt a anonymous function, that is the only difference between this example and the examples above 
    console.log(n * 3);
}
numbers.forEach(printTriple);


//example 5 with a more complexed array

const books = [{
    title: "good omens" ,
    authors: ["terry", "neil"],
    rating: 4.25
},
{
    title: "american", 
    authors: ['neil gaiman'], 
    rating: 4.11
},
{
    title: "a gentleman in moscow", 
    authors: ["amor towles"], 
    rating: 4.26
}
]
//if i want to print out each title i would use for each like this

books.forEach(function(book){
    console.log(books.title.toUpperCase())


})
//you can do exact same thing using for of 

for (let book of books){
    console.log(book.title.toUpperCase())
}