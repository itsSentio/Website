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
         <input type="text" name="confirmpassword" onkeyup="validatePassword()"> <br><br>
         <input type="submit" value="Register">
       </form>
     </body>
     <script src=listener.js></script>
</html>
