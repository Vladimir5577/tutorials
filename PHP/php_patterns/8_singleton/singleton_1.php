<?php

	class User {
			static $instance = null;	
			private function __construct() {
				echo "Constructor is calling !..\n";
			}

			public static function getInstance() {
				if(self::$instance) {
					return self::$instance;	
				}
				self::$instance = new self;
				return self::$instance;
			}

	}


	$instance = User::getInstance();
	$instance2 = User::getInstance();
	$instance3 = User::getInstance();
	
	
?>
