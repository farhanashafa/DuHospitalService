<?php
/**
 * Created by PhpStorm.
 * User: shafa
 * Date: 4/25/17
 * Time: 11:40 AM
 */
require_once('DBconnection.php');

$query = "SELECT * FROM doctorList";
$result = $db->query($query);
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

?>