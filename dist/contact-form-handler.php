<?php
// $var = file_get_contents("php://input");

$var = $_POST;



// parse_str($var, $output);

// $errors = '';
// $myemail = 'sbcarnaby@gmail.com';
// if(empty($_POST['yourname'])  ||
//    empty($_POST['youremail']) ||
//    empty($_POST['yoursubject']) ||
//    empty($_POST['yourmessage']))
// {
//     $errors .= "\n Error: all fields are required";
// }

// $name = $_POST['yourname'];
// $email_address = $_POST['youremail'];
// $subject = $_POST['yoursubject'];
// $message = $_POST['yourmessage'];

// if (!preg_match(
// "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
// $email_address))
// {
//     $errors .= "\n Error: Invalid email address";
// }

// if( empty($errors)) {
// 	$to = $myemail;
// 	$email_subject = "Contact form submission: $name, $subject";
// 	$email_body = "You have received a new message. ".
// 	" Here are the details:\n Name: $name \n ".
// 	"Email: $email_address\n Message \n $message";
// 	$headers = "From: $myemail\n";
// 	$headers .= "Reply-To: $email_address";
// 	mail($to,$email_subject,$email_body,$headers);
// 	echo "Working";
// 	//redirect to the 'thank you' page
// 	//header('Location: contact-form-thank-you.html');
// }
// else{
// 	echo "Didn't work";
// 	echo $errors;
// }
?>