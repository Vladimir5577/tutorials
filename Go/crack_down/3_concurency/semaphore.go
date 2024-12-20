package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

func main() {
	urls := make([]string, 100)
	codes := make(map[int]int)
	mu := sync.Mutex{}
    wg := sync.WaitGroup{}

	sema := make(chan struct{}, 4) // it will olways 4 goruitines, not more

	for _, url := range urls {
        wg.Add(1)
		go func() {
            defer wg.Done()
			code := sendRequest(url)
			sema <- struct{}{}
			mu.Lock()
			codes[code]++
			mu.Unlock()

			<-sema
		}()
	}

    wg.Wait()
    fmt.Println(codes)
}

func sendRequest(url string) (code int) {
    time.Sleep(500 * time.Millisecond)
    codeResponse := []int{200, 201, 401, 403, 500}
    return codeResponse[rand.Intn(len(codeResponse))]
}
