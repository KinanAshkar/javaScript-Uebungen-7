// 31
/* Filter Friends
Given an array, create a function which filters array based on a search query.
Examples
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"]; */

const newArray = ["rika", "jenna", "bleda", "oliver", "itamar"];
const myFilteredArr = (arr,char) => {
   let myToLoweredCase = char.toLowerCase();
    return arr.filter((element)=> element.includes(myToLoweredCase));
}
console.log(myFilteredArr(newArray,"le"));
console.log(myFilteredArr(newArray,"xo"));
console.log(myFilteredArr(newArray,"B"));

// 32
/* Sum Up
Write a function called sum that uses the reduce method to sum up an array of numbers.
Examples:
sum([1,2,3,4,5]); //returns 15
sum([6,7,7]); //returns 20 */

const sum = (arr)=> {
    return arr.reduce( (acc,cur) => acc + cur);
}
console.log(sum([1,2,3,4,5]));
console.log(sum([6,7,7]));

// -33-
// Return the total amount of orders.
/* const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];  */
const totalAmount = orders.reduce((acc,cur) =>{
return acc + cur.amount},0);
console.log(totalAmount);

// -34-
// Create a function that increments each element in the arrayOfNumbers by 1. Return a new array of modified elements.
const incrementsElement = (arr) => {
    return arr.map((element) => element + 1);
}
console.log(incrementsElement([3, 45, 6, 56, 7, 9]));

// -35-
// Filter Evens
/* Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.
Examples:
filterEvens([1,2,3,11,12,13]); //returns [2,12]
filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6] */
function filterEvens(arr){
    return arr.filter((element) => element % 2 == 0);
}
console.log(filterEvens([1,2,3,11,12,13]));

// -36-
/* Filter Friends
Given an array, create a function which filters array based on a search query.
Examples
const friends = ["zain", "ali", "nancy"];
console.log(filterItems(friends, 'za')); // ["zain"];
console.log(filterItems(friends, 'a')); // ["zain", "ali", "nancy"]; */
const friends = ["zain", "ali", "nancy"];
const filterItems = (arr,char) => {
    let myToLowered = char.toLowerCase();
    return arr.filter((element) => element.includes(myToLowered)); 
}
console.log(filterItems(friends,"cy"));
console.log(filterItems(friends,"i"));
console.log(filterItems(friends,"ol"));

// -37-
/* Sum Up
Write a function called sum that uses the reduce method to sum up an array of numbers.
Examples:
sum([1,2,3,4,5]); //returns 15
sum([6,7,7]); //returns 20 */
function sum (arr){
    return arr.reduce((acc,cur) => acc + cur);
}
console.log(sum([1,2,3,4,5]));
console.log(sum([6,7,7]));
