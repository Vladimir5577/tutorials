package main

import "fmt"

func main() {
    slice := []int{1, 2, 3, 4}
    fmt.Println(len(slice), cap(slice)) // 4 4

    slice1 := slice[:1]
    fmt.Println(len(slice1), cap(slice1)) // 1 4
    slice[0] = 101

    fmt.Println(slice)
}
