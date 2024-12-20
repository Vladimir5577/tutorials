package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

func main() {
    startTime := time.Now()
	urls := make([]string, 20)
	codes := make(map[int]int)

	mu := &sync.Mutex{}
	wg := &sync.WaitGroup{}
	ch := make(chan string, 3)

    wg.Add(len(urls))
	go func() {
		for _, url := range urls {
			ch <- url
		}
	}()

	startWorkers(4, ch, &codes, mu, wg) // amount of worker

    wg.Wait()
	fmt.Println(codes)
    fmt.Println(time.Since(startTime))
}

func startWorkers(countWorker int, ch chan string, codes *map[int]int, mu *sync.Mutex, wg *sync.WaitGroup) {
    code := 0
	for i := 0; i < countWorker; i++ {
		go func() {
			for url := range ch {
                wg.Done()
				code = sendRequest(url)
				mu.Lock()
				(*codes)[code]++
				mu.Unlock()
			}
		}()
	}
}

func sendRequest(url string) (code int) {
	time.Sleep(time.Second)
	codeResponse := []int{200, 201, 401, 403, 500}
	return codeResponse[rand.Intn(len(codeResponse))]
}
