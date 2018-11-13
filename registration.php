<?php
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$gender= $_POST["gender"];
$eid= $_POST["email"];
$dyear= $_POST["dyear"];
$dmonth= $_POST["dmonth"];
$dday= $_POST["dday"];
$mobno= $_POST["mobno"];
$colname= $_POST["colname"];
$brname= $_POST["brname"];
$styear= $_POST["styear"];
$ieeeid= $_POST["ieeeid"];
$servername = "fdb21.awardspace.net";
$username = "2722985_trial";
$password = "G00gl3@123";
$dbname = "2722985_trial";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO `jobfair` (`Firstname`, `Lastname`,`Gender`, `Email`,`Year`, `Month`,`Day`, `Mobile`,`College`, `Branch`,`Year`, `IEEE`) VALUES ('$fname', '$lname','$gender', '$eid','$dyear', '$dmonth','$dday', '$mobno','$colname', '$brname','$styear','$ieeeid')";

if ($conn->query($sql) === TRUE) {
    printf ( "Successfully Registered!");
} else {
    printf ( "Error: " . $sql . "<br>" . $conn->error);
}
printf ( "Our team will get in touch with you shortly");
echo("<script>location.href = 'http://google.com?msg=$msg';</script>");
$conn->close();
?> 
