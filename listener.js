const registerForm = document.getElementById('registerForm');
const emailField = document.getElementById('email');
const passField = document.getElementById('password');
const passConField = document.getElementById('confirmpassword');
const passMatch = document.getElementById('passmatch')

function validatePassword() {
  if (passConField.value == passField.value) {
    passMatch.style.display = "none";
    passConField.style.borderColor = 'green';
  } else {
    passMatch.style.display = "block";
    passConField.style.borderColor = 'red';
  }
}

// passConField.addEventListener('keydown', function(event) {
