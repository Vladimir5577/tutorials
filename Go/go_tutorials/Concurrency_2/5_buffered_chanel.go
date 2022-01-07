package main

import "fmt"

func main() {
	message := make(chan string, 2)
	message <- "Hello"
	message <- "World"

	fmt.Println(<-message)
	message <- "!"

	fmt.Println(<-message)
	fmt.Println(<-message)
}
