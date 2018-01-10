<?php
/**
 * Created by PhpStorm.
 * User: emma
 * Date: 5/2/17
 * Time: 8:47 AM
 */
require_once('DBconnection.php');

$query = "SELECT * FROM hall_table";
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