package main

import "fmt"

func Add(x, y int) int {
	return x + y
}

func Mul(x, y int) int {
	return x * y
}

// decorator for Add() and Mul()
// it will decorate passed function before calling
// in this example write log
func Calculate(x, y int, fn func(int, int) int) int {
	fmt.Printf("x=%d y=%d\n", x, y)
	return fn(x, y)
}

// explicit decoration
func CalculateAdd(x, y int) int {
	fmt.Printf("x=%d y=%d\n", x, y)
	return Add(x, y)
}

func main() {
	Calculate(10, 10, Add)
	Calculate(10, 10, Mul)

	CalculateAdd(10, 10)
}
