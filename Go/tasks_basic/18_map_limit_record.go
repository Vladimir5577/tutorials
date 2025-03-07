// service to count unique words
// words should be limited amount
// when limit exceed then delete oldest words

package main

import "fmt"

type WordCounter struct {
    counts map[string]int
    limit int
}

func NewWordCounter(limit int) *WordCounter {
    return &WordCounter{
        counts: make(map[string]int),
        limit: limit,
    }
}

func (wc *WordCounter) CountWord(word string) {
    wc.counts[word]++

    if len(wc.counts) > wc.limit {
        // write logic here
    }
}

func main() {
    wc := NewWordCounter(3)

    words := []string{"apple", "banana", "apple", "orange", "grape", "banana", "kiwi"}
    for _, word := range words {
        wc.CountWord(word)
    }

    fmt.Println("Amount of words: ", wc.counts)
}


/*

// possible solution

// struct map does not has on order element 
// to make order create a slice


type WordCounter struct {
    order []string
    counts map[string]int
    limit int
}

func NewWordCounter(limit int) *WordCounter {
    return &WordCounter{
        counts: make(map[string]int),
        limit: limit,
    }
}

func (wc *WordCounter) CountWord(word string) {
    if _, ok := wc.counts[word]; ok {
        wc.order = append(wc.order, word)
    }

    wc.counts[word]++

    if len(wc.counts) > wc.limit {
        oldest := wc.order[0]
        wc.order = wc.order[1:]
        delete(wc.counts, oldest)
    }
}

func main() {
    wc := NewWordCounter(3)

    words := []string{"apple", "banana", "apple", "orange", "grape", "banana", "kiwi", "kiwi"}
    for _, word := range words {
        wc.CountWord(word)
    }

    fmt.Println("Amount of words: ", wc.counts)
}

*/
