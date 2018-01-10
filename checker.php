<?php

/**
 * Created by PhpStorm.
 * User: emma
 * Date: 4/3/17
 * Time: 3:23 PM
 */


$num = $_GET["num"];
echo $num;

if($num % 2 == 0)
{
    echo "even";
}
else echo "odd";
?>
