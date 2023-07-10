const form = document.querySelector("#form");
const nameImput = document.querySelector("#fname");
const usernameImput = document.querySelector("#uname");
const emailImput = document.querySelector("#email");
const passwordImput = document.querySelector("#password");
const password2dImput = document.querySelector("#cpassword");
const errorMsg = document.querySelectorAll(".erro");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const usernameRegex =
  /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/;
// Minimo 8 letras, sendo 1 maiuscula e 1 minusculo, com um número e um caractere especial
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  if (nameImput.value == "") {
    errorMsg[0].innerHTML = "Name cannot be blank";
  } else {
    errorMsg[0].innerHTML = "";
  }

  if (usernameImput.value == "") {
    errorMsg[1].innerHTML = "Username cannot be blank";
  } else if (usernameImput.value.length < 6) {
    errorMsg[1].innerHTML = "Minimum 6 caracters";
  } else {
    errorMsg[1].innerHTML = "";
  }

  if (emailImput.value == "") {
    errorMsg[2].innerHTML = "Email cannot be blank";
  } else if (emailRegex.test(emailImput.value)) {
    errorMsg[2].innerHTML = "";
  } else {
    errorMsg[2].innerHTML = "Please enter a valid email";
  }

  if (passwordImput.value == "") {
    errorMsg[3].innerHTML = "Password cannot be blank";
  } else if (passwordRegex.test(passwordImput.value)) {
    errorMsg[3].innerHTML = "";
  } else {
    errorMsg[3].innerHTML = "Please enter a valid password";
  }

  if (password2dImput.value == "") {
    errorMsg[4].innerHTML = "Cannot be blank";
  } else if (password2dImput.value != passwordImput.value) {
    errorMsg[4].innerHTML = "The password does not match";
  }
}
