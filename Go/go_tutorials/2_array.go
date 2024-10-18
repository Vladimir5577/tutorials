package main

import "fmt"

func main() {

	fmt.Println("====== Array ==================================")
	// initialize an array, with capacity in square bracket
	// it could not be more or less
	numbersArray := [2]int{}
	numbersArray[0] = 10
	numbersArray[1] = 20
	fmt.Println(numbersArray)
	fmt.Println("===============================================")

	fmt.Println("====== Slice ==================================")
	// another way to initialize, added capacity
	otherNumbers := make([]int, 2)
	fmt.Println("otherNumbers: ", otherNumbers)

	// more officient way to initialize
	numbers := []int{}
	numbers = append(numbers, 1)
	numbers = append(numbers, 2)

	fmt.Println(numbers)
	
}


