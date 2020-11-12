<?php
	
	echo "---- Bool ------------------------------------------------- \n";

	class BoolType {
		public function getBool () : bool {
			return true;
		}
	}
	
	$boolType = new BoolType();
	print_r($boolType->getBool());
	
	echo "\n";
	echo "---- String ------------------------------------------------- \n";

	
	class Person {
		private $name = "Bob";
		public function getName () : string {
			return (string) $this->name;
		}
	}
	
	$person = new Person();

	echo ($person->getName());


	echo "\n";
	echo "---- Array  ------------------------------------------------- \n";
	
	class Numbers {
		private $num = [1, 2, 3, 4, 5];
		public function getArray () : array {
			return (array) $this->num;
		}
	}
	
	$numbers = new Numbers();
	print_r($numbers->getArray());


	echo "\n";
	echo "---- Class  ------------------------------------------------- \n";

	class Worker {
		public $name = "Mike";
	}

	class WorkerData {
		public function getWorker () : Worker {
			return new Worker();
		}
	}

	$workerData = new WorkerData();
	
	echo ($workerData->getWorker()->name);

	echo "\n";
	echo "------------------------------------------------------------- \n";

?>
