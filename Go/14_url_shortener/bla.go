package main

import (
	"fmt"
	"net/http"
	"sync"
)

func main() {
	codeCh := make(chan int)
	var wg sync.WaitGroup
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func() {
			getHttpCode(codeCh)
			wg.Done()
		}()
	}

	go func() {
		wg.Wait()
		close(codeCh)
	}()

	for res := range codeCh {
		fmt.Println("Response: ", res)
	}
}

func getHttpCode(c chan int) {
	resp, err := http.Get("https://yandex.com")
	if err != nil {
		fmt.Printf("Error occured: %v", err.Error())
	}
	c <- resp.StatusCode
}
