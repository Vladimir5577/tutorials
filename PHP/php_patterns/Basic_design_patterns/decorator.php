<?php

	interface CarService {
		public function getCost();

		public function getDescription();
	}
	
	// basic class
	class BasicInspection implements CarService {
		public function getCost () {
			return 25;
		}
		
		public function getDescription () {
			return 'Basic inspection';
		}
	}
	
	// decorator for BasicInspection
	class OilChange implements CarService {
		protected $carService;

		function __construct (CarService $carService) {
			$this->carService = $carService;
		}

		public function getCost () {
			return 29 + $this->carService->getCost();
		}

		public function getDescription () {
			return $this->carService->getDescription() . ', and oil change ';
		}
	}
	
	// decorator bor BasicInspection or OilChange
	class TireRotation implements CarService {
		protected $carService;

		function __construct (CarService $carService) {
			$this->carService = $carService;
		}

		public function getCost () {
			return 15 + $this->carService->getCost();
		}

		public function getDescription () {
			return $this->carService->getDescription() . ', and tire rotation ';
		}
	}

	// echo (new TireRotation(new OilChange(new BasicInspection())))->getCost();

	$basicInspection = new BasicInspection();

	$oilChange = new OilChange($basicInspection);

	$tireRotation = new TireRotation($oilChange);

	echo $tireRotation->getCost();

	echo "\n";

	echo $tireRotation->getDescription();

	echo "\n";




?>
