<?php

	class BookCommandee {
		private $author;
		private $title;

		function __construct ($title_in, $author_in) {
			$this->setAuthor($author_in);
			$this->setTitle($title_in);
		}

		function getAuthor () {
			return $this->author;
		}

		function setAuthor ($author_in) {
			$this->author = $author_in;
		}

		function getTitle () {
			return $this->title;
		}

		function setTitle ($title_in) {
			$this->title = $title_in;
		}

		function setStarsOn () {
			$this->setAuthor(Str_replace(' ', '*', $this->getAuthor()));
			$this->setTitle(Str_replace(' ', '*', $this->getTitle()));
		}

		function setStarsOff () {
			$this->setAuthor(Str_replace('*', ' ', $this->getAuthor()));
			$this->setTitle(Str_replace('*', ' ', $this->getTitle()));
		}

		function getAuthorAndTitle () {
			return $this->getTitle() . ' by ' . $this->getAuthor();
		}
	}

	abstract class BookCommand {
		protected $bookCommandee;

		function __construct ($bookCommandee_in) {
			$this->bookCommandee = $bookCommandee_in;
		}

		abstract function execute();
	}
	
	class BookStarsOnCommand extends BookCommand {
		function execute() {
			$this->bookCommandee->setStarsOn();
		}
	}

	class BookStarsOffCommand extends BookCommand {
		function execute() {
			$this->bookCommandee->setStarsOff();
		}	
	}
	
	// call command
	function callCommand (BookCommand $bookCommand_in) {
		$bookCommand_in->execute();
	}


	$book = new BookCommandee('Design Patterns', ' Author ');
	echo $book->getAuthorAndTitle();

	echo " ";

	$starsOn = new BookStarsOnCommand($book);
	callCommand($starsOn);
	echo $book->getAuthorAndTitle();

	echo ' ';


	$starsOff = new BookStarsOffCommand($book);
	callCommand($starsOff);
	echo $book->getAuthorAndTitle();

?>
