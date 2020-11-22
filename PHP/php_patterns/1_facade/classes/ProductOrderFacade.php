<?php

	class ProductOrderFacade {

		public function __construct($productID) {
			$this->productID = $productID;
		}

		public function generateOrder() {
			if ($this->qtyCheck()) {
				// Add product to card
				$this->addToCart($this->productID);
				// calculate shipping charge
				$this->calculateShipping();
				// calculate discount
				$this->applyDiscount();
				// save order
				$this->placeOrder();

			}
		}

		private function qtyCheck() {
			// check in database
			return 100;
		}

		private function addToCart($product) {
			$addToCart = new AddToCart($productID);
		}

		private function calculateShipping() {
			// calculate Shippeing Charge
			$shipping = new ShippingCharge();
			$shipping->updateCharge();
		}

		private function calculateShipping() {
			// calculate shipping charge
			$shipping = new Shippingcharge();
			$shipping->updateCharge();
		}

		private function applyDiscount() {
			$discount = new Discount();
			$discount->applyDiscount();
		}

		private function placeOrder() {

		}

	}






?>