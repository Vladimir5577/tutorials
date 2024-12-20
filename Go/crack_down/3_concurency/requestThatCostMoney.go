package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	mo := MoneyOptimization{}
	userID := "Bob"

    // calling the same method 3 time
	go func() {
		mo.RequestThatCostMoney(userID)
	}()

	go func() {
		mo.RequestThatCostMoney(userID)
	}()

	go func() {
		mo.RequestThatCostMoney(userID)
	}()

    time.Sleep(5 * time.Second)
    fmt.Println("Finish.")
}

func requestThatCostMoney(userID string) (response string) {
	// function that cost money
	return "-100 rub"
}

type Some struct {
	response string
	ch       chan struct{}
}

type MoneyOptimization struct {
	cache map[string]*Some
	mu    sync.Mutex
}

func (o *MoneyOptimization) RequestThatCostMoney(userID string) (response string) {

	o.mu.Lock()
	if huy, ok := o.cache[userID]; ok {
		o.mu.Unlock()

		<-huy.ch
        fmt.Println(huy.response, "--- rsponse from cache")
		return huy.response
	}
	o.cache[userID] = &Some{ch: make(chan struct{})}
	o.mu.Unlock()

	response1 := requestThatCostMoney(userID)

	o.mu.Lock()
	o.cache[userID].response = response1
	o.mu.Unlock()

    close(o.cache[userID].ch)
    
	o.mu.Lock()
    delete(o.cache, userID)
	o.mu.Unlock()

    fmt.Println(response1, " --- response from api")
	return response
}
