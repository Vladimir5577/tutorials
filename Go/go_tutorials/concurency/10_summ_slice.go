package main

import (
	"fmt"
)

func sumPart(arr []int, ch chan int) {
	sum := 0
	for _, num := range arr {
		sum += num
	}
	ch <- sum
}

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}
	numGorutines := 3
	ch := make(chan int, numGorutines)

	partSize := len(arr) / numGorutines

	for i := 0; i < numGorutines; i++ {
		startIndex := i * partSize
		endIndex := startIndex + partSize
		go sumPart(arr[startIndex:endIndex], ch)
	}

	totalSum := 0

	for i := 0; i < numGorutines; i++ {
		totalSum += <-ch
	}

	fmt.Println("Total sum: ", totalSum)
}
