// What will be output ?

package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan bool)
	go func() {
		time.Sleep(3 * time.Second)
		fmt.Println("Separate goroutine running.")
		ch <- false
	}()

	ticker := time.NewTicker(time.Second)
	for {
		select {
		case <-ticker.C:
			fmt.Println("One tick done.")
			ch <- true
		case value := <-ch:
			fmt.Printf("Receive value %t\n", value)
			return
		}
	}
}


/*

// Hint
Since we create unbuffered channel 
we will catch dead lock in select on 23 line
true will put to the channel and block waiting that 
another goroutine will read it
But we have no goroutine for reading from channel
and catch deadlock

To solve this problem add buffer to channel in 11 line
	ch := make(chan bool, 1)

Don't forget close the chanel.
Because select will run forever

*/
