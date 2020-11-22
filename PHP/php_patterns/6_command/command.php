<?php

	class RadioControl {
		public function turnOn() {
			echo "Turning On Radio";
		}

		public function turnOff() {
			echo "Turning Off Radio";
		}
	}

	interface RadioCommand {
		public function execute();
	}

	class TurnOnRadio {
		private $radioControl;

		public function __construct(RadioControl $radioControl) {
			$this->radioControl = $radioControl;
		}

		public function execute() {
			$this->radioControl->turnOn();
		}
	}

	class TurnOffRadio {
		private $radioControl;

		public function __construct(RadioControl $radioControl) {
			$this->radioControl = $radioControl;
		}

		public function execute() {
			$this->radioControl->turnOff();
		}
	}

	$commandAction = "TurnOnRadio";
	$command = new $commandAction(new RadioControl()); 
	$command->execute();






?>
