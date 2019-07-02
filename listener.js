document.addEventListener("DOMContentLoaded", function(event) {

  const registerForm = document.getElementById('registerForm');
  const emailField = document.getElementById('emailfield');
  const passField = document.getElementById('passwordfield');
  const passConField = document.getElementById('confirmpasswordfield');
  const passMessage = document.getElementById('passwordvalidation')
  const emailMessage = document.getElementById('emailvalidation')
  const strengthMessage = document.getElementById('passwordstrengthvalidation')
  const submitButton = document.getElementById('submitbutton')
  const usernameMessage = document.getElementById('usernamevalidation')

  var validEmail = false;
  var passwordStrength = false;
  var passwordMatches = false;
  var usernameValid = false;

  function submitReady() {
    if (validEmail && passwordStrength && passwordMatches) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  function strengthCheck(password) {
        var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
        var validPassword = regExp.test(password);
        return validPassword;
  }

  function validUsername(username) {
    valid = true;
    if (/\s/g.test(username);) {
      valid = false;
    }

    if (username.length > 4 && username.length < 21) {
      valid = true;
    } else {
      valid = false;
    }
    return valid;
  }

  usernameField.addEventListener('keyup', function(event)) {
    if (validUsername(usernamefield.value)) {
      usernameValid = true;
      usernameMessage.style.display = "none";
      usernameField.style.borderColor = "black";
    } else {
      usernameMessage.style.display = "block";
      usernameField.style.borderColor = "red";
      usernameValid = false;
    }
    submitReady()
  });

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
