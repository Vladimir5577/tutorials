<?php

	class SimpleBook {
	
		private $author;
		private $title;

		function __construct($author_in, $title_in) {
			$this->author = $author_in;
			$this->title = $title_in;
		}

		function getAuthor() {
			return $this->author;
		}

		function getTitle() {
			return $this->title;
		}

	}

	class BookAdapter {
		private $book;
		function __construct(SimpleBook $book_in) {
			$this->book = $book_in;
		}

		function getAuthorAndTitle() {
			return $this->book->getTitle() . " by " 
						. $this->book->getAuthor();
		}
	}
	
	// client
	
	$book = new SimpleBook("Author", "Design Pattern");
	$bookAdapter = new BookAdapter($book);

	echo $bookAdapter->getAuthorAndTitle();	
	







?>
