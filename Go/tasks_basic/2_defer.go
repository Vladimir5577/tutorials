package main

import "fmt"

func main() {
    x := 10
    y := 20

    // in moment registration defer variable x = 10
    // and it won't be affected on future mutation of x
    defer func(val int) {
        fmt.Println("x = ", val)
    }(x)

    // in moment registration defer variable y put as a pointer
    // future changes will affected
    defer func() {
        // cloxure --- use variable in another scope 
        // where it was declared
        // variable y was created in main fucntion scope
        // but we use it in this scope
        fmt.Println("y = ", y)
    }()

    x = 101
    y = 202
    
    fmt.Println("Finish.")
}
