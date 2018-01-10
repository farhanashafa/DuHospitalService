<?php
/**
 * Created by PhpStorm.
 * User: shafa
 * Date: 5/7/17
 * Time: 11:07 AM
 */

session_start();
if( $_SESSION['uid'] ) {
    $val = $_SESSION['uid'];
    echo "$val";
}
else
    echo "no";
?>