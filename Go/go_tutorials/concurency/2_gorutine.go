package main

import (
	"fmt"
	"time"
)

func main() {
	// go count("sheep") // run this function on background
	// count("fish")

	// it will word if exist code below go rotine
	go count("sheep") // run this function on background
	go count("fish")

	time.Sleep(time.Second * 3)
}

func count(thing string) {
	for i := 1; true; i++ {
		fmt.Println(i, thing)
		time.Sleep(time.Millisecond * 500)
	}
}
