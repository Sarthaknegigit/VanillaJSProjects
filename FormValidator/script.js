const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Functions

//showError Function
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//showSuccess Function
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//emailValidation Function
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())){
    showSuccess(input);
  }
  else{
    showError(input, "Invalid Email")
  }
}

//passwords matching or not 
function checkMatchPasswords(input1, input2){
  if(input1.value !== input2.value){
    showError(input2, "Passwords do not match")
  }
}

//fieldName function

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//One in all CHeck function

function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`); // use ` ` instead of " " for usinf ${} which gives value in print....
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max){
  if(input.value.length< min){
    showError(input, ` ${getFieldName(input)} must be longer than ${min} characters `);
  }
  else if(input.value.length > max){
    showError(input, ` ${getFieldName(input)} must be shorter than ${max} characters `);
  }
  else{
    showSuccess(input);
  }
}

//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // if(username.value.trim() === ""){
  //     showError(username, "Username is required");
  // }
  // else{
  //     showSuccess(username);
  // }
  // if(email.value.trim() === ""){
  //     showError(email, "Email is required");
  // }
  // else if(!isValidEmail(email.value)){
  //     showError(email, "Provide a valid Email")
  // }
  // else{
  //     showSuccess(email);
  // }

  //M E S S Y   W A Y ,  H E N C E  C O M M E N T E D !!!!!

  checkRequired([username, email, password, password2]);   

  checkLength(username, 3, 16);

  checkLength(password, 8, 18);

  checkEmail(email);

  checkMatchPasswords(password, password2)
});
