document.addEventListener("DOMContentLoaded", function(event) {

  const registerForm = document.getElementById('registerForm');
  const emailField = document.getElementById('emailfield');
  const passField = document.getElementById('passwordfield');
  const passConField = document.getElementById('confirmpasswordfield');
  const passMessage = document.getElementById('passwordvalidation')
  const emailMessage = document.getElementById('emailvalidation')
  const strengthMessage = document.getElementById('passwordstrengthvalidation')

  function strengthCheck(password) {
        var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
        var validPassword = regExp.test(password);
        return validPassword;
  }

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

  passField.addEventListener('keyup', function(event) {
    if (strengthCheck(passField.value)) {
      strengthMessage.style.display = "none";
    } else {
      strengthMessage.style.display = "block";
    }

    if (passConField.value == passField.value) {
      passMessage.style.display = "none";
      passConField.style.borderColor = 'black';
    } else if (passConField.value != "") {
      passMessage.style.display = "block";
      passConField.style.borderColor = 'red';
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
