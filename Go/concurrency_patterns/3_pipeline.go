package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	value := 1
	startTime := time.Now()
	wg := sync.WaitGroup{}

	wg.Add(1)
	go func() {
		defer wg.Done()
		fmt.Println(multiply(add(value, 2), 3))
	}()

	wg.Add(1)
	go func() {
		defer wg.Done()
		fmt.Println(multiply(add(value, 3), 4))
	}()

	wg.Add(1)
	go func() {
		defer wg.Done()
		fmt.Println(add(multiply(value, 2), 3))
	}()

	wg.Add(1)
	go func() {
		defer wg.Done()
		fmt.Println(add(multiply(value, 4), 5))
	}()

	wg.Wait()
	fmt.Println(time.Since(startTime))
	fmt.Println("Finish.")
}

// add — функция сложения
func add(a, b int) int {
	time.Sleep(3 * time.Second)
	return a + b
}

// multiply — функция умножения
func multiply(a, b int) int {
	time.Sleep(3 * time.Second)
	return a * b
}
