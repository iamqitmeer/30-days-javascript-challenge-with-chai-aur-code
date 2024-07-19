// Day 5: Functions

// Tasks/Activities:

// Activity 1: Function Declaration
// • Task 1: Write a function to check if a number is even or odd and log the result to the console.

// function isEvenOrOdd(num) {
//   return num % 2 == 0 ? "Even" : "Odd";
// }

// console.log(isEvenOrOdd(12));

// • Task 2: Write a function to calculate the square of a number and return the result.

// function squareOfNum(num) {
//   return num * num;
// }

// console.log(squareOfNum(10));

// Activity 2: Function Expression
// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

// function largeNum(num1, num2) {
//   return num1 > num2 ? num1 : num2;
// }

// console.log(largeNum(10, 21));

// • Task 4: Write a function expression to concatenate two strings and return the result.

// function concatTwoStr(str1, str2) {
//     return str1 + " " + str2
// }

// console.log(concatTwoStr("Qitmeer","Raza"));

// Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

// const sumOfTwoNum = (num1, num2) => num1 + num2;
// console.log(sumOfTwoNum(12, 8));

// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

// const char = (val) => (val ? true : false);
// console.log(char("abc"));

// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

// const proOfTwoNum = (num1, num2 = 12) => {
//   return num1 * num2;
// };

// console.log(proOfTwoNum(2));

// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

// const person = (name, age = 15) => {
//   return `Hey ${age} Y/OLD ${name}, Welcome to our Website!`;
// };
// console.log(person("Qitmeer"));

// Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);

// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.

// function isEvenOrOdd(num) {
//   return num % 2 == 0 ? "Even" : "Odd";
// }

// console.log(isEvenOrOdd(12));

// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.

// function squareOfNum(num) {
//   return num * num;
// }

// console.log(squareOfNum(10));

// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.

// function concatTwoStr(str1, str2) {
//     return str1 + " " + str2
// }

// console.log(concatTwoStr("Qitmeer","Raza"));

// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.

// const sumOfTwoNum = (num1, num2 = 12) => {
//   return num1 + num2;
// };

// console.log(sumOfTwoNum(2));

// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.

// Achievement:
// By the end of these activities, students will:
// • Understand and define functions using function declarations, expressions, and arrow functions.
// • Use function parameters and default values effectively.
// • Create and utilize higher-order functions.
// • Apply functions to solve common problems and perform calculations.
// • Enhance code reusability and organization using functions.
