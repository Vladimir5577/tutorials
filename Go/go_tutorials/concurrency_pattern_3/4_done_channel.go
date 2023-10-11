package main

import (
	"fmt"
	"time"
)

// done <-chan bool --- read only syntax 
func doWork(done <-chan bool) {
	for {
		select {
		case <-done:
			return
		default:
			fmt.Println("Doing Work")
		}
	}
}

func main() {
	done := make(chan bool)

	go doWork(done)

	time.Sleep(time.Second * 3)

	close(done)
}


/*
Done channel help close parent go rutine close it's children.

*/