// Write down function GetOrCreate which create a new element of the map
// or return existing one
// code should work concurrently


package main

import (
	"fmt"
	"sync"
)


func main() {
	cm := NewConcurentMap()

	wg := sync.WaitGroup{}
	wg.Add(2)

	go func() {
		defer wg.Done()
		val := cm.GetOrCreate("key1", "value1")
		fmt.Println("Goroutine 1 got: ", val)
	}()

	go func() {
		defer wg.Done()
		val := cm.GetOrCreate("key1", "value2")
		fmt.Println("Goroutine 2 got: ", val)
	}()

	wg.Wait()
}

/*

// Possiblec solution

type ConcurentMap struct {
	data map[string]string
	m    sync.RWMutex
}

func NewConcurentMap() *ConcurentMap {
	return &ConcurentMap{
		data: make(map[string]string),
	}
}

func (cm *ConcurentMap) GetOrCreate(key, value string) string {
    // use RLock to not blod read but can write
	cm.m.RLock()
	val, ok := cm.data[key]
	cm.m.RUnlock()

	if ok {
		return val
	}

    cm.m.Lock()
    defer cm.m.Unlock()
    if val, ok = cm.data[key]; ok {
        return val
    } 
    cm.data[key] = value

    return value
}

*/
