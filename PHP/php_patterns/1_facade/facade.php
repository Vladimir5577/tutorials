<?php

	function __autoload($class_name) {
		include 'classes/' . $class_name . '.php';
	} 

	$product = $_GET['productID'];

	$order = new ProductOrderFacade($productID);
	$order->generateOrder();