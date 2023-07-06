// Function to show the sign-up form
function showSignUpForm() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("signup-screen").style.display = "block";
}

// Function to show the login form
function showLogInForm() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("login-screen").style.display = "block";
}

// Function to handle adding a new job placeholder
function addJob() {
  // Code to add job placeholder
}

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission

  // Code to handle form submission
}

// Event listener for form submission
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", submitForm);

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", login);