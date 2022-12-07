//?EVENT LISTENERS

//element.addEventListener("click", function)

const button_two = document.querySelector(".btn_2");
button_two.addEventListener("click", () => {
  alert("I love you");
});

// function btn_alert() {
//   alert("I love you");
// }
// button_two.addEventListener("click", btn_alert);
//=========================================================================

//element.addEventListener("moseOver", function)
const main_container = document.querySelector(".box_2");
main_container.addEventListener("mouseenter", () => {
  main_container.style.background = "grey";
});

main_container.addEventListener("mouseleave", () => {
  main_container.style.background = "none";
});
//=======================================================================
const reveal_button = document.querySelector(".reveal_btn");
const hidden_content = document.querySelector(".hidden_content");

reveal_button.addEventListener("click", () => {
  if (hidden_content.classList.contains("reveal_btn")) {
    hidden_content.classList.remove("reveal_btn");
  } else {
    hidden_content.classList.add("reveal_btn");
  }
});
//======================================================================

//TODO: EVENT DELEGATION/PROPAGATION
/**
 * !It allows users to append a SINGLE event listener
 * !to a parent element that adds it to all of its
 * !parent AND future descendants that match a selector
 */
// document.querySelector("").addEventListener("event", function(parameter){})
document.querySelector(".container_3").addEventListener("click", function (e) {
  // alert(e.target.getAttribute("class") + " is clicked");
  console.log(e.target.getAttribute("class") + " is clicked");
  const target = e.target;
  if (target.matches("li")) {
    target.style.background = "aliceblue";
    target.style.color = "black";
  }
});

const sports = document.querySelector(".container_3");
const new_sport = document.createElement("li");
new_sport.innerText = "Hockey";
new_sport.setAttribute("class", "hockey");
sports.appendChild(new_sport);

// document.querySelector(".container_3").addEventListener("click", function (e) {
//   alert(e.target.getAttribute("class") + " is clicked");
//   const target = e.target;
//   target.style.background = "aliceblue";
//   target.style.color = "black";
// });
//=================================================================

//TODO: QUOTE GENERATOR
const quote_btn = document.querySelector(".new_quote");
const quotes = document.querySelector(".quote");
const names = document.querySelector(".name");

const array_of_quotes = [
  //array of quotes to be generated
  { quotes: "Life Is Good", names: "Godwill" },
  { quotes: "Live long", names: "James" },
  { quotes: "Do good", names: "amadi" },
  { quotes: "Practice", names: "john" },
];

quote_btn.addEventListener("click", function () {
  //create a variable with a build in math object
  let random = Math.floor(Math.random() * array_of_quotes.length);
  quotes.innerText = array_of_quotes[random].quotes;
  names.innerText = array_of_quotes[random].names;
});
//=============================================================
