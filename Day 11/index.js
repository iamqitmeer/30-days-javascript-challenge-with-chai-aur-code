// Day 11: Promises and Async/Await

// Tasks/Activities:

// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

// let createPromise = new Promise((res, rej) => {
//     if (true) {
//         setTimeout(() => {
//             res()
//         }, 2000)
//     } else {
//         rej()
//     }
// })

// createPromise.then(() => {
//     console.log("Hello World");
// }).catch(() => {
//     console.log("Rejected");
// })

// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

// let createPromise = new Promise((res, rej) => {
//     if (2 == 4) {
//         setTimeout(() => {
//             res()
//         }, 2000)
//     } else {
//         setTimeout(() => {
//             rej()
//         }, 3000)
//     }
// })

// createPromise.then(() => {
//     console.log("Hello World");
// }).catch(() => {
//     console.log("Rejected");
// })

// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

// let createPromise = new Promise((res, rej) => {
//     fetch("https://fakestoreapi.com/products").then((jsonData) => jsonData.json()).then((data) => res(data)).catch((e) => rej(e))
// })

// createPromise.then((data) => {
//     console.log(data);
// }).catch((e) => {
//     console.log(e);
// })

// Activity 3: Using Async/Await
// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

// async function abc() {
//     try {
//         let num = await setTimeout(() => {
//             console.log("Hello World");
//         }, 2000);

//     } catch (e) {
//         console.log(e);
//     }
// }

// abc()

// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

// async function abc() {
//     try {
//         await fetch("htts://fakestoreapi.com/products")
//     } catch (e) {
//         console.log("Error ", e);
//     }
// }

// abc()

// Activity 4: Fetching Data from an API

// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

// let createPromise = new Promise((res, rej) => {
//     fetch("https://fakestoreapi.com/products").then((jsonData) => jsonData.json()).then((data) => res(data)).catch((e) => rej(e))
// })

// createPromise.then((data) => {
//     console.log(data);
// }).catch((e) => {
//     console.log(e);
// })

// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

// async function getDataFromAPI() {
//     try {
//         let getData = await fetch("https://fakestoreapi.com/products")
//         let data = await getData.json()
//         console.log(data);
//     } catch (e) {
//         console.log(e);
//     }
// }

// getDataFromAPI()

// Feature Request:
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.

// let createPromise = new Promise((res, rej) => {
//     if (true) {
//         setTimeout(() => {
//             res()
//         }, 2000)
//     } else {
//         rej()
//     }
// })

// createPromise.then(() => {
//     console.log("Hello World");
// }).catch(() => {
//     console.log("Rejected");
// })

// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.

// let createPromise = new Promise((res, rej) => {
//     fetch("https://fakestoreapi.com/products").then((jsonData) => jsonData.json()).then((data) => res(data)).catch((e) => rej(e))
// })

// createPromise.then((data) => {
//     console.log(data);
// }).catch((e) => {
//     console.log(e);
// })

// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.

// async function abc() {
//     try {
//         let num = await setTimeout(() => {
//             console.log("Hello World");
//         }, 2000);

//     } catch (e) {
//         console.log(e);
//     }
// }

// abc()

// async function abc() {
//     try {
//         await fetch("htts://fakestoreapi.com/products")
//     } catch (e) {
//         console.log("Error ", e);
//     }
// }

// abc()


// 4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.

// let createPromise = new Promise((res, rej) => {
//     fetch("https://fakestoreapi.com/products").then((jsonData) => jsonData.json()).then((data) => res(data)).catch((e) => rej(e))
// })

// createPromise.then((data) => {
//     console.log(data);
// }).catch((e) => {
//     console.log(e);
// })

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// async function getDataFromAPI() {
//     try {
//         let getData = await fetch("https://fakestoreapi.com/products")
//         let data = await getData.json()
//         console.log(data);
//     } catch (e) {
//         console.log(e);
//     }
// }

// getDataFromAPI()

// Achievement:
// By the end of these activities, students will:
// • Understand and create promises, including handling resolved and rejected states.
// • Chain multiple promises to perform sequential asynchronous operations.
// • Use async/await to handle asynchronous code more readably.
// • Fetch data from public APIs using both promises and async/await.
// Manage multiple concurrent promises using Promise.all and Promise.race.