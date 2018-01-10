<?php
require_once('DBconnection.php');

$data = $_GET["data"];
$query = "SELECT regNo FROM registrationNo_table WHERE regNo = '$data'";

$result = $db->query($query);

$val1 = "";

//echo($result->num_rows);
if( $result->num_rows == 0 ){
    $val1= "Enter a valid registration no";
}
else{
    $query1 = "SELECT regNo FROM student_table WHERE regNo = '$data'";
    $result1 = $db->query($query1);
    if( $result1->num_rows == 1 ){
        $val1= "This registration no is already registered";
    }
    else {
        //echo "query successfull";
        $val1 = "Success";
    }
}
echo "$val1";
?>