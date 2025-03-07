package main

import "fmt"

func modifyArray(arr [3]int) {
    arr[0] = 10
    fmt.Println("Inside modifyArray: ", arr)
}

func modifySlice(slice []int) {
    slice[0] = 10
    fmt.Println("Inside modifySlice: ", slice)
}

func main() {
    array := [3]int{1, 2, 3}
    slice := array[:]

    // pointer of array and pointer of slice ths same
    // slice will change an array because point to the same memory
    fmt.Printf("Pointer arrray %p\n", &array)
    fmt.Printf("Pointer slice %p\n", &slice[0])

    fmt.Println("Before modifyArray ", array)
    modifyArray(array)
    fmt.Println("After modifyArray ", array)

    fmt.Println("Before modifySlice ", slice)
    // when we passing slice to a function it's copying only pointer
    // and changes inside function will apply outside
    // slice point the same area of memory where array located
    // that means array will changed also
    modifySlice(slice)
    fmt.Println("After modifySlice ", slice)
    fmt.Println("Final array ", array)
}
