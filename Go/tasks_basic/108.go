package main

import "fmt"

type MyError struct{}

func (e *MyError) Error() string {
    return "Something went wrong."
}

func fail() error {
    var err *MyError = nil
    return err
}

func main() {
    err := fail()
    if err == nil {
        fmt.Println("No error")
    } else {
        fmt.Println("Error occured")
    }
}

/*

Interface contains type and value
in this case value nil  

*/
