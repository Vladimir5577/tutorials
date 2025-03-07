package main

import "fmt"

func main() {
    data := []int{10, 20, 30, 40}
    fmt.Println("Initial slice: ", data)

    modify(data[:2])
    fmt.Println("After modifying: ", data)
}

func modify(slice []int) {
    slice = append(slice, 50, 60, 70, 80)
    fmt.Println("Inside modiry function: ", slice)
}

/*

Everything passing to function by value is copied.
When we passing slice it is also copied. 
But point to the same array address in memory.
Changes inside modify function will apply to initial data slice.

But in this case we exceed capacity.
And it created another slice with nother memory allocation inside modify function.
So changes will not apply to initial data slice in main function.

*/
