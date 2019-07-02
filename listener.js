document.addEventListener("DOMContentLoaded", function(event) {

  const registerForm = document.getElementById('registerForm');
  const emailField = document.getElementById('emailfield');
  const passField = document.getElementById('passwordfield');
  const passConField = document.getElementById('confirmpasswordfield');
  const passMatch = document.getElementById('passmatch')

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
