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
         <input type="text" name="password" id="passwordfield"><p id="passmatch"> Passwords must match</p><br>
         Confirm Password:<br>
         <input type="text" name="confirmpassword" id="confirmpasswordfield"><br><br>
         <input type="submit" value="Register">
       </form>
     </body>
     <script src=listener.js></script>
</html>
