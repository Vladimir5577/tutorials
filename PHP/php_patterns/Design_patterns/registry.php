<?php

class Package {

	protected static $data = array();

    public static function set($key, $value) {
        self::$data[$key] = $value;
	}

    public static function get($key) {
        return isset(self::$data[$key]) ? self::$data[$key] : null;
	}

    final public static function removeObject($key) {
        if (array_key_exists($key, self::$data)) {
            unset(self::$data[$key]);
        }
    }
}

Package::set('name', 'Package name');
Package::set('name2', 'Package name2');

print_r(Package::get('name')); // Package name

echo "\n";

print_r(Package::get('name2'));

echo "\n";


?>
