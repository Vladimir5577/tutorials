// There is a system that process multiple queries
// and for each demands costly operation
// (query to database or huge calculation)
// to avoid this operation for ths same key - just use cache

// Write out function GetOrCompute which accept key and function
// and return value from cache or result

/*

// possible solution

package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

var cache sync.Map

func GetOrCompute(key string, compteFunc func() string) string {
    if val, ok := cache.Load(key); ok {
        fmt.Println("From cache %s\n", key)
        return val.(string)
    }

    newVal := compteFunc()
    cache.Store(key, newVal)
    return newVal
}

func computation(userID string) string {
	time.Sleep(2 * time.Second)
    fmt.Printf("Load for user: %s\n", userID)
	return fmt.Sprintf("Result %s\n", userID)
}

func main() {
	userIDs := []string{"user1", "user2", "user1", "user3", "user2", "user1"}
	wg := sync.WaitGroup{}

	for _, userID := range userIDs {
		wg.Add(1)
		go func() {
			defer wg.Done()

            // crutch TODO
            time.Sleep(time.Duration(rand.Intn(10)) * time.Second)

			res := GetOrCompute(userID, func() string {
				return computation(userID)
			})

			fmt.Println(res)
		}()
	}

	wg.Wait()
}


*/