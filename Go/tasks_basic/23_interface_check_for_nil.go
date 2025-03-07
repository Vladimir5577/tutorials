package main

import "fmt"

type SomeStruct struct {
    Value int
}

func CheckForNil(i interface{}) {
    if i == nil {
        fmt.Println("This is nil")
        return
    }

    fmt.Println("This is not nil")
}

func main() {
    var s *SomeStruct
    CheckForNil(s)
}

/*

Pointer has zero value nil
Interface under hood has two pointer
one - table of methods second on certin interface

*/
