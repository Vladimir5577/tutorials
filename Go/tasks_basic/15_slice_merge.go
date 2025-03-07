package main

import "fmt"

func sliceCapcityDemo(data []int, start int) []int {
    subSlice := data[start:]
    return subSlice
}

func main() {
    data := make([]int, 5, 10)
    for i := range data {
        data[i] = i + 1
    }

    fmt.Printf("Initial slice: %v, len = %d, cap = %d\n", data, len(data), cap(data))
    
    data = sliceCapcityDemo(data,  1)
    fmt.Printf("Slice 1 : %v, len = %d, cap = %d\n", data, len(data), cap(data))

    dataNew := make([]int, 0, 3)
    dataNew = sliceCapcityDemo(data, 2)
    fmt.Printf("Slice 3 : %v, len = %d, cap = %d\n", dataNew, len(dataNew), cap(dataNew))
}
