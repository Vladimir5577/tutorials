<?php

	class BookSingleton {
		private $author = ' Author ';
		private $title = ' Design Patterns ';

		public function getAuthor () {
			return $this->author;
		}

		public function getTitle () {
			return $this->title;
		}

		public function getAuthorAndTitle () {
			return $this->getTitle() . ' by ' . $this->getAuthor();
		}
	}

	class Book {
		public function __construct () {
			if (RentBook::getRentBook() == NULL) {
				RentBook::setRentBook();			
				$book = new BookSingleton;
				echo $book->getAuthorAndTitle() . "\n";
			} else {
				echo "Someone rent the book \n";
			}
		}
	}

	class RentBook {
		private static $rentBook = NULL;

		public static function setRentBook () {
			self::$rentBook = true;
		}

		public static function getRentBook () {
			return self::$rentBook;
		}
	}

	$book = new Book;
	$book2 = new Book;
	$book3 = new Book;



?>
