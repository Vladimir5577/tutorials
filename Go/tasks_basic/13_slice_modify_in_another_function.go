package main

import "fmt"

func modifyElement(slice []int) {
    slice[1] = 999
}

func addElement(slice []int) {
    slice = append(slice, 100)
    slice[0] = 888
    fmt.Println("Inside addElement: ", slice)
}

func main() {
    original := []int{10, 20, 30}

    fmt.Println("Initial: ", original)
    modifyElement(original)
    fmt.Println("After modifyElement: ", original)

    fmt.Println("Before addElement: ", original)
    addElement(original)
    fmt.Println("After addElement: ", original)

}


