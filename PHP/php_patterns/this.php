<?php
class PrintName {
    public function run($dt) {
        var_dump($dt->name);
    }
}


class User {
    public $name;
    public $myObj;
    
    public function __construct($obj) {
      $this->myObj = $obj;  
    }
    
    public function setName($nm) {
       $this->name = $nm;
       $this->myObj->run($this);
    }
}

$user1 = new User(new PrintName());
$user1->setName("Bob");

$user2 = new User(new PrintName());
$user2->setName("Jack");

?>
