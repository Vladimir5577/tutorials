<?php

	interface Logger {
		public function log($data);
	}

	class LogToFile implements Logger {
		public function log ($data) {
			var_dump('log ths data to a file');
		}
	}
	
	class LogToDatabase implements Logger {
		public function log ($data) {
			var_dump('log ths data to a database');
		}
	
	}

	class LogToServer implements Logger {
		public function log ($data) {
			var_dump('log the data to a server');
		}
	}

	class App {
		public function log ($data, Logger $logger = null) {
			$logger = $logger ?? new LogToFile;				
			$logger->log($data);
		}
	}

	$app = new App;

	$app->log('Some information here', new LogToDatabase);
	

?>
