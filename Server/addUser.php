<?php
require './User.php';
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
        $newUser = new User($_POST['first_name'], $_POST['last_name'], $_POST['dob'], $_POST['address'], $_POST['phone'], $_POST['email']);
        $insert = "INSERT INTO users 
                   (first_name, last_name, dob, address, phone, email) 
                   VALUES 
                   ('$newUser->first_name', '$newUser->last_name', '$newUser->dob', '$newUser->address', '$newUser->phone', '$newUser->email')";
        echo ($connection->query($insert) == TRUE) ? 'success' : $connection->error;
    }
    $connection->close();
}
?>