<?php

	class Book {
	
		private $author;
		private $title;

		function __construct($title_in, $author_in) {
			$this->author = $author_in;
			$this->title = $title_in;
		}

		function getAuthor() {
			return $this->author;
		}

		function getTitle() {
			return $this->title;
		}

		function getAuthorAndTitle() {
			return $this->getTitle() . " by " . $this->getAuthor();
		}
	
	}

	class BookTitleDecorator {
		protected $book;
		protected $title;

		public function __construct(Book $book_in) {
			$this->book = $book_in;
			$this->resetTitle();
		}

		function resetTitle() {
			$this->title = $this->book->getTitle();
		}

		function showTitle() {
			return $this->title;
		}
	}

	class BookTitleExclaimDecorator extends BookTitleDecorator {
		private $btd;

		public function __construct(BookTitleDecorator $btd_in) {
			$this->btd = $btd_in;
		}

		function exclaimTitle() {
			$this->btd->title = " ! " . $this->btd->title . " ! ";
		}
	}


	$patternBook = new Book("Design Pattern", "Author");
	$decorator = new BookTitleDecorator($patternBook);
	$exclaimDecorator = new BookTitleExclaimDecorator($decorator);

	echo $exclaimDecorator->exclaimTitle();

	echo $decorator->showTitle();





?>
