// Day 6: Arrays

// Tasks/Activities:

// Activity 1: Array Creation and Access
// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// • Task 2: Access the first and last elements of the array and log them to the console.

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[0]);
// console.log(arr[4]);

// Activity 2: Array Methods (Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.

// let arr = [2, 3, 4];
// arr.push(5);
// console.log(arr);

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.

// let arr = [2, 3, 4];
// arr.pop();
// console.log(arr);

// • Task 5: Use the shift method to remove the first element from the array and log the updated array.

// let arr = [2, 3, 4];
// arr.shift();
// console.log(arr);

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

// let arr = [2, 3, 4];
// arr.unshift(1);
// console.log(arr);

// Activity 3: Array Methods (Intermediate)
// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.map((val) => {
//   return val + val;
// });

// console.log(newArr);

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.filter((val) => {
//   return val % 2 == 0;
// });

// console.log(newArr);

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(sum);

// Activity 4: Array Iteration
// • Task 10: Use a for loop to iterate over the array and log each element to the console.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach(num => {
//     console.log(num + num);
// });

// Activity 5: Multi-dimensional Arrays
// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

// let twoDimensionalArr = [
//   [1, 2, 3],
//   [1, 2, 3],
// ];
// console.log(twoDimensionalArr);

// • Task 13: Access and log a specific element from the two-dimensional array.

// let twoDimensionalArr = [
//   [1, 2, 3],
//   [1, 2, 3],
// ];
// console.log(twoDimensionalArr[0][1]);

// Feature Request:
// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.

// let arr = [2, 3, 4];
// arr.push(5);
// console.log(arr);

// let arr = [2, 3, 4];
// arr.pop();
// console.log(arr);

// let arr = [2, 3, 4];
// arr.shift();
// console.log(arr);

// let arr = [2, 3, 4];
// arr.unshift(1);
// console.log(arr);

// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.map((val) => {
//   return val + val;
// });

// console.log(newArr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.filter((val) => {
//   return val % 2 == 0;
// });

// console.log(newArr);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(sum);

// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach(num => {
//     console.log(num + num);
// });

// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.

// let twoDimensionalArr = [
//   [1, 2, 3],
//   [1, 2, 3],
// ];
// console.log(twoDimensionalArr);

// let twoDimensionalArr = [
//   [1, 2, 3],
//   [1, 2, 3],
// ];
// console.log(twoDimensionalArr[0][1]);

// Achievement:
// By the end of these activities, students will:
// • Create and manipulate arrays using various methods.
// • Transform and aggregate array data using map, filter, and reduce.
// Iterate over arrays using loops and iteration methods.
// • Understand and work with multi-dimensional arrays.
