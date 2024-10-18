Init project:
    $ go mod init user_data

To clean or fix dependencies:
    $ go mod tidy

// ===================================
Install dependencies:
    $ go get github.com/BryanMwangi/pine

// ===================================
Live reload;
    $ go install github.com/air-verse/air@latest
    binary file will be in the path:
        ~/go/bin/air

Init .air.toml file:
    $ ~/go/bin/air init  --- it will create .air.toml file, put you credentials in it
    in this case in line (need to specify where main.go file and where to build binary)
    cmd = "go build -o ./tmp/main cmd/main.go"

Run project with air:
    $ ~/go/bin/air

// ===================================
Postman:
    GET 
        /users  --- get all users
        /user/:id --- get by id