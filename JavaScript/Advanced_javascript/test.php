<?php
class Person {
    public $name;
    public $age;
    public $job;
    
    public function __toString() {
        return ($this->name ? ("Name is " . $this->name) : '') 
        	. ($this->age ?? " age is ".$this->age)
        	. ( $this->job ?? " And his job is " . $this->job);
   }
    
}

class PersonBuilder {
    
    protected $person;
    
    public function __construct($person = null) {
        if($person) {
            $this->person = $person;
        }else {
            $this->person = new Person();
        }
    }
    
    public function setName($name) {
        $this->person->name = $name;
        return $this;
    }
    
    public function setAge($age) {
        $this->person->age = $age;
        return $this;
    }
    
    public function build() {
        return $this->person;
    }
    
    // public function getJobBuilder() {
    //     return new JobBuilder($this->person);
    // }
}

// class JobBuilder extends PersonBuilder{
//     public function __construct($person) {
//         parent::__construct($person);
//     }
    
//     public function setJob($job) {
//         $this->person->job = $job;
//         return $this;
//     }
// }

$pb = new PersonBuilder();
$pb->setName("Bob")
    // ->getJobBuilder()
    // ->setJob("Developer")
    ->setAge(23);

echo($pb->build());

?>

