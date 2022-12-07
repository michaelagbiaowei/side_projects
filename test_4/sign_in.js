const form = document.querySelector("#form");
const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;
form.value.trim()
//ON SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

//SET ERROR MESSAGE
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector("#error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  inputControl = element.parentElement;
  errorDisplay = inputControl.querySelector("error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  if (email === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(email)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (password === "") {
    setError(password, "Password is required");
  } else if (password.length < 6) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }
};

// const form = document.getElementById("form");

// const email = document.getElementById("email");
// const password = document.getElementById("password");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   validateInputs();
// });

// const setError = (element, message) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector("#error");

//   errorDisplay.innerText = message;
//   inputControl.classList.add("error");
//   inputControl.classList.remove("success");
// };

// const setSuccess = (element) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector("#error");

//   errorDisplay.innerText = "";
//   inputControl.classList.add("success");
//   inputControl.classList.remove("error");
// };

// const isValidEmail = (email) => {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// const validateInputs = () => {
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();

//   if (emailValue === "") {
//     setError(email, "Email is required");
//   } else if (!isValidEmail(emailValue)) {
//     setError(email, "Provide a valid email address");
//   } else {
//     setSuccess(email);
//   }

//   if (passwordValue === "") {
//     setError(password, "Password is required");
//   } else if (passwordValue.length < 6) {
//     setError(password, "Password must be at least 8 character.");
//   } else {
//     setSuccess(password);
//   }
// };
