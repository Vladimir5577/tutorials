<?php

	class StrategyContext {
		private $strategy = NULL;

		public function __construct ($strategy_ind_id) {
			switch ($strategy_ind_id) {
				case "C":
					$this->strategy = new StrategyCaps();
				break;
				case "E":
					$this->strategy = new StrategyExclaim();
				break;
				case "S":
					$this->strategy = new StrategyStars();
				break;
			}
		}

		public function showBookTitle($book) {
			return $this->strategy->showTitle($book);
		} 
	}

	interface StrategyInterface {
		public function showTitle($book_in);
	}

	class StrategyCaps implements StrategyInterface {
		public function showTitle($book_in) {
			$title = $book_in->getTitle();
			return strtoupper($title);
		}
	}

	class StrategyExclaim implements StrategyInterface {
		public function showTitle ($book_in) {
			$title = $book_in->getTitle();
			return Str_replace(' ', ' ! ', $title);
		}
	}

	class StrategyStars implements StrategyInterface {
		public function showTitle($book_in) {
			$title = $book_in->getTitle();
			return Str_replace(' ', '*', $title);
		}
	}

	class Book {
		private $author;
		private $title;
		function __construct ($title_in, $author_in) {
			$this->author = $author_in;
			$this->title = $title_in;
		}

		function getAuthor () {
			return $this->author;
		}

		function getTitle() {
			return $this->title;
		}

		function getAuthorAndTitle() {
			return $this->getTitle() . ' by ' . $this->getAuthor();
		}
	}

	$book = new Book('PHP for Cats', 'Larry Truett');
	$strategyContext_C = new StrategyContext('C');

	echo $strategyContext_C->showBookTitle($book);
	echo ' ';

	$strategyContext_E = new StrategyContext('E');
	echo $strategyContext_E->showBookTitle($book);
	echo ' ';

	$strategyContext_S = new StrategyContext('S');
	echo $strategyContext_S->showBookTitle($book);




?>
