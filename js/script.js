const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordMatch = false;

function validateForm() {
  // Using Contraint API
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = "Please Fill Out All Failds";
    message.style.textShadow = "0px 0px 20px  red";
    messageContainer.style.borderColor = "red";
    return;
  }
  // Chech to see if passwords match
  if (password1El.value === password2El.value) {
    passwordMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.textShadow = "0px 0px 20px  red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }

  if (isValid && passwordMatch) {
    message.textContent = " Succefully Registred ";
    message.style.textShadow = "0px 0px 10px  green";
    messageContainer.style.borderColor = "green";
  }
}

function storeFormDate() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user);
}
function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  //   Subit Date if Valid
  if (isValid && passwordMatch) {
    storeFormDate();
  }
}

// Event Listener
form.addEventListener("submit", processFormData);
