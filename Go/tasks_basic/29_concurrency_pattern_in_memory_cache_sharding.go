// Write out implementation in memory cache
// with sharding

package main

type Cache interface {
    Set(k string, v string)
    Get(k string) (string, bool)
}

/*
// possible solution

package main

import (
	"fmt"
	"hash/fnv"
	"sync"
)

type Cache interface {
	Set(k string, v string)
	Get(k string) (string, bool)
}

type Shard struct {
	data map[string]string
	mu   sync.RWMutex
}

type MyCache struct {
	shards []*Shard
}

func NewMyCache(shardCount int64) *MyCache {
	shards := make([]*Shard, shardCount)
	for i := range shards {
		shards[i] = &Shard{
			data: make(map[string]string),
		}
	}
	return &MyCache{
		shards: shards,
	}
}

func (c *MyCache) Set(k string, v string) {
    shard := c.getShard(k)
	shard.mu.Lock()
	defer shard.mu.Unlock()

	shard.data[k] = v
}

func (c *MyCache) Get(k string) (string, bool) {
    shard := c.getShard(k)

	shard.mu.RLock()
	defer shard.mu.RUnlock()

	value, ok := shard.data[k]
	return value, ok
}

func (c *MyCache) getShard(k string) *Shard {
	hasher := fnv.New32a()
	_, _ = hasher.Write([]byte(k))
	hash := hasher.Sum32()

	return c.shards[hash%uint32(len(c.shards))]
}

func main() {
	cache := NewMyCache(10)
	cache.Set("salary", "50_000")

	value, ok := cache.Get("salary")
	if !ok {
		fmt.Println("Value with this key does not found!")
		return
	}

	fmt.Println("Value: ", value)
}

*/
