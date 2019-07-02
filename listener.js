document.addEventListener("DOMContentLoaded", function(event) {

  const registerForm = document.getElementById('registerForm');
  const emailField = document.getElementById('emailfield');
  const passField = document.getElementById('passwordfield');
  const passConField = document.getElementById('confirmpasswordfield');
  const passMessage = document.getElementById('passwordvalidation')
  const emailMessage = document.getElementById('emailvalidation')
  const strengthMessage = document.getElementById('passwordstrengthvalidation')
  const submitButton = document.getElementById('submitbutton')

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
      submitButton.disabled = false;
    } else {
      emailMessage.style.display = "block";
      emailField.style.borderColor = "red";
      submitButton.disabled = true;
    }
  });

  passField.addEventListener('keyup', function(event) {
    console.log(strengthCheck(passField.value));
    if (strengthCheck(passField.value)) {
      strengthMessage.style.display = "none";
      submitButton.disabled = false;
    } else {
      strengthMessage.style.display = "block";
      submitButton.disabled = true;
    }

    if (passConField.value == passField.value) {
      passMessage.style.display = "none";
      passConField.style.borderColor = 'black';
      submitButton.disabled = false;
    } else if (passConField.value != "") {
      passMessage.style.display = "block";
      passConField.style.borderColor = 'red';
      submitButton.disabled = true;
    }
  });

  passConField.addEventListener('keyup', function(event) {
    if (passConField.value == passField.value) {
      passMessage.style.display = "none";
      passConField.style.borderColor = 'black';
      submitButton.disabled = false;
    } else {
      passMessage.style.display = "block";
      passConField.style.borderColor = 'red';
      submitButton.disabled = true;
    }
  });
});
