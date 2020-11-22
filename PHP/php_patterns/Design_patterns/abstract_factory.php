<?php

class Config {
    public static $factory = 1;
}
interface Product {
    public function getName();
}
abstract class AbstractFactory {
    public static function getFactory() {
        switch (Config::$factory) {
            case 1:
                return new FirstFactory();
            case 2:
                return new SecondFactory();
        }
        throw new Exception('Bad config');
    }
    abstract public function getProduct();
}
class FirstFactory extends AbstractFactory {
    public function getProduct() {
        return new FirstProduct();
    }
}
class FirstProduct implements Product {
    public function getName() {
        return "The product from the first factory \n";
    }
}
class SecondFactory extends AbstractFactory {
    public function getProduct() {
        return new SecondProduct();
    }
}
class SecondProduct implements Product {
    public function getName() {
        return "The product from second factory \n";
    }
}

$firstProduct = AbstractFactory::getFactory()->getProduct();
Config::$factory = 2;
$secondProduct = AbstractFactory::getFactory()->getProduct();

// The first product from the first factory
print_r($firstProduct->getName());

// Second product from second factory
print_r($secondProduct->getName());


?>
