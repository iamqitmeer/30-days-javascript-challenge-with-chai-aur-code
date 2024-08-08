// Day 12: Error Handling

// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch
// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

// function throwErr() {
//     return num * 3
// }

// try {
//     throwErr()
// } catch (e) {
//     console.error("Error");
// }

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

// function divisibleByTwo(num1,num2) {
//     if (num1 % num2 == 0) {
//         return true
//     }else{
//         throw new Error()
//     }
// }

// try{
//     console.log(divisibleByTwo(2,3));
// }catch(e){
//     console.error("Not Divisible By 2");
// }

// Activity 2: Finally Block
// • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

// function isTrue(val) {
//     if (val) {
//         return true
//     } else {
//         throw new Error()
//     }
// }
// try { console.log(isTrue(true)); } catch (e) { console.log("Error"); } finally { console.log("Finaly Block"); }

// Activity 4: Error Handling in Promises
// • Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

// let pro =  new Promise((resolve, reject) => {
//      if (2 > 1) {
//         resolve()
//      }else{
//         reject()
//      }
// })

// pro.then(() => {
//     console.log("Hello World, From Resolve");
// }).catch((e) => {
//     console.log("Hello World, From Reject");
// })

// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

// let abc = () => {
//     try {
//         setTimeout(() => { console.log("a") }, 2000)
//     }catch(e) {
//         console.log(e);
//     }
// }

// abc()

// Activity 5: Graceful Error Handling in Fetch
// • Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

// let getData = () => {
//     fetch("https://fakestoreapi.com/producs").then((data) => data.json()).then((data) => console.log(data)).catch((e) => console.log("Error"
//     , e))
// }

// getData()

// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

// let getData = async () => {
//     try {
//         let fetchData = await fetch("https://fakestoreapi.com/products")
//         let data = await fetchData.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getData()

// Feature Request:
// 1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.

// function throwErr() {
//     return num * 3
// }

// try {
//     throwErr()
// } catch (e) {
//     console.error("Error");
// }

// function divisibleByTwo(num1,num2) {
//     if (num1 % num2 == 0) {
//         return true
//     }else{
//         throw new Error()
//     }
// }

// try{
//     console.log(divisibleByTwo(2,3));
// }catch(e){
//     console.error("Not Divisible By 2");
// }

// 3. Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.

// let pro =  new Promise((resolve, reject) => {
//      if (2 > 1) {
//         resolve()
//      }else{
//         reject()
//      }
// })

// pro.then(() => {
//     console.log("Hello World, From Resolve");
// }).catch((e) => {
//     console.log("Hello World, From Reject");
// })

// 4. Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.

// let getData = () => {
//     fetch("https://fakestoreapi.com/producs").then((data) => data.json()).then((data) => console.log(data)).catch((e) => console.log("Error"
//     , e))
// }

// getData()


// let getData = async () => {
//     try {
//         let fetchData = await fetch("https://fakestoreapi.com/products")
//         let data = await fetchData.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getData()

// Achievement:
// By the end of these activities, students will:
// • Understand and implement basic error handling using try-catch blocks.
// • Use finally blocks to execute code regardless of the try-catch outcome.
// • Create and use custom error classes.
// • Handle errors in promises using .catch() and within async functions using try-catch.
// • Implement graceful error handling when making network requests with the fetch API.