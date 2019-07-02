<!doctype html>
<html>
  <link rel="stylesheet" href="register.css">
    <head>
    </head>
    <body>
      <title>Register Test</title>
        <form action="register.php" method="post">
         Username:<br>
         <input type="text" name="username"><br>
         Email:<br>
         <input type="text" name="email"><br>
         Password:<br>
         <input type="text" name="password">
         <?php if($_GET['password'] != $_GET['confirmpassword']) : ?>
           <p id="passmatch">Passwords must match</p>
         <?php endif; ?>
         Confirm Password:<br>
         <input type="text" name="confirmpassword"> <br><br>
         <input type="submit" value="Register">
       </form>
     </body>
</html>
