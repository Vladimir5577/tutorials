<?php

	class SpaceShip {
	
		public function getPower() {
			echo "Getting power!";		
		}

		public function blink() {
			echo "Blinking light";
		}

		public function makeNoise() {
			echo "Beep beep beep";
		}

		public function leaveTheGround() {
			echo "Leaving the ground!";
		}

		public function getBackOnTheGround() {
			echo "Getting back on the Ground";
		}

		public function turnOffEngine() {
			echo "Turning engine off.";
		}

		public function switchOffTheLights() {
			echo "Switch off the lights!";
		}
	}

	// facade

	class SpaceShipFacade {

		protected $spaceShip;

		public function __construct(SpaceShip $spaceShip) {
			$this->spaceShip = $spaceShip;
		}

		public function takeOff() {
			$this->spaceShip->getPower();
			$this->spaceShip->blink();
			$this->spaceShip->makeNoise();
			$this->spaceShip->leaveTheGround();
		}

		public function LandOn() {
			$this->spaceShip->getBackOnTheGround();
			$this->spaceShip->turnOffEngine();
			$this->spaceShip->switchOffTheLights();
		}

	}
	
	$ship = new SpaceShip();
	$spaceShip = new SpaceShipFacade($ship);
	$spaceShip->landOn();








?>
