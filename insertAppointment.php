<?php
/**
 * Created by PhpStorm.
 * User: shafa
 * Date: 5/7/17
 * Time: 10:04 AM
 */
require_once('DBconnection.php');

$val = "";
$stuID = $_GET["stuID"];
$drname = $_GET["drname"];
$drdept = $_GET["drdept"];
$date = $_GET["date"];
$slot = $_GET["slot"];
$day = $_GET["day"];

$dr_query = "SELECT * FROM doctorList WHERE deptName ='$drdept' AND drName = '$drname'";
$dr_res = $db->query($dr_query);
if( $dr_res->num_rows == 1 ) {
    $dr = $dr_res->fetch_assoc();

    $day1  = $dr[$day];
    if( strlen($day1) < 1 ){
        $val = $day." is not his working day, check the schedule";
    }
    else {
        if( !strcmp( $slot,$day1) ) {
            $drID = $dr['dr_ID'];
            $availibality_query = "SELECT * FROM appoinmentTable WHERE dr_ID = '$drID' AND appointmentDate = '$date'";
            $res = $db->query($availibality_query);

            if( $res->num_rows == 3 ){
                $val = "No slot available, try another day";
            }
            else {
                $checkFlag = 0;
                if( $res->num_rows != 0 ){
                    while ($stu = $res->fetch_assoc()){
                        if( !strcmp($stuID,$stu['stu_id']) ){
                            $val = "You already have an appoinment";
                            $checkFlag = 1;
                        }
                    }
                }
                if( $checkFlag != 1 ) {
                    $ins_query = "INSERT INTO appoinmentTable (dr_ID,stu_id,appointmentDate,slot)
  	                              VALUES ('$drID','$stuID','$date','$slot')";
                    $res2 = $db->query($ins_query);
                    if ($res2 == true) {
                        $val = "success";
                    } else {
                        $val = "failed";
                    }
                }
            }
        }
        else{
            $val = "Wrong slot";
        }
    }
}
else{
    $val = "drQueryError";
}
echo "$val";
?>