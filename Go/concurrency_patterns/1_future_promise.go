package main

import (
	"fmt"
	"time"
)

func longRunningTask(data int, ch chan<- int) {
	fmt.Println("Start long task")
	time.Sleep(3 * time.Second)
	ch <- data * data
}

func main() {
	data := 2
	ch := make(chan int)

	// launch longRunningTask in gorutine
	go longRunningTask(data, ch)

    // long task running as background we can do something

    // waiting from chanel
    resp := <-ch
    fmt.Println(resp)

	fmt.Println("Finish.")
}
