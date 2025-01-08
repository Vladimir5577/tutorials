package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	mo := MoneyOptimization{
        cache: map[string]*Some{},
        mu: sync.Mutex{},
    }
	userId := "Bob"

	// callin the same method 3 times
	go func() {
		mo.SendRequest(userId)
	}()
	go func() {
		mo.SendRequest(userId)
	}()
	go func() {
		mo.SendRequest(userId)
	}()
	go func() {
		mo.SendRequest(userId)
	}()

	time.Sleep(5 * time.Second)
	fmt.Println("Finish")
}

func requestThatCostMoney(userId string) string {
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

func (o *MoneyOptimization) SendRequest(userId string) string {
	o.mu.Lock()
	if huy, ok := o.cache[userId]; ok {
		o.mu.Unlock()
		<-huy.ch
		fmt.Println(huy.response, "--- response from cache")
		return huy.response
	}
	o.cache[userId] = &Some{ch: make(chan struct{})}
	o.mu.Unlock()

	res := requestThatCostMoney(userId)

	o.mu.Lock()
	o.cache[userId].response = res
	o.mu.Unlock()

	close(o.cache[userId].ch)

	// o.mu.Lock()
	// delete(o.cache, userId)
	// o.mu.Unlock()

	fmt.Println(res, "--- response from api")
	return res
}
