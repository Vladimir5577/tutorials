<?php

	abstract class Product {
		abstract public function getTitle();
	}

	abstract class Provider {
		abstract public function create($id);
	}

	class LenovoPhoneProduct extends Product {
		public $title;
		public function __construct($id) {
			echo "I " , __CLASS__ , "<br>";
			echo $this->title . "<br>";
			echo $id . "<br>";
		}

		public function getTitle() {
			echo $this->title . "<br>";
		}
	}

	class LenovoCompanyProvider extends Provider {
		public function create($id) {
			return new LenovoPhoneProduct($id);
		}
	}

	$fabric = new LenovoCompanyProvider();
	$phone = $fabric->create(34);
	$phone->getTitle();




?>
