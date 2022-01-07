Init project:
    $ go mog init banking

Run app:
    Copy .env_dist to .env
    $ cp .env_dist .env
    $ go run main.go

Install dependencies:
    $ go get -u github.com/gorilla/mux
    $ go get -u github.com/go-sql-driver/mysql
    $ go get -u go.uber.org/zap
    $ go get github.com/jmoiron/sqlx
    $ go get github.com/joho/godotenv

Run with live reload:
    Install air:
        $ go get -u github.com/cosmtrek/air
    Init air into the project:
        $ air init  
        or
        $ ~/go/bin/air init
        It will create the file ".air.toml" then put settings inside the file.

    Run:
        $ ~/GOPATH/bin/air
        or 
        $ ~/go/bin/air

// ===========================================

Postman.
--------------

1. Get all customers:
    get /customers

    to get customers in xml, in postman 
    type header Content-Type applicaion/xml 

2. Get customer by id:
    get /customer/123

3. Create an account to the customer:
    post /customers/123/account
    {
        "account_type": "saving",
        "amount": 5000.23
    }
    id will be in response

4. Create transaction:
    post /customers/2001/account/95470
    {
        "transaction_type": "deposit",
        "amount": 5000.23
    }