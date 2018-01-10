<?php
/**
 * Created by PhpStorm.
 * User: shafa
 * Date: 5/6/17
 * Time: 11:22 AM
 */
require_once('DBconnection.php');

$query = "SELECT * FROM department";
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