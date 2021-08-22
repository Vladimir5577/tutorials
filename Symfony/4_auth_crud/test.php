<?php

interface CarBrandInterface
{
    public function getName(): string;

}

require 'vendor/autoload.php';

class Volvo implements CarBrandInterface
{
    public function getName(): string
    {
        return 'Volvo car drive';
    }

}

class Car
{
    public CarBrandInterface $brand;

    public function __construct(CarBrandInterface $brand)
    {
        $this->brand = $brand;
    }
}

class Di implements \Psr\Container\ContainerInterface
{
    private array $config;

    public function get(string $id)
    {
        if ($this->has($id)) {
            return $this->config[$id]($this);
        }
    }

    public function has(string $id)
    {
        return isset($this->config[$id]);
    }

    public function setConfig(array $config): self
    {
        $this->config = $config;
        return $this;
    }

}

$di = new Di();
$di->setConfig(
    [
        CarBrandInterface::class => static function (\Psr\Container\ContainerInterface $di): CarBrandInterface {
            return (new Volvo());
        },
        Car::class => static function(\Psr\Container\ContainerInterface $di) {
            return (new Car($di->get(CarBrandInterface::class)));
        }
    ]
);


$a = $di->get(Car::class);
print_r($a->brand->getName());


?>
