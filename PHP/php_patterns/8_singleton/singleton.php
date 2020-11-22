<?php

	class Connection {
	
		private function __construct() {
			echo "New object created <br>";
		}

		public static function getInstance() {
			static $instance = null;

			if (null == $instance) {
				$instance = new static();
			} else {
				echo "Using existing object <br>";
			}

			return $instance;
		}
	
	}

	$object =  Connection::getInstance();
	$object2 = Connection::getInstance();
	$object3 = Connection::getInstance();






?>
