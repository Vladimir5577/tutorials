package main

import (
	"sync/atomic"
	"time"
)

type WaitGroup struct {
    counter int32
}

func main() {
    wg := &WaitGroup{}

    for i := 0; i < 200; i++ {
        wg.Add(1)
        go test(wg)
    }
}

func test(wg *WaitGroup) {
    defer wg.Done()
    time.Sleep(100 * time.Millisecond)
}

func (w *WaitGroup) Add(delta int) {
    atomic.AddInt32(&w.counter, int32(delta))
}

func (w *WaitGroup) Done() {
    atomic.AddInt32(&w.counter, -1)
}

func (w *WaitGroup) Wait() {
    for atomic.LoadInt32(&w.counter) > 0 {
        time.Sleep(10 * time.Millisecond)
    }
}


// go run --race main.go
// flag --race  ---> make sure that we don't have race condition
