package main

import "fmt"

func main() {
    slice := make([]int, 3, 4) // len = 3 cap = 4
    appendingSlice(slice[:1])  // len = 1 cap = 4

    fmt.Println(slice) // why ? // [0 1 0]
}

func appendingSlice(slice []int) { // len = 1 cap = 4
    fmt.Println(slice) // [0]
    slice = append(slice, 1) // len = 2 cap = 4
    fmt.Println(slice) // [0 1]
}
