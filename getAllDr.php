<?php
/**
 * Created by PhpStorm.
 * User: shafa
 * Date: 5/6/17
 * Time: 12:04 PM
 */
require_once('DBconnection.php');
$deptID = $_GET["deptID"];

$login_query = "SELECT * FROM doctorList where dept_ID = '$deptID'";
$result = $db->query($login_query);

if ($result->num_rows > 0) {
    while ($user = $result->fetch_assoc()){
        //echo $user['deptName'];
        $rows[] = $user;
    }
    echo json_encode($rows);
}
else {
    echo 'ERROR';
}
