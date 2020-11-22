<?php

	class BookSingleton {
		private $author = 'Author';
		private $title = ' Design Patterns ';
		private static $book = NULL;
		private static $isLoanedOut = FALSE;

		private function __construct () {
		}

		static function borrowBook () {
			if (FALSE == self::$isLoanedOut) {
				if (NULL == self::$book) {
					self::$book = new BookSingleton();
				}

				self::$isLoanedOut = TRUE;
				return self::$book;
			} else {
				return NULL;
			}
		}

		function returnBook (BookSingleton $bookReturned) {
			self::$isLoanedOut = FALSE;
		}
	
		function getAuthor () {
			return $this->author;
		}

		function getTitle () {
			return $this->title;
		}

		function getAuthorAndTitle () {
			return $this->getTitle() . ' by ' . $this->getAuthor();
		}
	}

	class BookBorrower {
		private $borrowedBook;
		private $haveBook = FALSE;

		function __construct () {
		}

		function getAuthorAndTitle () {
			if (TRUE == $this->haveBook) {
				return $this->borrowedBook->getAuthorAndTitle();
			} else {
				return "I don't have the book";
			}
		}

		function borrowBook () {
			$this->borrowedBook = BookSingleton::borrowBook();
			if ($this->borrowedBook == NULL) {
				$this->haveBook = FALSE;
			} else {
				$this->haveBook = TRUE;
			}
		}

		function returnBook () {
			$this->borrowedBook->returnBook($this->borrowedBook);
		}
	}

	
	$bookBorrower1 = new BookBorrower();
	$bookBorrower2 = new BookBorrower();
	$bookBorrower3 = new BookBorrower();
	

	$bookBorrower1->borrowBook();
	echo $bookBorrower1->getAuthorAndTitle();

	echo "\n";

	$bookBorrower2->borrowBook();
	echo $bookBorrower2->getAuthorAndTitle();
	
	echo "\n";

	$bookBorrower3->borrowBook();
	echo $bookBorrower3->getAuthorAndTitle();

	echo "\n";

	$bookBorrower1->returnBook();
	echo 'Borrower 1 return the Bookk';

	
	echo "\n";

	$bookBorrower2->borrowBook();
	echo $bookBorrower1->getAuthorAndTitle();

	echo "\n";



?>
