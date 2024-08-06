// Day 10: Event Handling

// Tasks/Activities:

// Activity 1: Basic Event Handling
// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.

// let paragraph = document.getElementById("paragraph");
// let butttton = document.getElementById("butttton");
// let flag = true;
// let text =
//   "By mastering these modern DOM manipulation techniques, you'll be able to create more dynamic and interactive web applications. Keep practicing and experimenting with different DOM methods to deepen your understanding.";

// butttton.addEventListener("click", () => {
//   if (flag) {
//     paragraph.innerText = text;
//     flag = false;
//   } else {
//     paragraph.innerText =
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore placeat accusantium voluptates odio minima architecto dolorem, magnam impedit sequi iste ex iusto consequatur accusamus eaque! Perferendis numquam asperiores excepturi.";
//     flag = true;
//   }
// });

// • Task 2: Add a double-click event listener to an image that toggles its visibility.

// let flag = true;
// let image = document.getElementById("image")
// let butttton = document.getElementById("butttton");

// butttton.addEventListener("dblclick",() => {
//     image.src = "https://media.istockphoto.com/id/1488944909/photo/environment-concept-green-glass-globe-with-a-tree-in-the-forest-with-sunlight-sustainability.webp?b=1&s=170667a&w=0&k=20&c=f89zMjUr7FldJzgS0p8mJyuTxBWgvhv0kBQL7fcSnjs="
// })

// Activity 2: Mouse Events
// • Task 3: Add a mouseover event listener to an element that changes its background color.

// let butttton = document.getElementById("butttton");
// butttton.addEventListener("mouseover", () => {
//     butttton.style.backgroundColor = "#083509"
// })

// • Task 4: Add a mouseout event listener to an element that resets its background color.

// butttton.addEventListener("mouseout", () => {
//     butttton.style.backgroundColor = "#387f39"
// })

// Activity 3: Keyboard Events
// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

// let input = document.getElementById("input");
// input.addEventListener("keydown", () => {
//   console.log("pressed");
// });

// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

// let input = document.getElementById("input");
// input.addEventListener("keyup", () => {
//   console.log("pressed");
// });

// Activity 4: Form Events
// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

// let formAbc = document.getElementById("formAbc");
// formAbc.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e.target[0].value);
//   console.log(e.target[1].value);
//   console.log(e.target[2].value);
// });

// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

// let vaaaal = document.getElementById("vaaaal")
// let cars = document.getElementById("cars")
// let show = document.getElementById("show")

// cars.addEventListener("change", (e) => {
//     console.log(e);
// })

// Activity 5: Event Delegation
// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

// let abc = document.getElementById("abc");
// abc.addEventListener("click", () => {
//   console.log(abc.innerText);
// });

// Feature Request:
// 1. Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.

// let paragraph = document.getElementById("paragraph");
// let butttton = document.getElementById("butttton");
// let flag = true;
// let text =
//   "By mastering these modern DOM manipulation techniques, you'll be able to create more dynamic and interactive web applications. Keep practicing and experimenting with different DOM methods to deepen your understanding.";

// butttton.addEventListener("click", () => {
//   if (flag) {
//     paragraph.innerText = text;
//     flag = false;
//   } else {
//     paragraph.innerText =
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore placeat accusantium voluptates odio minima architecto dolorem, magnam impedit sequi iste ex iusto consequatur accusamus eaque! Perferendis numquam asperiores excepturi.";
//     flag = true;
//   }
// });

// 2. Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.

// let butttton = document.getElementById("butttton");
// butttton.addEventListener("mouseover", () => {
//     butttton.style.backgroundColor = "#083509"
// })

// butttton.addEventListener("mouseout", () => {
//     butttton.style.backgroundColor = "#387f39"
// })

// 3. Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.

// let input = document.getElementById("input");
// input.addEventListener("keydown", () => {
//   console.log("pressed");
// });

// let input = document.getElementById("input");
// input.addEventListener("keyup", () => {
//   console.log("pressed");
// });

// 4. Form Events Script: Create a script that handles form submission and change events on a select dropdown.

// let formAbc = document.getElementById("formAbc");
// formAbc.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e.target[0].value);
//   console.log(e.target[1].value);
//   console.log(e.target[2].value);
// });

// Achievement:
// By the end of these activities, students will:
// • Add and handle basic events like click, double-click, mouseover, mouseout, keydown, and keyup.
// • Understand and handle form events.
// • Implement event delegation to manage events on dynamically added elements.
// • Make web pages interactive by responding to various user actions.
