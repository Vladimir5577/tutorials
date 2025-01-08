package main

import (
	"fmt"
	"time"
)

func producer(d []int, ch chan<- int) {
	defer close(ch)
	for _, v := range d {
		fmt.Println("Sended to chanel. --- ", v)
		ch <- v * v
	}
}

func consumer(ch chan int) {
	for {
		select {
		case a, open := <-ch:
			if !open {
				fmt.Println("Chanel is closed!")
				return
			}
			fmt.Println(a)
			time.Sleep(2 * time.Second)
		}
	}
}

func main() {
	dataSlice := []int{1, 2, 3, 4, 5, 6, 7, 8}
	ch := make(chan int)

	go producer(dataSlice, ch)

	consumer(ch)

	fmt.Println("Finish.")
}
