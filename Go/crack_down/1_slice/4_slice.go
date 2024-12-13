package main

import "fmt"

func main() {
    slice := make([]int, 3, 4) // len = 3, cap = 4
    appending(slice)

    fmt.Println(slice) // why [0 0 0]
    fmt.Println(slice[:4]) // why [0 0 0 1] // added len
}

func appending(slice []int) { // len = 3, cap = 4
    slice = append(slice, 1) // len = 4, cap = 4 // [0 0 0 1]
}


// len has own scope in function
