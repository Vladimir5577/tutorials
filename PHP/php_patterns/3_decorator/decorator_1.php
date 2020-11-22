<?php

	class Hello {
		public function sayHello() {
			return "Hello";
		}
	}

	class Decorator {
		public function __construct($object) {
			$this->object = $object;
		}

		protected function getObject() {
			return $this->object;
		}

		public function decorateOperation() {
			return $this->getObject()->sayHello();
		}
	}
	
	class AddWorld extends Decorator {
		public function decorate() {
		 	return parent::decorateOperation() . " World ";
		}
	}

	$hello = new Hello;
	$addWorld = new AddWorld($hello);

	echo $addWorld->decorate();

?>
