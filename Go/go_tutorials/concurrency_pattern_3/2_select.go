package main

import "fmt"

func main() {
	myChannel := make(chan string)
	anotherChannel := make(chan string)

	go func() {
		myChannel <- "Hello"
	}()

	go func() {
		anotherChannel <- "World"
	}()

	// select will read from channels but both channels won't be readed
	select {
	case msgFromMyChannel := <- myChannel:
		fmt.Println(msgFromMyChannel)
	case msgFromAnotherChannel := <- anotherChannel:
		fmt.Println(msgFromAnotherChannel)	
	}
}