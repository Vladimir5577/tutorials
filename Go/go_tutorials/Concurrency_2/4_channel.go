package main

import (
	"fmt"
	"time"
)

func main() {
	message := make(chan string) // unbuffered channel

	go func() {
		for i := 1; i <= 10; i++ {
			message <- fmt.Sprintf("%d", i)
			time.Sleep(time.Millisecond * 500)
		}

		close(message)
	}()

	// for {
	// 	msg, open := <-message
	// 	if !open {
	// 		break
	// 	}

	// 	fmt.Println(msg)
	// }

	// better
	for msg := range message {
		fmt.Println(msg)
	}
}

/*
Unbuffered chaned with every iteration block goroutine.

*/
