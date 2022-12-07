const opened_modal = document.querySelector(".open_btn");
const closed_modal = document.querySelector(".close_btn");
const modal_containerOf = document.querySelector(".modal_container");

opened_modal.addEventListener("click", function () {
  modal_containerOf.style.display = "block";
});

closed_modal.addEventListener("click", () => {
  modal_containerOf.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal_containerOf) {
    modal_containerOf.style.display = "none";
  }
});
