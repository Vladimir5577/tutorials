package main

import (
	"log"
	myApp "user_data/internal/app"
	"user_data/internal/handler"
	"user_data/internal/repository"
	"user_data/internal/service"

	"github.com/BryanMwangi/pine"
)

func main() {
	// Initialize a new Pine app
	app := pine.New()

	db := myApp.NewDatabase()
	userRepository := repository.NewUserRepository(db)
	userService := service.NewUserService(userRepository)
	userHandler := handler.NewUserHandler(userService)

	app.Get("/users", userHandler.GetAllUsers)
	app.Get("/user/:id", userHandler.GetUserById)

	// Start the server on port 3000
	log.Fatal(app.Start(":3000", "", ""))
}
