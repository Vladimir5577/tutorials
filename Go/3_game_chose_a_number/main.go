package main

import (
	"bufio"
	"fmt"
	"log"
	"math/rand"
	"os"
	"strconv"
	"strings"
	"time"
)

func main() {

	seconds := time.Now().Unix()
	rand.Seed(seconds)

	target := rand.Intn(100) + 1
	fmt.Println("I choose number from 1 to 100")
	fmt.Println("Your number")

	reader := bufio.NewReader(os.Stdin)

	success := false

	for guess := 0; guess < 10; guess++ {

		fmt.Println("Yout have try - ", 10-guess)

		fmt.Print("Write your number: ")
		input, err := reader.ReadString('\n')
		if err != nil {
			log.Fatal(err)
		}

		input = strings.TrimSpace(input)

		guess, err := strconv.Atoi(input)
		if err != nil {
			log.Fatal(err)
		}

		if guess > target {
			fmt.Println("Your number bigger then need")
		} else if guess < target {
			fmt.Println("Your number less then need")
		} else {
			success = true
			fmt.Println("Congratulations!!!")
			break
		}
	}

	if !success {
		fmt.Println("Your are failed. This number was: ", target)
	}
}
