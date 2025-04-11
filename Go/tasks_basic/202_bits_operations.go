package main

import "fmt"

func main() {
    var x uint8 = 3
    var y int8 = 3

    fmt.Println(^x)
    fmt.Println(^y)
}

/*
While initialization:

    var x uint8 = 3  // 0000 0011
    var y int8 = 3   // 0000 0011

After inversion zero become 1 and 1 become 0:
    
    ^x // 1111 1100
    ^y // 1111 1100

У беззнаковых переменных первый бит ничего не значит

    fmt.Println(^x) // [1]111 1100  --- у беззнаковых ничего не значит
    fmt.Println(^y) // [1]111 1100  --- у знаковых значит то что 1 - отрицательное число

*/
