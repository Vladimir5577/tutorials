<?php 

	class Book {
		private $title;
		private $author;

		public function __construct ($title_in, $author_in) {
			$this->setTitle($title_in);
			$this->setAuthor($author_in);
		}

		public function setTitle ($title_in) {
			$this->title = $title_in;	
		}

		public function setAuthor ($author_in) {
			$this->author = $author_in;
		}

		public function getTitle () {
			return $this->title;
		}

		public function getAuthor () {
			return $this->author;
		}

		public function setStarsOn () {
			$this->title = Str_replace(' ', '*', $this->getTitle());
			$this->author = Str_replace(' ', '*', $this->getAuthor());
		}

		public function setPercentOn () {
			
		}

		public function getTitleAndAuthor () {
			return $this->getTitle() . ' by ' . $this->getAuthor();
		}
	}

	abstract class BookCommand {
		private $command;
		function __construct ($object) {
			$this->command = $object;
		}

		abstract function execute();
	}

	class StarsCommand extends BookCommand {
		public function execute () {
			$this->command->setStarsOn();
		}
	}

	$book = new Book(' Design Patterns ', ' Author ');

	$starsCommand = new StarsCommand($book);

	$starsCommand->execute();

	echo $book->getTitleAndAuthor();





?>
