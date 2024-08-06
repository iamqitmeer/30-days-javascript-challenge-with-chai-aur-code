// Day 8: ES6+ Features
// Tasks/Activities:

// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

// let name = "Qitmeer Raza"
// let age = 16

// console.log(`Hey ${age} Y/OLD ${name}.`);

// • Task 2: Create a multi-line string using template literals and log it to the console.

// let name = "Qitmeer Raza"
// let age = 16

// console.log(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quas facilis, voluptas vel placeat ab velit natus. Possimus quisquam id, voluptatibus laborum, neque animi natus architecto accusantium aliquid fugit ab? Hey ${age} Y/OLD ${name}.`);

// Activity 2: Destructuring
// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

// let arr = ["abc", "def", "ghi", "jkl", "mno"]
// let [a, b, c, d, e] = arr
// console.log(a);
// console.log(c);
// console.log(e);

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

// let book = {
//     name: "A Smarter Way to Learn JavaScript",
//     author: "Mark Myers",
//     originallyPublished: 2014,
// }

// let { name, author, originallyPublished } = book
// console.log(name);
// console.log(originallyPublished);
// console.log(author);

// Activity 3: Spread and Rest Operators
// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

// let arr = [1, 2, 3, 4, 5]
// let newArr = [...arr, 6, 7, 8, 9, 10]
// console.log(newArr);

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let [a, b, c, ...rest] = arr
// console.log(rest);

// function sumOfNum(num, num2, num3, num4, num5) {
//     let sum = [num, num2, num3, num4, num5]
//     let n = 0
//     for (let i = 0; i < sum.length; i++) {
//         n += sum[i]
//     }

//     return n
// }

// console.log(sumOfNum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Activity 4: Default Parameters
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

// let understandDefaulParameter = (a,b = 1) => {
//     return a * b
// }

// console.log(understandDefaulParameter(12));

// Activity 5: Enhanced Object Literals
// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

// let name = "Qitmeer Raza";
// let age = 12;
// let abc = function () {
//     return "Hello World"
// }

// let obj = {
//     name,
//     age,
//     abc: abc
// }

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.abc());

// • Task 9: Create an object with computed property names based on variables and log the object to the console.

// let name = "Qitmeer Raza";
// let age = 12;

// let obj = {
//     name,
//     age,
// }

// console.log(obj.name);
// console.log(obj.age);

// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.

// let name = "Qitmeer Raza"
// let age = 16

// console.log(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quas facilis, voluptas vel placeat ab velit natus. Possimus quisquam id, voluptatibus laborum, neque animi natus architecto accusantium aliquid fugit ab? Hey ${age} Y/OLD ${name}.`);

// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.

// let arr = ["abc", "def", "ghi", "jkl", "mno"]
// let [a, b, c, d, e] = arr
// console.log(a);
// console.log(c);
// console.log(e);

// let book = {
//     name: "A Smarter Way to Learn JavaScript",
//     author: "Mark Myers",
//     originallyPublished: 2014,
// }

// let { name, author, originallyPublished } = book
// console.log(name);
// console.log(originallyPublished);
// console.log(author);

// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.

// Rest Parameter

// function sumOfNum(num, num2, num3, num4, num5) {
//     let sum = [num, num2, num3, num4, num5]
//     let n = 0
//     for (let i = 0; i < sum.length; i++) {
//         n += sum[i]
//     }

//     return n
// }

// console.log(sumOfNum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Default Parameter

// let understandDefaulParameter = (a,b = 1) => {
//     return a * b
// }

// console.log(understandDefaulParameter(12));

// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.

// let understandDefaulParameter = (a,b = 1) => {
//     return a * b
// }

// console.log(understandDefaulParameter(12));

// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

// let name = "Qitmeer Raza";
// let age = 12;
// let abc = function () {
//     return "Hello World"
// }

// let obj = {
//     name,
//     age,
//     abc: abc
// }

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.abc());

// Achievement:
// By the end of these activities, students will:
// • Understand and use template literals for string interpolation and multi-line strings.
// • Apply destructuring to extract values from arrays and objects.
// • Utilize spread and rest operators for array manipulation and function arguments.
// • Define functions with default parameters.
// • Create objects using enhanced object literals, including methods and computed property names.