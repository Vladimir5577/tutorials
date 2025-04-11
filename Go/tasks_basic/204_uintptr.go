package main

import (
	"runtime"
	"unsafe"
)

func main() {
    x := new(int)
    y := new(int)
    z := new(int)

    ptrX := unsafe.Pointer(x)
    ptrY := unsafe.Pointer(y)
    addressZ := uintptr(unsafe.Pointer(z))

    // arithmetic operation
    _ = addressZ + 2
    _ = addressZ - 2

    // run garbage collector
    runtime.GC()

    *(*int)(ptrX) = 100
    *(*int)(ptrY) = 200
    *(*int)(unsafe.Pointer(addressZ)) = 300
}

/*

uintptr --- целочисленный указатель на область в памяти
чтоб делать арифметические операции


if run with check correct pointers it will panic -> point to invalid allocation

    $ go run -gcflags=-d=checkptr main.go


Pointer or unsafe pointer store information about object in memory
and GC will not delete it
But uintptr - just uint some adress not point on anything
*/
