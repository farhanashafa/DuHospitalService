<?php
/**
 * Created by PhpStorm.
 * User: emma
 * Date: 4/24/17
 * Time: 10:28 PM
 */
require_once('DBconnection.php');
$dropdown_chooser = intval($_GET['data']);

$sql = "SELECT hallName_full FROM hall_table ORDER BY hallName_full ASC";

$result = $db->query($sql);
$option = '';

while($row = $result->fetch_assoc())
{
    $option .= '<option value = "'.$row['hallName_full'].'">'.$row['hallName_full'].'</option>';
}



/*echo "<select name='Select Hall'>";
while ($row1 = $sql->fetch_array($result)){
    echo "<option value=\"hall1\">" . $row['hallNme_full'] . "</option>";
}
echo "</select>";*/



?>