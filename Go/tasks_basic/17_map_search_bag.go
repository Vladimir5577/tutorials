// write output

package main

import (
	"fmt"
	"time"
)

func UpdateProductStock() <-chan map[string]int {
	stockUpdates := make(chan map[string]int)

	go func() {
		defer close(stockUpdates)

		currentStock := map[string]int{
			"Applles": 50,
			"Bananas": 30,
			"Oranges": 20,
			"Grapes":  15,
		}

		for i := 0; i < 5; i++ {
			newStock := make(map[string]int)

			for product, quantity := range currentStock {
				newStock[product] = int(float64(quantity) * 0.95)
			}

			stockUpdates <- newStock
			currentStock = newStock

			time.Sleep(150 * time.Microsecond)
		}
	}()

	return stockUpdates
}

func main() {
	stockStream := UpdateProductStock()

	var stockHistory []map[string]int

	for stock := range stockStream {
		stockHistory = append(stockHistory, stock)
	}

	for i, stock := range stockHistory {
		fmt.Printf("Iteration %d : %v\n", i+1, stock)
	}
}

/*

range work until channel opened --- we need to close the channel to stop range
close channel should do function in which channel was created --- this is a rule not requirement

*/
