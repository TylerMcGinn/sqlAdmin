<?php
define('serverName', 'localhost');
define('userName', 'root');
define('passWord', 'password');
define('dbName', 'sqlAdmin');

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $connection = new mysqli(serverName, userName, passWord, dbName);
    if($connection->connect_error){
        die("ERROR: " . $connection->connect_error);
    }
    else{
        $delete = "DELETE FROM users WHERE id = $_POST[id]";
        echo ($connection->query($delete) == TRUE) ? 'success' : $connection->error;
    }
    $connection->close();
}
?>