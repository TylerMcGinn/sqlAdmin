<?php
require 'User.php';
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
        $updatedUser = new User($_POST['first_name'], $_POST['last_name'], $_POST['dob'], $_POST['address'], $_POST['phone'], $_POST['email']);
        $update = "UPDATE users
                   SET first_name = '$updatedUser->first_name',
                       last_name = '$updatedUser->last_name',
                       dob = '$updatedUser->dob',
                       address = '$updatedUser->address',
                       phone = '$updatedUser->phone',
                       email = '$updatedUser->email'
                   WHERE id = $_POST[id]";
        echo ($connection->query($update)) ? 'success' : $connection->error;
    }
    $connection->close();
}
?>