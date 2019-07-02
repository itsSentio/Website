document.addEventListener("DOMContentLoaded", function(event) {

  const registerForm = document.getElementById('registerForm');
  const emailField = document.getElementsByName('email');
  const passField = document.getElementsByName('password');
  const passConField = document.getElementsByName('confirmpassword');
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
