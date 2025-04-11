package main

import "fmt"

func init() {
    fmt.Printf("A ")
}

func init() {
    fmt.Printf("B ")
}

func main() {
    fmt.Println()
}

/*

func init use before main function
init we can declare with the same name multiple times
init executed in order that writen

init can be used in different packages 
will be executed first init from child (imported) packages
then init in main package

*/
