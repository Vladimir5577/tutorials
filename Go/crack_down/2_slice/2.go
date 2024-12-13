package main

import (
	"fmt"
	"reflect"
	"unsafe"
)

func main() {
	intSlice := make([]int, 0, 10)
	// _ = intSlice[0] // panic: runtime error index out of range [0] with length 0
	for i := 0; i < 10; i++ {
		intSlice = append(intSlice, i)
	}
	fmt.Println("--------------------------------------------")
	fmt.Printf("| intSlice slice %v, len: %d, cap: %d |\n",
		intSlice, // 0  1 2 3 ... 9
		len(intSlice),
		cap(intSlice),
	)

	fmt.Println("--------------------------------------------")
	// Can cut slice from array or other slice
	cut := intSlice[2:4]
	fmt.Printf(
		"| cut clice %v len: %d, cap: %d |\n",
		cut,      // 2 3
		len(cut), // len 2 as we asked
		cap(cut), // cap 8
	)

	fmt.Println("--------------------------------------------")
	// _ = cut[2] //  panic: runtime error index out of range [2] with length 8
	cut = cut[:cap(cut)] // 2 3 4 5 6 7 8 9 - shared stored
	_ = cut[2]           // now it's ok
	fmt.Printf("| cut extended %v, len: %d, cap: %d |\n", cut, len(cut), cap(cut))
	fmt.Println("--------------------------------------------")

	fmt.Printf(
		"| intSlice: %d, cut: %d |\n"+
			"| intSlice %v, cut: %v |\n",
		reflect.ValueOf(intSlice).Pointer(),
		reflect.ValueOf(cut).Pointer(),
		*(*reflect.SliceHeader)(unsafe.Pointer(&intSlice)),
		*(*reflect.SliceHeader)(unsafe.Pointer(&cut)),
	)
	fmt.Println("--------------------------------------------")

	// intSlice and cut shares data storage:
	cut[0] = 1 << 32
	fmt.Printf("| intSlice: %v, len: %d, cap: %d\n", intSlice, len(intSlice), cap(intSlice))
	fmt.Printf("| cut: %v, len: %d, cap: %d |\n", cut, len(cut), cap(cut))
	fmt.Println("--------------------------------------------")

	// append exceeds max capacity new array will be created for cut:
	cut = append(cut, (1<<32)+1)
	cut[0] = 1 << 10
	fmt.Printf("| intSlice: %v, len: %d, cap: %d\n", intSlice, len(intSlice), cap(intSlice))
	fmt.Printf("| cut: %v, len: %d, cap: %d |\n", cut, len(cut), cap(cut))
	fmt.Println("--------------------------------------------")

    // slice.array (unsafe.Pointer) points on first elem of slice
    // Like in C array points at first elem of slice
	fmt.Printf(
		"| intSlice: %d, cut: %d |\n"+
			"| intSlice %v, cut: %v |\n",
		reflect.ValueOf(intSlice).Pointer(),
		reflect.ValueOf(cut).Pointer(),
		*(*reflect.SliceHeader)(unsafe.Pointer(&intSlice)),
		*(*reflect.SliceHeader)(unsafe.Pointer(&cut)),
        )

}

// selenga hd 980
// lan
// tiger tr ultra
