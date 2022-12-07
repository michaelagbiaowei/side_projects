// //!GRABBING/STYLING ELEMENTS
// const title = document.querySelector("#main_header");
// title.style.background = "blue";
// title.style.color = "brown";
// // console.log(title);

// const list_of_items = document.querySelectorAll(".list_item");
// // for (i = 0; i < list_of_items.length; i++) {
// //   list_of_items[i].style.color = "brown";
// //   console.log(list_of_items[i]);
// // }

// // for (i of list_of_items) {
// //   i.style.color = "brown";
// //   console.log(i);
// // }

// list_of_items.forEach((i) => {
//   i.style.color = "brown";
//   console.log(i);
// });

// //!ADDING ELEMENTS
// const ul = document.querySelector("ul");
// const li = document.querySelector("li");
// ul.append(li);
// li.innerText = "Game of throns";
// // li.innerHTML = "Game <br>of Throns";

// li.classList.remove("list_item");
// console.log(li.classList.contains("list_item")); //false

//!NAVIGATING THE DOM
//? PARENT NODE TRANSVERSAL
const ul = document.querySelector("ul");
// console.log(ul.parentNode);
// console.log(ul.parentElement);

// //? GRAND_PARENT NODE
// console.log(ul.parentNode.parentNode);

//? CHILD NODE TRANSVERSAL
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[3].style.background = "orange";
// // ul.childNodes[7].style.background = "orange";
/**
 * ! index 0 is a text node
 * ! index 1 is a node
 * ! index 2 is a text node
 * !...
 */

//? CHILDREN NODE TRANSVERSAL
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

//? SIBLLINGS NODE TRANSVERSAL
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);
/**
 * ! previousSibling returns the text nodes
 * ! previousElementSibling is recommended for it returns the node
 */

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
