package main

import "fmt"

func main() {
	slice := make([]int, 3, 4) // len = 3 cap = 4
	fmt.Println(slice)         // [0 0 0]

	test := slice[0:1:2]
	fmt.Println(len(test), cap(test)) // len = 1 cap = 2 [0]

	test = append(test, 101)          // len = 2 cap = 2
	fmt.Println(len(test), cap(test)) // len = 2 cap = 2 [0 1]
	fmt.Println(slice)                // [0 101 0]

	test = append(test, 102)                // len = 3, cap = 4
	fmt.Println(len(test), cap(test), test) // len = 3, cap = 4 [0 101 102]
	fmt.Println(slice)                      // [0 101 0]
}
