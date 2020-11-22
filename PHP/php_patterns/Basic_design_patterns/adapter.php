<?php

	interface BookInterface {
		public function open();
		public function turnPage();
	}
	
	// for papper book
	class Book implements BookInterface {
		public function open () {
			var_dump('opening the paper book.');
		}

		public function turnPage () {
			var_dump('turning the page of the book.');
		}
	}
	
	class Person {
		public function read (BookInterface $book) {
			$book->open();
			$book->turnPage();
		}
	}


	// for eReader
	interface eReaderInterface {
		public function turnOn();
		public function pressNextButton();
	}

	class Kindle implements eReaderInterface {
		public function turnOn () {
			var_dump('turn the Kindle on');
		}

		public function pressNextButton () {
			var_dump('press the next button on the Kindle');
		}
	}

	class KindleAdapter implements BookInterface {
		private $kindle;

		public function __construct (Kindle $kindle) {
			$this->kindle = $kindle;
		}

		public function open () {
			return $this->kindle->turnOn();
		}

		public function turnPage () {
			return $this->kindle->pressNextButton();
		}
	}

	// (new Person)->read(new Book);

	(new Person)->read(new KindleAdapter(new Kindle));






?>
