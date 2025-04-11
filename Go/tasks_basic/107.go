package main

import "fmt"

func main() {
	ch := make(chan int, 2)
	ch <- 1
	ch <- 2
	<-ch
	close(ch)
	a := <-ch
	b := <-ch
	c := <-ch
	fmt.Println(a, b, c)
}

/*
We can read from closed channel multiple times

Close closed chanel ---> panic

 */
