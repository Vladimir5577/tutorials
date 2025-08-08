package main

import "fmt"

func process(closeCh <-chan struct{}) <-chan struct{} {
	closeDoneCh := make(chan struct{})

	go func() {
		defer close(closeDoneCh)

		for {
			select {
			case <-closeCh:
				return
			default:
				// processing...
			}
		}
	}()

	return closeDoneCh
}

func main() {
	closeCh := make(chan struct{})
	closeDoneCh := process(closeCh)

	close(closeCh)
	<-closeDoneCh

	fmt.Println("Terminated!")
}
