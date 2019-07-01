<?php
$hostname = '162.241.35.212';
$username = 'ogucmkmy_main';
$password = 'wilddog1015';
$dbname = 'ogucmkmy_main';

$conn = new mysqli($hostname, $username, $password, $dbname);

if ($conn->connect_error) {
  die('Connection failed:  ' . $conn->connect_error);
}

$formuser = $_POST['username'];
$formemail = $_POST['email'];
$formpass = $_POST['password'];
$formconfirmpass = $_POST['confirmpassword'];
$date = date('Y-m-d H:i:s');

if ($formpass === $formconfirmpass) {
  $sql = "INSERT INTO accounts (username, email, password, submission_date)
  VALUES ('$formuser', '$formemail', '$formpass', '$date')";
}

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
}

$conn->close();
?>
