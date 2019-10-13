<?php
define('serverName', 'localhost');
define('userName', 'root');
define('passWord', 'password');
define('dbName', 'sqlAdmin');

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $connection = new mysqli(serverName, userName, passWord, dbName);
    if($connection->connect_error){
        die("ERROR: " . $connection->connect_error);
    }
    else{
        $select_all = "SELECT * FROM users";
        $result = $connection->query($select_all);
        while($row = $result->fetch_assoc()){
            echo    "<tr style='cursor:pointer;'>
                        <td class='id'>$row[id]</td>
                        <td class='first_name'>$row[first_name]</td>
                        <td class='last_name'>$row[last_name]</td>
                        <td class='dob'>$row[dob]</td>
                        <td class='address'>$row[address]</td>
                        <td class='phone'>$row[phone]</td>
                        <td class='email'>$row[email]</td>
                    </tr>";
        }   
    }
    $connection->close();
}
?>