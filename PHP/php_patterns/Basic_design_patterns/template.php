<?php

	abstract class Sub {
		public function make () {
			return $this->layBread()->addLettuce()->addPrimaryToppings()->addSauces();
		}

		protected function layBread () {
			var_dump('laying down the bread');
			return $this;
		}

		protected function addLettuce () {
			var_dump('add some lettuce');
			return $this;
		}

		protected function addSauces () {
			var_dump('add oil and vinegar');
		}

		protected abstract function addPrimaryToppings();
	}

	class VeggieSub extends Sub {
		public function addPrimaryToppings () {
			var_dump('add some VEGGIES');
			return $this;
		}
	}
	
	class TurkeySub extends Sub {
		public function addPrimaryToppings () {
			var_dump('add some TURKEY');
			return $this;
		}
	}
	

	(new VeggieSub)->make();
	echo "\n";
	(new TurkeySub)->make();



?>
