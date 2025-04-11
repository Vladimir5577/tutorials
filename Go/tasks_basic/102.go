package main

import "fmt"

func main() {
    a, b := 22, 7.0
    var n = a / b
    fmt.Println(n)
}


/*

Output ?

// Invalid operation mismatch type

in go strict typing
we can not devide different types

*/
