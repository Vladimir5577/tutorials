package main

import (
	"fmt"
	"math"
	"runtime"
	"time"
	"unsafe"
)

func main() {
	stats := new(runtime.MemStats)
	runtime.ReadMemStats(stats)
	fmt.Println("-----------------------------------------------------")
	fmt.Printf("| stats: %d |\n", stats.HeapAlloc)

	bytes := make([]byte, math.MaxInt32) // 32767

	runtime.ReadMemStats(stats)
	fmt.Println("-----------------------------------------------------")
	fmt.Printf("| stats after bytes created: %d |\n", stats.HeapAlloc)

	/* type StringHeader struct {
	    Data uintptr
	    Len int
	}*/
	bytesAsString := string(bytes)
	runtime.ReadMemStats(stats)

	fmt.Println("-----------------------------------------------------")
	fmt.Printf("| bytes len: %d, cap: %d, size: %d |\n| string len: %d, size: %d \n",
		len(bytes),
		cap(bytes),
		unsafe.Sizeof(bytes),
		len(bytesAsString),
		unsafe.Sizeof(bytesAsString),
	)
    fmt.Printf("| stats after string created: %d |\n", stats.HeapAlloc)

    go func(bs string, memstats *runtime.MemStats) {
        stats := new(runtime.MemStats)
        runtime.ReadMemStats(stats)
        fmt.Printf("| stats in lambda: %d |\n", stats.HeapAlloc)
        _ = bs
    }(bytesAsString, stats)
	fmt.Println("-----------------------------------------------------")
    <- time.After(time.Second * 2)

    // convert unsafe bytes to string
    someBytes := []byte("Hello")
    stringUnsafe := *(*string)(unsafe.Pointer(&someBytes))
    fmt.Printf("| bytes: %v, %T, string %s, %T |\n", someBytes, someBytes, stringUnsafe, stringUnsafe)
    someBytes[0] = 'Y'
    fmt.Printf("| bytes: %v, %T, string %s, %T |\n", someBytes, someBytes, stringUnsafe, stringUnsafe)
    // so GC doesn't clean vars
    time.Sleep(time.Hour)
    fmt.Println(bytesAsString, bytes)
}

