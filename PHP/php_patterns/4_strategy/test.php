<?php

	class StrategyCase {
		private $strategy = NULL;
		public function __construct ($case) {
			switch ($case) {
				case ('A'):
					$this->strategy = new UpperCase();
				break;
				case ('B'):
					$this->strategy = new StarCase();
				break;
			}
		}

		public function showBookTitle ($my_book) {
			return $this->strategy->showtitle($my_book);
		}
	}

	interface ShowTitleInterface {
		public function showTitle($a);
	}

	class UpperCase implements ShowTitleInterface {
		public function showTitle ($book_in) {
			$title = $book_in->getTitle();
			return strtoupper($title);
		}
	}

	class StarCase implements ShowTitleInterface {
		public function showTitle ($book_in) {
			$title = $book_in->getTitle($book_in);
			return Str_replace(' ', ' * ', $title);
		}
	}

	class Book {
		private $title;
		private $author;

		public function __construct ($title_in, $author_in) {
			$this->title = $title_in;
			$this->author = $author_in;
		}

		public function getTitle () {
			return $this->title;
		}

		public function getAuthor () {
			return $this->autthor;
		}

		public function getTitleAndAuthor () {
			return $this->title . ' wrottern by ' . $this->author;
		}
	}

	$book = new Book(' Design Patterns ', ' Author ');
	$strategyCase = new StrategyCase('A');

	echo $strategyCase->showBookTitle($book);

	echo ' ';

	$strategyCase2 = new StrategyCase('B');
	echo $strategyCase2->showBookTitle($book);


?>
