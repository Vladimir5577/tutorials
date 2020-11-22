<?php

	interface Food {
		public function cost();
	}

	class Burger implements Food{
		public function cost() {
			return 4;
		}
	}

	class CheeseBurger implements Food {
		protected $object;

		public function __construct (Food $item) {
			$this->object = $item;
		}

		public function cost () {
			return $this->object->cost() + 3;
		}
	}

	$burger = new Burger();
	$cheese_burger = new CheeseBurger($burger);

	echo $burger->cost();
	echo ' ';
	echo $cheese_burger->cost();




?>
