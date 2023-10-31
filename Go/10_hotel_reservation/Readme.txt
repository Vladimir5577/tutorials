Init project: 
    $ go mod init hotel_reservation

Install gofiber:
    $ go get -u github.com/gofiber/fiber/v2

Install dependencies:
    $ go get go.mongodb.org/mongo-driver/mongo
    $ go get golang.org/x/crypto/bcrypt

// =======================================================

Run:
    $ go run main.go

Run with make:
    $ make run   --- it will build adn run (build in ./bin folder)


// =======================================================
Postman:
1. Get all users: --- GET method
    /api/v1/user  --- get all users
    
2. Get user by id: --- GET 
    /api/v1/user/6532bb0b4717419b63bcc98c  --- get by id 
                    (id mongo db, record should be exist)
3. Create user:
    /api/v1/user  --- method POST
    {
        "firstName": "Mard",
        "lastName": "Lest",
        "email": "asd@harvy.com",
        "password": "bal"
    }
4. Delete: --- DELETE
    /api/v1/user/6532bb0b4717419b63bcc98c


// =======================================================
Mongo DB:
-----------

    show dbs; --- show databases
    use hotel_reservation; --- create and switch to this database
    db.createCollection('users'); --- create collection (table for mysql)

    db.users.insertMany([
        {firstName: "Bob", lastName: "Cumer"},
        {firstName: "Jack", lastName: "Parker"},
        {firstName: "Mike", lastName: "Stone"},
        {firstName: "Jessica", lastName: "Joit"},
        {firstName: "Donna", lastName: "Pulson"}
    ]);
 

// =======================================================
Air.  --- run with live reloading 
Install:
    $ go install github.com/cosmtrek/air@latest

Init air into the project:
        $ air init  
        or
        $ ~/go/bin/air init
        It will create the file ".air.toml" then put settings inside the file.

    Run:
        $ ~/GOPATH/bin/air
        or 
        $ ~/go/bin/air


// =======================================================
mongodb compas  --- it is like adminer for php

fmt.Printf("%#v", myStruct)  --- print struct with field