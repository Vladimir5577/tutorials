package main

import "fmt"

func main() {
	go hello() // it won't show anything
}

func hello() {
	fmt.Println("it's most likely you will never see this")
}
