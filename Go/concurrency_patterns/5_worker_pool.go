package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

func main() {
	timeStart := time.Now()
	urls := make([]string, 20)
	chUrls := make(chan string, 3)
	wg := sync.WaitGroup{}
	wg.Add(len(urls))

	go func() {
		defer close(chUrls)
		for _, u := range urls {
			chUrls <- u
		}
	}()

	workerPool(4, chUrls, &wg) // create 4 worker

	wg.Wait()
	timeFinish := time.Since(timeStart)
	fmt.Println(timeFinish)
}

func workerPool(workerNum int, chUrls <-chan string, wg *sync.WaitGroup) {
	for i := 0; i < workerNum; i++ {
		go func() {
			for u := range chUrls {
				defer wg.Done()
				a := sendRequest(u)
				fmt.Println(a)
			}
		}()
	}
}

func sendRequest(url string) (code int) {
	time.Sleep(2 * time.Second)
	codeResponse := []int{200, 201, 401, 403, 500}
	return codeResponse[rand.Intn(len(codeResponse))]
}
