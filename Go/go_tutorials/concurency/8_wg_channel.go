package main

import (
	"fmt"
	"net/http"
	"sync"
)

func main() {
	code := make(chan int)
	var wg sync.WaitGroup
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func() {
			getHttpCode(code)
			wg.Done()
		}()
	}
	go func() {
		wg.Wait()
		close(code)
	}()
	for res := range code {
		fmt.Printf("Code: %d\n", res)
	}
}

func getHttpCode(codeCh chan int) {
	resp, err := http.Get("https://yandex.com/")
	if err != nil {
		fmt.Printf("Error occured: %s", err.Error())
	}
	codeCh <- resp.StatusCode
}
