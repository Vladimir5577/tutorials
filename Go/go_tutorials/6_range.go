package main

import "fmt"

func main() {
	numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	sum := 0
	for index, val := range numbers {
		sum += val
		fmt.Print("[", index, ",", val, "] ")
	}

	fmt.Println("\nSum is : ", sum)

	kvs := map[int]string{1: "apple", 2: "banana"}
	for k, v := range kvs {
		fmt.Println(k, " -> ", v)
	}

	for i, c := range "Hello World!" {
		fmt.Print("[", i, ",", string(c), "] ")
	}

	fmt.Print("\n")
}
