package main

import "fmt"

func main() {
    a := []int{1, 2, 3}
    b := append(a[:1], 10)
    fmt.Println("a = %v, b = %v", a, b)
}


/*

Slice - this is a pointer to an array
in this case array = [1, 2, 3]
in this case array not relocated because 
we not exceed capacity
and writing occured in the same memory


If exceed capacity ---> it will be created a new array
with capacity in two time bigger until 256
then it will be double 1.7

*/
