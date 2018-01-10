<?php
if(isset($_GET["mail"])) {
    $mail = $_GET["mail"];

    require_once('DBconnection.php');
    $success;
    $fail;

    $success = "Succesfully logged in";
    $fail = "invalid email id or password";

    //  require_once('../mysqli_connect.php');
    $query = "SELECT mail_id FROM student_table";
    $response = @mysqli_query($db, $query);
    $flag = 0;
    while ($row = mysqli_fetch_array($response)) {

        if ($row["mail"] == $mail) {
            $flag = 1;
            $query1 = "UPDATE student_table SET verified = 1 WHERE mail_id = '$mail'";
            $response1 = @mysqli_query($db, $query1);
            echo "successfully registered,Please login";
            echo '<a href="duHospital/index.html">Click here</a>';

            break;
        }
    }
    if ($flag == 0) {
        echo "not updated";
    }
}
?>