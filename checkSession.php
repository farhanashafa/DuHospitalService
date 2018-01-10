<?php
/**
 * Created by PhpStorm.
 * User: shafa
 * Date: 5/5/17
 * Time: 10:50 PM
 *
 */
session_start();
if( $_SESSION['uid'] ) {
    echo "yes";
}
else
    echo "no";
?>