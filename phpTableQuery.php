<?php
  $sql = 'select * from sales';
            $result = mysql_query($sql, $connection);
            echo "<table>";
            echo " <tr> <th> Client </th> <th> Amount </th> </tr> ";
            echo"<tr>";
            for ( $column = 0; $column < count($row); $column++)
            {
                echo "<td>" . $row[$column] . "</td>";
            }
            echo "</tr>

?>
 