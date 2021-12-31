package main

import (
	"fmt"
	"time"
)

func main() {
	count("sheep") // it never finish
	count("fish")
}

func count(thing string) {
	for i := 1; true; i++ {
		fmt.Println(i, thing)
		time.Sleep(time.Millisecond * 500)
	}
}
