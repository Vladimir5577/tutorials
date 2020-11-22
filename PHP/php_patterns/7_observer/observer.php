<?php

	interface Observer {
		public function addCurrency(Currency $currency);
	}

	class PriceSimulator implements Observer {
		private $currencies;

		public function __construct() {
			$this->currencies = array();
		}

		public function addCurrency(\Currency $currency) {
			array_push($this->currencies, $currency);
		}

		public function updatePrice() {
			foreach ($this->currencies as $currency) {
				$currency->update();
			}
		}
	}

	interface Currency {
		public function update();
		public function getPrice();
	}

	class Dollar implements Currency {
		private $price;
		public function __construct($price) {
			$this->price = $price;
			echo "Original Dollar Price: " . $price;		
		}

		public function update() {
			$this->price = $this->getPrice();
			echo "Dollar price update: " . $this->price;
		} 

		public function getPrice() {
			return $this->price += 0.2;
		}
	}

	class Rouble implements Currency {
		private $price;
		public function __construct($price) {
			$this->price = $price;
			echo "Original Rouble Price: " . $price;		
		}

		public function update() {
			$this->price = $this->getPrice();
			echo "Rouble price update: " . $this->price;
		} 

		public function getPrice() {
			return $this->price += 20;
		}
	}

	$priceSimulator = new PriceSimulator();

	$currency1 = new Dollar(10);
	$currency2 = new Rouble(70);

	$priceSimulator->addCurrency($currency1);
	$priceSimulator->addCurrency($currency2);

	$priceSimulator->updatePrice();
			
	$priceSimulator->updatePrice();


?>
