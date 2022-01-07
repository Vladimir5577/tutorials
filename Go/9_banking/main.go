package main

import (
	"banking/app"
	"banking/logger"
	"log"

	"github.com/joho/godotenv"
)

func main() {

	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Some error occured. Err: %s", err)
	}

	// log.Println("Starting our application...")
	logger.Info("Starting the application...")
	app.Start()

}
