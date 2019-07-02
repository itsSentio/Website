<!doctype html>
<html>
  <link rel="stylesheet" href="register.css">
    <head>
    </head>
    <body>
      <title>Register Test</title>
        <form id="registerForm" action="register.php" method="post">
         Username:<br>
         <input type="text" name="username" id="usernamefield"><br>
         Email:<br>
         <input type="email" name="email" id="emailfield"><br>
         Password:<br>
         <input type="text" name="password" id="passwordfield"><br>
         Confirm Password:<br>
         <input type="text" name="confirmpassword" id="confirmpasswordfield"><br><br>
         <input type="submit" value="Register" id="submitbutton" disabled>
         <p id="passwordvalidation">Passwords must match</p>
         <p id="emailvalidation">Must be a valid email address</p>
         <p id="passwordstrengthvalidation">Password must contain: 8 characters with one uppercase letter, one lower case letter, one digit and a special character</p>
         <p id="usernamevalidation">Username must be between 5 and 20 characters in length</p>
       </form>
     </body>
     <script src=listener.js></script>
</html>
