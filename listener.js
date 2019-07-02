const registerForm = document.getElementById('registerForm');
const emailField = document.getElementByName('email');
const passField = document.getElementByName('password');
const passConField = document.getElementByName('confirmpassword');
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
