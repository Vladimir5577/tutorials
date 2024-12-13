package main

import (
	"fmt"
	"runtime"
	"time"
	"unsafe"
)

func main() {
	// var intArr [256]byte in memory buffer: byte byte byte ... 256 times ...
	// Take look at regular array
	arr := [2]int{30}      // 30 0
	arr2 := [3]int{40, 50} // 40 50 0

	// can't compare array of different len: arr == arr2

	// each int = 8 bytes
	fmt.Println(arr, unsafe.Sizeof(arr))
	fmt.Println(arr2, unsafe.Sizeof(arr2))

	// copy array by arms
	arrayToMerge := [len(arr) + len(arr2)]int{}
	fmt.Println(arrayToMerge, unsafe.Sizeof(arrayToMerge))

	counter := 0
	for i := 0; i < len(arr); i++ {
		arrayToMerge[i] = arr[i]
		counter++
	}
	for i := 0; i < len(arr2); i++ {
		arrayToMerge[counter+i] = arr2[i]
	}
	fmt.Println(arrayToMerge, unsafe.Sizeof(arrayToMerge))

	// see mem usage stats
	stats := new(runtime.MemStats)
	runtime.ReadMemStats(stats)
	fmt.Printf("stats: %d\n", stats.HeapAlloc)

	// create big array
	bigArray := [1 << 25]int{}

	runtime.ReadMemStats(stats)
	fmt.Printf("stats after bigArray created: %d\n", stats.HeapAlloc)
	_ = bigArray

	go funcWithArray(bigArray)

	<-time.After(time.Second * 1)
    runtime.ReadMemStats(stats)
    fmt.Printf("stats bigArray copied to goroutine stack: %d\n", stats.HeapAlloc)


	go funcWithArrayPtr(&bigArray)

	<-time.After(time.Second * 1)
    runtime.ReadMemStats(stats)
    fmt.Printf("stats bigArray passed by ptr: %d\n", stats.HeapAlloc)

    time.Sleep(time.Hour)
    _ = bigArray
}


func funcWithArray(arr [1 << 25]int) {
    time.Sleep(time.Hour)
    _ = arr
}

func funcWithArrayPtr(arr *[1 << 25]int) {
    time.Sleep(time.Hour)
    _ = arr
}
