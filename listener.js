const registerForm = document.getElementById('registerForm');
const emailField = document.getElementById('email');
const passField = document.getElementById('password');
const passConField = document.getElementById('confirmpassword');
const passMatch = document.getElementById('passmatch')

document.addEventListener("DOMContentLoaded", function(event) {
  passConField.addEventListener('keyup', function(event) {
    if (passConField.value == passField.value) {
      passMatch.style.display = "none";
      passConField.style.borderColor = 'black';
    } else {
      passMatch.style.display = "block";
      passConField.style.borderColor = 'red';
    }
  });
});
