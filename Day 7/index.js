// Day 7: Objects

// Tasks/Activities:

// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

// let obj = {
//   title: "A Smarter Way to Learn JavaScript",
//   author: "Mark Myers",
//   published: 2014,
// };

// console.log(obj);

// • Task 2: Access and log the title and author properties of the book object.

// let obj = {
//   title: "A Smarter Way to Learn JavaScript",
//   author: "Mark Myers",
//   published: 2014,
// };

// console.log(obj.author);
// console.log(
//   `A Book ${obj.title} Was Written By ${obj.author}, it published on ${obj.published}`
// );

// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

// let obj = {
//   title: "A Smarter Way to Learn JavaScript",
//   author: "Mark Myers",
//   withTitleAndAuthor: function () {
//     return `A Book ${obj.title} Was Written By ${obj.author},`;
//   },
// };

// console.log(obj.withTitleAndAuthor());

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

// let obj = {
//   title: "A Smarter Way to Learn JavaScript",
//   author: "Mark Myers",
//   year: 2014,
//   published: function (newyear) {
//     this.year = newyear;
//   },
// };

// obj.published(2014);

// console.log(obj);

// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

// let obj = {
//   library: [
//     {
//       title: "A Smarter Way to Learn JavaScript",
//       author: "Mark Myers",
//     },
//     {
//       title: "A Smarter Way to Learn JavaScript",
//       author: "Mark Myers",
//     },
//     {
//       title: "A Smarter Way to Learn JavaScript",
//       author: "Mark Myers",
//     },
//     {
//       title: "A Smarter Way to Learn JavaScript",
//       author: "Mark Myers",
//     },
//   ],
// };

// console.log(obj.library);

// • Task 6: Access and log the name of the library and the titles of all the books in the library.

// let obj = {
//   library: [
//     {
//       title: "A Smarter Way to Learn JavaScript",
//       author: "Mark Myers",
//     },
//     {
//       title: "A Smarter Way to Learn JavaScript",
//       author: "Mark Myers",
//     },
//     {
//       title: "A Smarter Way to Learn JavaScript",
//       author: "Mark Myers",
//     },
//     {
//       title: "A Smarter Way to Learn JavaScript",
//       author: "Mark Myers",
//     },
//   ],
// };

// console.log(obj.library[0].title);

// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

// let obj = {
//   title: "A Smarter Way to Learn JavaScript",
//   author: "Mark Myers",
//   year: 2014,
//   published: function () {
//     return `A Book ${this.title} Was Written By ${this.author}, it published on ${this.year}`;
//   },
// };

// console.log(obj.published());

// Activity 5: Object Iteration
// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

// let obj = {
//   title: "A Smarter Way to Learn JavaScript",
//   author: "Mark Myers",
//   year: 2014,
// };

// for (let key in obj) {
//   console.log(`${obj[key]} is ${key}`);
// }

// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

// let obj = {
//   title: "A Smarter Way to Learn JavaScript",
//   author: "Mark Myers",
//   year: 2014,
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// Feature Request:
// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.

// let obj = {
//   title: "A Smarter Way to Learn JavaScript",
//   author: "Mark Myers",
//   withTitleAndAuthor: function () {
//     return `A Book ${obj.title} Was Written By ${obj.author},`;
//   },
// };

// console.log(obj.withTitleAndAuthor());

// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.

// let obj = {
//   library: [
//     {
//       title: "A Smarter Way to Learn JavaScript",
//       author: "Mark Myers",
//     },
//     {
//       title: "A Smarter Way to Learn JavaScript",
//       author: "Mark Myers",
//     },
//     {
//       title: "A Smarter Way to Learn JavaScript",
//       author: "Mark Myers",
//     },
//     {
//       title: "A Smarter Way to Learn JavaScript",
//       author: "Mark Myers",
//     },
//   ],
// };

// console.log(obj.library[0].title);

// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values.

// let obj = {
//   title: "A Smarter Way to Learn JavaScript",
//   author: "Mark Myers",
//   year: 2014,
// };

// for (let key in obj) {
//   console.log(`${obj[key]} is ${key}`);
// }

// let obj = {
//   title: "A Smarter Way to Learn JavaScript",
//   author: "Mark Myers",
//   year: 2014,
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));


// Achievement:
// By the end of these activities, students will:
// • Create and manipulate objects with properties and methods.
// • Understand and use the this keyword in object methods.
// • Work with nested objects and arrays of objects.
// • Iterate over an object's properties using loops and built-in methods.
