<?php
define('serverName', 'localhost');
define('userName', 'root');
define('passWord', 'password');
define('dbName', 'sqlAdmin');

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $search_param = $_POST['search-field'];
    $search_filter = $_POST['search-filter'];
    $connection = new mysqli(serverName, userName, passWord, dbName);
    if($connection->connect_error){
        die("ERROR:" . $connection->connect_error);
    }
    else{
        $select = "SELECT * FROM users WHERE POSITION('$search_param' IN $search_filter)";
        $result = $connection->query($select);
        while($row = $result->fetch_assoc()){
            echo    "<tr>
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