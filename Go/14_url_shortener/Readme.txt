Before run project make sure database "link" exist.
To create table run migration:
    $ go run migrations/auto.go


// =====================================
Init project:
    $ go mod init url_shortener

// ======================================
Insall dependencies:
    $ go get github.com/joho/godotenv
    $ go get github.com/go-playground/validator/v10
    $ go get -u gorm.io/gorm
    $ go get gorm.io/datatypes
    $ go get -u gorm.io/driver/postgres
    $ go get -u github.com/golang/crypto/bcrypt
    $ go get -u github.com/golang-jwt/jwt/v5
    $ go get github.com/DATA-DOG/go-sqlmock



// ======================================
To deal with dependencies:    
    $ go mod tidy

// ======================================
Run migrations:
    $ go run migrations/auto.go

// ======================================
    Postman
    -------

1. Create hash link:
    POST /link 
    {
        "name": "Bob",
        "email": "opt2@np26.ku",
        "password": "12345",
        "url": "http://test.ru"
    }

2. Get link (with redirect)
    GET /{hash}

3. Update link
    PATCH /link/123
    {
        "url": "http://new_url.com"
    }

    or to update hash:
    {
        "url": "http://bal123.com",
        "hash": "new_hash"
    }

4. Get all links
    localhost:8081/link?limit=3&offset=1

5. Get statisticks:
    localhost:8081/stat?from=2024-11-20&to=2024-11-21&by=day

// ==============================
Print struct to console:

    fmt.Printf("%#v", myStruct)  --- print struct with field