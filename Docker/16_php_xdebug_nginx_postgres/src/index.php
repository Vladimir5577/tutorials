<?php

// uncomment it to see xdebug setting
//xdebug_info();
//exit;

$host = 'postgre_db';
$dbname = 'users';
$username = 'root';
$password = 'password';

$dsn = "pgsql:host=$host;port=5432;dbname=$dbname;user=$username;password=$password";

try{
    $conn = new PDO($dsn);

    if($conn){
        echo "Successfully connected to $dbname!";
    }
}catch (PDOException $e){
    echo $e->getMessage();
}

$a = 123;
$b = 456;

$c = $a + $b;

echo "Hello from docker! 132 $c";


?>