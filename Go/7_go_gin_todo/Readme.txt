Init project;

    $ go mod init todoapp

Install gin:
    $ go get -u github.com/gin-gonic/gin

Install dependencies:
    $ go get github.com/spf13/viper
    $ go get github.com/jmoiron/sqlx
    $ go get github.com/lib/pq
    $ go get github.com/joho/godotenv
    $ go get -u github.com/sirupsen/logrus
    $ go get -u github.com/golang-jwt/jwt

Swagger:
    Install:
        $ go get -u github.com/swaggo/swag/cmd/swag

    generate doc:
        $ ~/go/bin/swag init -g cmd/main.go 
    
    in browser:
        http://localhost:8000/swagger/index.html#/



// ================================================

Postman.
--------

Application work on the port 8000

1. Register:
    post /auth/sign-up
    {
        "name": "Bob",
        "username": "Bob",
        "password": "123"
    }

 2. Login:
    post /auth/sign-in
    {
        "username": "Bob",
        "password": "123"
    }   
    jwt in response


3. Create todo:
    post /api/lists
    {
        "title": "My post",
        "description": "Good"
    }

4. Get all todos:
    get /api/lists

5. Get todo by id:
    get /api/lists/123

6. Update todo:
    put /api/lists/123
    {
        "title": "New title",
        "description": "New"
    }

7. Delete todo by id;
    delete /api/lists/123

// ===========================

8. Create todo item:
    post /api/lists/123/items
    {
        "title": "Items",
        "description": "Goood"
    }

9. Get all todo items:
    get /api/lists/123/items

10. Get item by id:
    get /api/items/123

11. Update item:
    put /api/items/123
    {
        "title": "Items 123",
        "description": "Goood 123",
        "done": true
    }

12. Delete item:
    delete /api/items/123



      