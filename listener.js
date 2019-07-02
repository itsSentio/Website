const registerForm = document.getElementById('registerForm');
const emailField = document.getElementById('email');
const passField = document.getElementById('password');
const passConField = document.getElementById('confirmpassword');
const passMatch = document.getElementById('passmatch')

passConField.addEventListener('keyup', function(event) {
  if (passConField.value == passField.value) {
    passMatch.style.display = "none";
    passConField.style.borderColor = 'green';
  } else {
    passMatch.style.display = "block";
    passConField.style.borderColor = 'red';
  }
});
