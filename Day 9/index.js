// Day 9: DOM Manipulation

// Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements
// • Task 1: Select an HTML element by its ID and change its text content.

// let h1ID = document.getElementById("h1ID")
// console.log(h1ID);
// h1ID.innerText = "Hello From JS"

// • Task 2: Select an HTML element by its class and change its background color.

// let h1Class = document.getElementsByClassName("h1Class")
// h1Class[0].style.backgroundColor = "black"
// h1Class[0].style.color = "white"

// Activity 2: Creating and Appending Elements
// • Task 3: Create a new div element with some text content and append it to the body.

// let newDivElement = document.createElement("div")
// let newHeadingElement = document.createElement("h1")
// newHeadingElement.innerText = "Hello From JavaScript"
// newDivElement.appendChild(newHeadingElement)

// let body = document.getElementsByTagName("body")
// console.log(body);
// body[0].appendChild(newDivElement)

// • Task 4: Create a new li element and add it to an existing ul list.

// let unOrderedList = document.querySelector("#unOrderedList")
// console.log(unOrderedList);
// let newLiElem = document.createElement("li")
// newLiElem.innerText += "Hello World 1"

// unOrderedList.appendChild(newLiElem)

// Activity 3: Removing Elements
// • Task 5: Select an HTML element and remove it from the DOM.

// let unOrderedList = document.querySelector("#unOrderedList")
// unOrderedList.remove()

// • Task 6: Remove the last child of a specific HTML element.

// let unOrderedList = document.querySelector("#unOrderedList")
// let last = unOrderedList.lastElementChild
// last.remove()

// Activity 4: Modifying Attributes and Classes
// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

// let image = document.getElementById("image")
// image.setAttribute("src", "https://www.w3schools.com/images/img_falilla_up_160.webp")

// • Task 8: Add and remove a CSS class to/from an HTML element.

// let divH1 = document.getElementsByClassName("abc")
// divH1[0].setAttribute(
//     "class","bir"
// )

// Activity 5: Event Handling
// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.

// let para = document.getElementById("para")
// function abc() {
//     para.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nemo maiores eos libero culpa, repellendus delectus odio laborum sunt, perspiciatis quae tempora asperiores tempore quis quibusdam cumque voluptatum quo! Officia."
// }

// • Task 10: Add a mouseover event listener to an element that changes its border color.

// let foo = document.getElementsByClassName("foo")

// foo[0].addEventListener("mouseover", () => {
//     foo[0].style.backgroundColor = "purple"
// })

// foo[0].addEventListener("mouseout", () => {
//     foo[0].style.backgroundColor = "violet"
// })

// Feature Request:
// 1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.

// let h1ID = document.getElementById("h1ID")
// console.log(h1ID);
// h1ID.innerText = "Hello From JS"

// 2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.

// let unOrderedList = document.querySelector("#unOrderedList")
// console.log(unOrderedList);
// let newLiElem = document.createElement("li")
// newLiElem.innerText += "Hello World 1"

// 3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.

// let unOrderedList = document.querySelector("#unOrderedList")
// let last = unOrderedList.lastElementChild
// last.remove()

// 4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.

// let image = document.getElementById("image")
// image.setAttribute("src", "https://www.w3schools.com/images/img_falilla_up_160.webp")

// • Task 8: Add and remove a CSS class to/from an HTML element.

// let divH1 = document.getElementsByClassName("abc")
// divH1[0].setAttribute(
//     "class","bir"
// )

// 5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.

// Show Text

// let para = document.getElementById("para")
// function abc() {
//     para.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nemo maiores eos libero culpa, repellendus delectus odio laborum sunt, perspiciatis quae tempora asperiores tempore quis quibusdam cumque voluptatum quo! Officia."
// }

// Change Background Color on hover a mouse

// let foo = document.getElementsByClassName("foo")

// foo[0].addEventListener("mouseover", () => {
//     foo[0].style.backgroundColor = "purple"
// })

// foo[0].addEventListener("mouseout", () => {
//     foo[0].style.backgroundColor = "violet"
// })

// Achievement:
// By the end of these activities, students will:
// • Select and manipulate DOM elements using JavaScript.
// • Create and append new elements to the DOM.
// • Remove elements from the DOM.
// • Modify attributes and classes of HTML elements.
// • Add and handle events to make web pages interactive.
