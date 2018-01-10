<?php
include 'healthcard.php';

//ini_set('display_errors', 1);
//ini_set('log_errors', 1);

if($val = "Success")
{
    $name = $_GET["name"];
    $mail = $_GET["mail"];
    echo $mail." ".$name;

    require_once 'swiftmailer/lib/swift_required.php';

    $subject = 'Du Medical Service Signup | Verification'; // Give the email a subject
   // $address = "http://csedu.cf/psychohelp/profile/access/verify.php?email=".$mail;

    $address = "http://csedu.cf/duHospital/verify.php?mail=".$mail;
    $body = '

    Thanks for signing up!
    Your account has been created, you can login with the following credentials after you have activated your account by pressing the url below.

    ------------------------
       var Username: ' . $name . '
    ------------------------

        Please click this link to activate your account:.
    ' . $address;

    $transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, "ssl")
        ->setUsername('du.medical.pro@gmail.com')
        ->setPassword('du.medical.pro1')
        ->setEncryption('ssl');

    $mailer = Swift_Mailer::newInstance($transport);

    $message = Swift_Message::newInstance($subject)
        ->setFrom(array('noreply@du.medical.pro.com' => 'du.medical.pro'))
        ->setTo(array($mail))
        ->setBody($body);

    $ver = $mailer->send($message);
    if ($ver)
        echo "SUCCESS";
    else
        echo "ERROR";

}
?>