<?php

	abstract class AbstractObserver {
		abstract function update(AbstractSubject $subject_in);
	}

	abstract class AbstractSubject {
		abstract function attach(AbstractObserver $observer_in);
		abstract function detach(AbstractObserver $observer_in);
		abstract function notify();
	}

	class PatternObserver extends AbstractObserver {
		public function update ($object) {
			echo ' / ' . $object->getFavorites();
		}
	}

	class PatternSubject extends AbstractSubject {
		private $observers = array();

		function attach (AbstractObserver $observer_in) {
			$this->observers[] = $observer_in;
		}

		function detach (AbstractObserver $observer_in) {
			foreach ($this->observers as $key => $value) {
				if ($value == $observer_in) {
					unset($this->observers[$key]);
				}
			}
		}

		function notify () {
			foreach ($this->observers as $obs) {	
				$obs->update($this);
			}
		}

		function updateFavorites ($newFavorites) {
			$this->favorites = $newFavorites;
			$this->notify();
		}

		function getFavorites () {
			return $this->favorites;
		}
				
	}	


	// here we are using the classes
	//
	$a = new PatternSubject();
	$b = new PatternObserver();
	$a->attach($b);
	$a->updateFavorites('abstract factory, decorator, visitor');
	$a->updateFavorites('Bla, Foo, Bar, Bob, Mike');
	$a->detach($b);
	$a->updateFavorites('a, b, c, as, wer');

	


	
?>  
