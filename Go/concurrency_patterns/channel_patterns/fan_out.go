package main

import (
	"fmt"
	"sync"
)

func SplitChannel[T any](inputCh <-chan T, n int) []<-chan T {
	outputCh := make([]chan T, n)
	for i := 0; i < n; i++ {
		outputCh[i] = make(chan T)
	}

	go func() {
		idx := 0
		for value := range inputCh {
			outputCh[idx] <- value
			idx = (idx + 1) % n
		}

		for _, ch := range outputCh {
			close(ch)
		}
	}()

	resultChs := make([]<-chan T, n)
	for i := 0; i < n; i++ {
		resultChs[i] = outputCh[i]
	}

	return resultChs
}

func main() {
	channel := make(chan int)

	go func() {
		defer close(channel)
		for i := 0; i < 10; i++ {
			channel <- i
		}
	}()

	channels := SplitChannel(channel, 2)

	var wg sync.WaitGroup
	wg.Add(2)

	go func() {
		defer wg.Done()
		for value := range channels[0] {
			fmt.Println("ch1: ", value)
		}
	}()

	go func() {
		defer wg.Done()
		for value := range channels[1] {
			fmt.Println("ch2: ", value)
		}
	}()

	wg.Wait()
}

/*

Devide one channel to multiple channels.
Write will be only in one place.

*/
