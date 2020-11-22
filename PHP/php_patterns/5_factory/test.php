<?php

	class Book {
		protected $title;
		protected $author;

		public function __construct ($title_in, $author_in) {
			$this->title = $title_in;
			$this->author = $author_in;
		}

		public function getBook () {
			return $this->title . ' wrotten by ' . $this->author;
		}
	}

	class BookFactory {
		public static function create ($title, $author) {
			return new Book($title, $author);
		}
	}

	$book1 = BookFactory::create(' Bla ', ' Foo ');
	echo $book1->getBook();

?>
