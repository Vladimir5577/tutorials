package main

import "fmt"

type car struct {
	color   string
	mileage int
}

func main() {
	cars := []car{
		{
			color:   "red",
			mileage: 5_000,
		},
		{
			color:   "green",
			mileage: 10_000,
		},
		{
			color:   "blue",
			mileage: 7_000,
		},
	}

	carPtr := &cars[0]
	carPtr.mileage += 100

	// when exceed capacity it will be new pointer to memory
	// cars --- new pointer in memory
	cars = append(cars, car{color: "yellow", mileage: 1500})
	carPtr.mileage += 50

	fmt.Println(cars[0].mileage, cars[0].color)
	fmt.Println(carPtr.mileage, carPtr.color)
}
