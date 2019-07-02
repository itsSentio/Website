document.addEventListener("DOMContentLoaded", function(event) {

  const registerForm = document.getElementById('registerForm');
  const emailField = document.getElementById('emailfield');
  const passField = document.getElementById('passwordfield');
  const passConField = document.getElementById('confirmpasswordfield');
  const passMessage = document.getElementById('passwordvalidation')
  const emailMessage = document.getElementById('emailvalidation')
  const strengthMessage = document.getElementById('passwordstrengthvalidation')
  const submitButton = document.getElementById('submitbutton')

  var validEmail = false;
  var passwordStrength = false;
  var passwordMatches = false;

  function submitReady() {
    if (validEmail && passwordStrength && passwordMatches) {
      submitButton.disabled = false;
    }
  }

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
      validEmail = true;
    } else {
      emailMessage.style.display = "block";
      emailField.style.borderColor = "red";
      validEmail = false;
    }
    submitReady()
  });

  passField.addEventListener('keyup', function(event) {
    if (strengthCheck(passField.value)) {
      strengthMessage.style.display = "none";
      passwordStrength = true;
    } else {
      strengthMessage.style.display = "block";
      passwordStrength = false;
    }

    if (passConField.value == passField.value) {
      passMessage.style.display = "none";
      passConField.style.borderColor = 'black';
      passwordMatches = true;
    } else if (passConField.value != "") {
      passMessage.style.display = "block";
      passConField.style.borderColor = 'red';
      passwordMatches = false;
    }
    submitReady()
  });

  passConField.addEventListener('keyup', function(event) {
    if (passConField.value == passField.value) {
      passMessage.style.display = "none";
      passConField.style.borderColor = 'black';
      passwordMatches = true;
    } else {
      passMessage.style.display = "block";
      passConField.style.borderColor = 'red';
      passwordMatches = false;
    }
    submitReady()
  });
});
