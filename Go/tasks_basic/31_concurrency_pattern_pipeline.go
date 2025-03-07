// System of financial transaction
// Stage of transaction
// 1. Reading
// 2. Filtering (remove transaction with negative number)
// 3. Converting
// 4. Saving

package main

import (
	"fmt"
	"math/rand"
)

type Transaction struct {
	ID     int64
	Amount float64
}

func generateTrancactions(count int) <-chan Transaction {
	out := make(chan Transaction)

	go func() {
		for i := 0; i < count; i++ {
			out <- Transaction{
				ID:     int64(i),
				Amount: rand.Float64()*200 - 100, // -100 to 100
			}
		}

		close(out)
	}()

	return out
}

func filterTrancactions(in <-chan Transaction) <-chan Transaction {
	out := make(chan Transaction)

	go func() {
		for tr := range in {
			fmt.Printf("------- Transaction ID: %d, Amount: %.2f\n", tr.ID, tr.Amount)
			if tr.Amount >= 0 {
				out <- tr
			}
		}

		close(out)
	}()

	return out
}

func convertTrancactions(in <-chan Transaction) <-chan Transaction {
	out := make(chan Transaction)

	go func() {
		for tr := range in {
			tr.Amount *= 0.8
			out <- tr
		}

		close(out)
	}()

	return out

}
func saveTrancactions(in <-chan Transaction) {
	for tr := range in {
		fmt.Printf("Transaction ID: %d, Amount: %.2f\n", tr.ID, tr.Amount)
	}
}

func main() {
	transaction := generateTrancactions(10)
	filtered := filterTrancactions(transaction)
	converted := convertTrancactions(filtered)
	saveTrancactions(converted)
}
