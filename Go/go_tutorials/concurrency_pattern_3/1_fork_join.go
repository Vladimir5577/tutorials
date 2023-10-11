package main

import "fmt"

func main() {
	myChannel := make(chan string)

	// create go rutine with anonimous functiom and inwoke it 
	// then send data to the channel
	// fork main go rutine
	go func() {
		myChannel <- "Hello"
	}()

	// main go rutine block here
	// main go rutine will wait until data reads from the channel
	// or channel will cloce
	// join go rutine created ubowe to the main go rutine
	msg := <-myChannel

	fmt.Println(msg)
}