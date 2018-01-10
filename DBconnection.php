<?php
/**
 * Created by PhpStorm.
 * User: emma
 * Date: 4/24/17
 * Time: 2:52 PM
 */
//session_start();
$servername = "localhost";
$username = "duhospital";
$password = "duhospital";
$dbname = "duhospital";


/*$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "duhospital";*/
//create connection


$db = new mysqli($servername, $username, $password, $dbname);

//check connection
if ($db -> connect_error){
    die("connection failed ".$db->connect_error);
}
else{
    //echo "connection successful";
}
?>