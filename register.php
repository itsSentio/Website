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

if ($formpass === $formconfirmpass) {
  $sql = "INSERT INTO accounts (username, email, password, submission_date)
  VALUES ('$formuser', '$formemail', '$formpass', 'date("Y-m-d H:i:s")')";
} else {
  echo "Error: passwords do not match";
}

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
