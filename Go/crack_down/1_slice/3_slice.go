package main

import "fmt"

func main() {
    slice := make([]int, 4) // len = 4, cap = 4
    mut(slice)

    fmt.Println(slice)
}

func mut(slice []int) {
    slice[0] = 999
}
