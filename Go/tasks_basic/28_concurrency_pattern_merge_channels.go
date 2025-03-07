// Write out a function which merge channels in one chanel


package main

func main() {
    channels := make([]chan int64, 10)
    for i := range channels {
        channels[i] = make(chan int64)
    }

    for i := range channels {
        go func(i int) {
            channels[i] <- int64(i)
            close(channels[i])
        }(i)
    }

    for v := range merge(channels...) {
        println(v)
    }
}

func merge(channels ...chan int64) chan int64 {
    return channels[0]
}

/*

for range read channel until it close

// possible solution
package main

import (
	"context"
	"fmt"
	"sync"
	"time"
)

func main() {
	channels := make([]chan int64, 1_000)
	for i := range channels {
		channels[i] = make(chan int64)
	}

	for i := range channels {
		go func(i int) {
			channels[i] <- int64(i)
			close(channels[i])
		}(i)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 1*time.Microsecond)
    defer cancel()
	for v := range merge(ctx, channels...) {
		println(v)
	}
}

func merge(ctx context.Context, channels ...chan int64) chan int64 {
	res := make(chan int64)

	merger := func(ch chan int64) {
		// for val := range ch {
		// 	res <- val
		// }

		for {
			select {
			case <-ctx.Done():
                fmt.Println("context done!")
				return
			case val, ok := <-ch:
				if !ok {
					return
				}

				res <- val
			}
		}

	}

	wg := sync.WaitGroup{}
	wg.Add(len(channels))
	for _, ch := range channels {
		go func() {
			defer wg.Done()
			go merger(ch)
		}()
	}

	go func() {
		wg.Wait()
		close(res)
	}()

	return res
}

*/
