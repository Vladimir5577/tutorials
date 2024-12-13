package main

import (
	"fmt"
	"reflect"
	"unsafe"
)

func main() {
	slice := make([]int, 0, 3)
	slice = append(slice, 1<<10)
	sliceHeader := (*reflect.SliceHeader)(unsafe.Pointer(&slice))
	fmt.Println(reflect.TypeOf(slice), reflect.TypeOf(sliceHeader))
	fmt.Println("--------------------------------------------------")
	fmt.Printf("| slice: %v, size: %d, sliceHeader: %v |\n", slice, unsafe.Sizeof(slice), sliceHeader)
	fmt.Println("--------------------------------------------------")

	func(intLambdaSlice []int) {
		lambdaHeader := (*reflect.SliceHeader)(unsafe.Pointer(&intLambdaSlice))
		fmt.Printf("| in lambda: sliceHeader was copied BY VALUE: %v |\n", lambdaHeader)

		intLambdaSlice[0] = 1 << 11
		intLambdaSlice = append(intLambdaSlice, 1<<16)
		intLambdaSlice = append(intLambdaSlice, 1<<32)
        // if append more then capacity it will be new address
		intLambdaSlice = append(intLambdaSlice, 1<<32)
		intLambdaSlice = append(intLambdaSlice, 1<<32)

		fmt.Printf("| in lambda: slice after appending: %v |\n", lambdaHeader)
		fmt.Printf("| in lambda slice: %v|\n", intLambdaSlice)
		fmt.Println("--------------------------------------------------")
	}(slice)

	fmt.Printf("| initial slice: %v, sliceHeader: %v |\n", slice, sliceHeader)

	// let's extend slice
	slice = slice[:cap(slice)]
	fmt.Printf("| initial slice: %v, sliceHeader: %v |\n", slice, sliceHeader)

    // copy slice if you want immutability
    sliceCopy := make([]int, len(slice))
    copy(sliceCopy, slice)
    slice[0] = 32
    fmt.Println(slice, sliceCopy)
}
