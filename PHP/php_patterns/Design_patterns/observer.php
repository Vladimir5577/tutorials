<?php

interface Observer {
  function onChanged($sender, $args);
}

interface Observable {
  function addObserver($observer);
}

class CustomerList implements Observable {
	private $_observers = array();

	public function addCustomer($name) {
		foreach($this->_observers as $obs) {
			$obs->onChanged($this, $name);
		}		
	}

	public function addObserver($observer) {
		$this->_observers []= $observer;
	}
}

class CustomerListLogger implements Observer {
	public function onChanged($sender, $args) {
		echo( "'$args' Customer has been added to the list \n" );
	}
}

$ul = new CustomerList();
$ul->addObserver( new CustomerListLogger() );
$ul->addCustomer( "Jack" );


?>
