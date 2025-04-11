package main

import "fmt"

func main() {
    data := [...]int{1, 2, 3}

    for value := range data { // copy of array
        fmt.Println(value)
    }

    for value := range &data { // not a copy of array
        fmt.Println(value)
    }

    // take slice from array
    for value := range data[:] { // not a copy of array
        fmt.Println(value)
    }
}

/*

При передачи массива в цыкл - массив копируется.
Если массив небольшой - это не проблема, 
но при больших данных - проблема.

*/
