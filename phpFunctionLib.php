  <?php

  //Connect to DB, suppress error, but return failure/success via connection param
  function connect_db($host, $id, $pwd)
  {
    $connection = @mysql_connect($host, $id, $pwd);
    return $connection;
  }

  
?>