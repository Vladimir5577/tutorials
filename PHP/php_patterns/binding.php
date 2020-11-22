<?php

	class Container
	{

		protected $bindings = [];

		public function bind ($name, callable $resolver) {
			$this->bindings[$name] = $resolver;
		}

		public function make ($name) {
			return $this->bindings[$name]();
		}
	}

	$container = new Container;
	$container->bind('Game', function () {
		return 'Football';
	});

	print_r($container->make('Game'));

?>
