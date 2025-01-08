package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

// Semaphore — structrure to manage amount of running go rutines
type Semaphore struct {
	semaCh chan struct{}
}

func NewSemaphore(maxReq int) *Semaphore {
	return &Semaphore{
		semaCh: make(chan struct{}, maxReq),
	}
}

func (s *Semaphore) Acquire() {
	s.semaCh <- struct{}{}
}

func (s *Semaphore) Release() {
	<-s.semaCh
}

func main() {
    timeStart := time.Now()
	urls := make([]string, 20)
	semaphore := NewSemaphore(4) // define amount running gorutines
	var wg sync.WaitGroup
	wg.Add(len(urls))

	for _, u := range urls {
		go func() {
			semaphore.Acquire()
			defer wg.Done()
			defer semaphore.Release()

			res := sendRequest(u)
			fmt.Println(res)
		}()
	}

	wg.Wait()
    timeFinish := time.Since(timeStart)
    fmt.Println(timeFinish)
}

func sendRequest(url string) (code int) {
	time.Sleep(2 * time.Second)
	codeResponse := []int{200, 201, 401, 403, 500}
	return codeResponse[rand.Intn(len(codeResponse))]
}
