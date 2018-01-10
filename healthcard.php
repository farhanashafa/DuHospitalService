<?php
//session_start();
require_once('DBconnection.php');

//ini_set('display_errors', 1);
//ini_set('log_errors', 1);
$val = "";

$totalStuQuery = "SELECT * FROM idHistory";
$totalStuQueryRes = $db->query($totalStuQuery);
if( $totalStuQueryRes == true ){
    $user = $totalStuQueryRes->fetch_assoc();
    $newID = (int)$user['student'];
    $newID += 1;
    $deleteQuery = "UPDATE idHistory SET student = '$newID'";
    $deleteQueryRes = $db->query($deleteQuery);

    if( $totalStuQueryRes == true ){
        $id = 'stu_' .$newID;
        $name = $_GET["name"];
        $mail = $_GET["mail"];
        $hallName = $_GET["hall"];
        $id_no = $_GET["id_no"];
        $regNo = $_GET["regNo"];
        $session1 = $_GET["session1"];
        $session2= $_GET["session2"];
        $pass2 = $_GET["pass2"];
        $password = $pass2;

        $ins_query = "INSERT INTO student_table (username,mail_id,regNo,session1,session2,idCardNo,password,hallName,stu_id,verified)
		VALUES ('$name', '$mail','$regNo','$session1','$session2','$id_no','$password','$hallName','$id','0')";
        $res2 = $db->query($ins_query);
        if ($res2 == true) {
            $val = "Success";
        }
        else {
            $val = "Failed!";
        }
    }
    else{
        echo "ErrorUpdate";
    }
}
else{
    echo "ErrorTotal";
}

echo "$val";
$db->close();

?>