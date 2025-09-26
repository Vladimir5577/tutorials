package main

import (
	"fmt"
	"unsafe"
)

type data struct {
	aaa bool
	bbb int64 // 8 byte
	ccc bool
}

type data1 struct {
	aaa bool
	bbb data
	ccc bool
}

func main() {
	d := data1{}
	fmt.Println(unsafe.Sizeof(d))
	fmt.Println(unsafe.Alignof(d))
}
