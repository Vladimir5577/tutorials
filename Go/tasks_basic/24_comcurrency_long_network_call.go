// Long running network call
//
// Complete method SimulateRequest it should be
// - concurrently
// - with long request cancel with time out
// - write out request time execution to console

package main

import (
	"log"
	"math/rand"
	"time"
)

var counter int64

func SimulateRequest() int64 {
	time.Sleep(time.Duration(rand.Intn(5)) * time.Second)
	counter++
	return counter
}

func main() {
	val := SimulateRequest()
	log.Printf("Counter value: %d\n", val)
}

/*
// possible solution

package main

import (
	"context"
	"log"
	"math/rand"
	"sync/atomic"
	"time"
)

var counter atomic.Int64

func SimulateRequest(ctx context.Context) (int64, error) {
	start := time.Now()
	defer func() {
		log.Printf("Duration of request: %v\n", time.Since(start))
	}()

	ch := make(chan int64)
	go func() {
		time.Sleep(time.Duration(rand.Intn(5)) * time.Second)
        counter.Add(1)
		ch <- counter.Load()
	}()

	select {
	case <-ctx.Done():
		return 0, ctx.Err()
	case count := <-ch:
		return count, nil
	}
}

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
	defer cancel()

	val, err := SimulateRequest(ctx)
	if err != nil {
		log.Printf("Error occured: %v\n", err)
		return
	}
	log.Printf("Counter value: %d\n", val)
}
*/
