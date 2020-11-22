<?php

	abstract class HomeChecker {
		protected $successor;

		public abstract function check (HomeStatus $home);

		public function succeedWith (HomeChecker $successor) {
			$this->successor = $successor;
		} 

		public function next (HomeStatus $home) {
			if ($this->successor) {
				$this->successor->check($home);
			}
		}
	}

	class Lock extends HomeChecker {
		public function check (HomeStatus $home) {
			if ( ! $home->locked ) {
				// throw new Exception('The doors are not locked!! Abort alert');
				var_dump('The doors are not locked!! Abort alert');
			}
			
			$this->next($home);
		}
	}
	
	class Lights extends HomeChecker {
		public function check (HomeStatus $home) {
			if ( ! $home->lightsOff ) {
				// throw new Exception('The lights are on!! Abort alert.');
				var_dump('The lights are on!! Abort alert.');
			}

			$this->next($home);
		}
	}

	class Alarm extends HomeChecker {
		public function check (HomeStatus $home) {
			if ( ! $home->alarmOn ) {
				// throw new Exception('The alarm has not been set!! Abort alert.');	
				var_dump('The alarm has not been set!! Abort alert.');	
			}
			
			$this->next($home);
		}
	}

	class HomeStatus {
		// when true then throwing a mistake
		public $alarmOn = false;
		public $locked = true;
		public $lightsOff = true;
	}
	
	$locks = new Lock;
	$lights = new Lights;
	$alarm = new Alarm;

	$locks->succeedWith($lights);
	$lights->succeedWith($alarm);
	
	$locks->check(new HomeStatus);



?>
