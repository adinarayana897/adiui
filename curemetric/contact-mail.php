<?php
// Get data from form 
$userName = $_POST['userName'];
$userEmail= $_POST['userEmail'];
$lastname = $_POST['lastname'];
$userEmail= $_POST['userEmail'];
$phone= $_POST['phone'];
$suject= $_POST['suject'];
$message= $_POST['message'];
 
$to = "support@curemetric.in";
$subject = "This is the subject line";
 
// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message
$txt ="Name = ". $name . "\r\n  Email = "
    . $email . "\r\n Message =" . $message;
 
$headers = "From: support@curemetric.in" . "\r\n" .
            "CC: support@cure-metric.in";
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}
 
// Redirect to
header("Location:last.html");
?>