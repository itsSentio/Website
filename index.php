<!doctype html>
<html>
  <link rel="stylesheet" href="register.css">
    <head>
    </head>
    <body>
      <title>Register Test</title>
        <form id="registerForm" action="register.php" method="post">
         Username:<br>
         <input type="text" name="username"><br>
         Email:<br>
         <input type="email" name="email"><br>
         Password:<br>
         <input type="text" name="password"><p id="passmatch"> Passwords must match</p><br>
         Confirm Password:<br>
         <input type="text" name="confirmpassword"> <br><br>
         <input type="submit" value="Register">
       </form>

       <script>
       const registerForm = document.getElementById('registerForm');
       const emailField = document.getElementById('email');
       const passField = document.getElementById('password');
       const passConField = document.getElementById('confirmpassword');
       const passMatch = document.getElementById('passmatch')

       passConField.addEventListener('keyup', function(event) {
         if (passConField == passField) {
           passMatch.style.display = "none";
           passConField.style.borderColor = 'green';
         } else {
           passMatch.style.display = "block";
           passConField.style.borderColor = 'red';
         }
       });
       </script>

     </body>
</html>
