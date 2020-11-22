<?php

interface Factory {
    public function getProduct();
}
interface Product {
    public function getName();
}
class FirstFactory implements Factory {
    public function getProduct() {
        return new FirstProduct();
    }
}
class SecondFactory implements Factory {
    public function getProduct() {
        return new SecondProduct();
    }
}
class FirstProduct implements Product {
    public function getName() {
        return "The first product \n";
    }
}
class SecondProduct implements Product {
    public function getName() {
        return "Second product \n";
    }
}
$factory = new FirstFactory();
$firstProduct = $factory->getProduct();

$factory = new SecondFactory();
$secondProduct = $factory->getProduct();

// The first product
print_r($firstProduct->getName());

// Second product
print_r($secondProduct->getName());


?>
