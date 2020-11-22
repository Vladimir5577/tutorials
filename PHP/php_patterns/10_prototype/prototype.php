<?php

	abstract class BookPrototype {
		protected $title;
		protected $topic;
		abstract function __clone();
		function getTitle() {
			return $this->title;
		}		

		function setTitle($titleIn) {
			$this->title = $titleIn;
		}

		function getTopic() {
			return $this->topic;
		}
	}

	class PHPBookPrototype extends BookPrototype {
		function __construct() {
			$this->topic = "PHP";
		}
		function __clone() {
		
		}
	}

	class SQLBookPrototype extends BookPrototype {
		function __construct() {
			$this->topic = "SQL";
		}
		function __clone() {
		
		}
	}

	$phpProto = new PHPBookPrototype();
	$sqlProto = new SQLBookPrototype();

	$book1 = clone $sqlProto;
	$book1->setTitle("SQL For Cats");
	echo "Book 1 topic: " . $book1->getTopic() . "\n";
	echo "Book 1 title: " . $book1->getTitle() . "\n";

	$book2 = clone $phpProto;
	$book2->setTitle("Learn PHP");
	echo "Book 2 topic: " . $book2->getTopic() . "\n";
	echo "Book 2 title: " . $book2->getTitle() . "\n";



?>
