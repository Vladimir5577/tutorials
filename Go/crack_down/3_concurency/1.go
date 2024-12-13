package main

import (
	"fmt"
	"sync"
	"time"
)

func updateSender(updates chan string, wg *sync.WaitGroup) {
	defer wg.Done()
	users := []string{"Alice", "Bob", "Charlie", "Diana", "Eve"}
	for _, user := range users {
		fmt.Printf("Sending update for user: %s\n", user)
		updates <- user
		time.Sleep(time.Millisecond * 200)
	}
	close(updates)
}

func updateProcessor(updates chan string, wg *sync.WaitGroup) {
	defer wg.Done()
	for user := range updates {
		fmt.Printf("Processing update for user: %s\n", user)
		time.Sleep(time.Millisecond * 700) // Имитация обработки
	}
}

func main() {
	updates := make(chan string)

	wg := &sync.WaitGroup{}
	wg.Add(2)
	go updateSender(updates, wg)
	go updateProcessor(updates, wg)
	wg.Wait()
}
