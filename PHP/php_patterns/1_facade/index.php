<?php

	function __autoload($class_name) {
		include 'classes/' . $class_name . '.php';
	} 
	
	// Simple Checkout Process
	$productID = $_GET['productID'];

	$qtyCheck = new ProductQty();

	if ($qtyCheck->checkQty($productID) > 0) {
		// add product to card
		$addToCard = new AddToCart($productID);
		
		//calculate shipping charge
		$shipping = new ShippingCharge();
		$shipping->updateCharge();

		// calculate discount
		$discount = new Discount();
		$discount->applyDiscount();

		// save order
		$order = new Order();
		$order->generateOrder();

	}



?>
