document.addEventListener("DOMContentLoaded", function(event) {

  const registerForm = document.getElementById('registerForm');
  const emailField = document.getElementById('emailfield');
  const passField = document.getElementById('passwordfield');
  const passConField = document.getElementById('confirmpasswordfield');
  const passMessage = document.getElementById('passwordvalidation')
  const emailMessage = document.getElementById('emailvalidation')

  emailField.addEventListener('keyup', function(event) {
    isValidEmail = emailField.checkValidity();

    if (isValidEmail) {
      emailMessage.style.display = "none";
      emailField.style.borderColor = "black";
    } else {
      emailMessage.style.display = "block";
      emailField.style.borderColor = "red";
    }
  });

  passConField.addEventListener('keyup', function(event) {
    if (passConField.value == passField.value) {
      passMessage.style.display = "none";
      passConField.style.borderColor = 'black';
    } else {
      passMessage.style.display = "block";
      passConField.style.borderColor = 'red';
    }
  });
});
