package main

import "fmt"

// Как увеличивается слайс?
func main() {
	slice := make([]int, 0, 0) // len - 0, cap - 0

	slice = append(slice, 1) // len - 1, cap - 1
	fmt.Println(slice, len(slice), cap(slice))

	slice = append(slice, 1) // len - 2, cap - 2
	fmt.Println(slice, len(slice), cap(slice))

	slice = append(slice, 1) // len - 3, cap - 4
	fmt.Println(slice, len(slice), cap(slice))

	slice = append(slice, 1) // len - 4, cap - 4
	fmt.Println(slice, len(slice), cap(slice))

	slice = append(slice, 1) // len - 5, cap - 8
	fmt.Println(slice, len(slice), cap(slice))
}
