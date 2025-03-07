package main

import "fmt"


type Node struct {
    Prew, Next *Node
    Key, Value int
}

func newNode(key, val int) *Node {
    return &Node{
        Key: key,
        Value: val,
    }
}

type LRUCache struct {
    Head, Tail *Node
    Mp map[int]*Node
    Capacity int
}

func newLRUCache(capacity int) LRUCache {
    head, tail := newNode(0, 0), newNode(0, 0)
    head.Next = tail
    tail.Prew = head

    return LRUCache{
        Head: head,
        Tail: tail,
        Mp: make(map[int]*Node),
        Capacity: capacity,
    }
}

func (lc *LRUCache) Get(key int) int {
    if n, ok := lc.Mp[key]; ok {
        lc.remove(n)
        lc.insert(n)
        return n.Value
    }

    return -1
}

func (lc *LRUCache) Put(key int, value int) {
    if _, ok := lc.Mp[key]; ok {
        lc.remove(lc.Mp[key])
    }

    // need to displace last element
    if len(lc.Mp) == lc.Capacity {
        lc.remove(lc.Tail.Prew)
    }

    lc.insert(newNode(key, value))
}

func (lc *LRUCache) remove(node *Node) {
    delete(lc.Mp, node.Key)
    node.Prew.Next = node.Next
    node.Next.Prew = node.Prew
}

func (lc *LRUCache) insert(node *Node) {
    lc.Mp[node.Key] = node
    next := lc.Head.Next
    lc.Head.Next = node
    node.Prew = lc.Head
    next.Prew = node
    node.Next = next
}

func main() {
    a := newLRUCache(5)
    a.Put(1, 1)
    a.Put(2, 2)
    a.Put(3, 3)
    a.Put(4, 4)
    a.Get(2)
    a.Get(2)
    a.Put(5, 5)
    a.Put(6, 6)
    a.Put(7, 7)
    fmt.Printf("Structure: %+v\n", a)
    
    fmt.Println(a.Get(3))
    a.Get(3)
    a.Get(3)
    fmt.Printf("Structure: %+v\n", a)
}
