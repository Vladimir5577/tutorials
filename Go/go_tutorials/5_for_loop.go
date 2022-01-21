package main

import "fmt"

func for1() {
	numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	sum := 0
	for i := 0; i < len(numbers); i++ {
		sum += numbers[i]
	}

	fmt.Println("Sum is : ", sum)
}

func for2() {
	numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	sum := 0
	for _, val := range numbers {
		sum += val
	}

	fmt.Println("Sum is : ", sum)
}

func for3() {
	numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	sum := 0
	i := 0
	for i < len(numbers) {
		sum += numbers[i]
		i++
	}

	fmt.Println("Sum is : ", sum)
}

func for4() {
	numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	sum := 0
	i := 0
	for {
		sum += numbers[i]
		i++
		if i >= len(numbers) {
			break
		}
	}

	fmt.Println("Sum is : ", sum)
}

func main() {
	for1()
	for2()
	for3()
	for4()
}
