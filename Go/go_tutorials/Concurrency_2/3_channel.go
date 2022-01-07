package main

import (
	"fmt"
	"time"
)

func main() {
	message := make(chan string)

	go func() {
		time.Sleep(2 * time.Second)
		message <- "Hello"
	}()

	fmt.Println(<-message) // it will wait until get a message from the channel
}

/*

Reading and writing in the channels block execution of go routines.

*/
