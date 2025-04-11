package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
    var wg sync.WaitGroup
    for _, n := range []int{3, 1, 2} {
        wg.Add(1)
        go func() {
            defer wg.Done()
            time.Sleep(time.Duration(n) * time.Second)
            // time.Sleep(n * time.Second) // can't use mismatch type
            fmt.Printf("%d ", n)
        }()
    }

    wg.Wait()
    fmt.Println()
}

/*

Output ?

*/
