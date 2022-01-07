Init project:
    $ go mod init restapi

Install dependencies:
    $ go get -u github.com/gorilla/mux

// ================================================

Postman.
------------

1. Get all movies:
    get /movies

2. Get by id:
    bet /movies/123

3. Create a movie:
    post /movies
    {
        "isbn": "32342",
        "title": "Good movie.",
        "director": {
            "firstname": "Bob",
            "lastname": "Milian"
        }
    }

4. Update a movie:
    put /movies/123
    {
        "isbn": "32342",
        "title": "Good movie.",
        "director": {
            "firstname": "Bob",
            "lastname": "Milian"
        }
    }

5. Delete:
    delete /movies/123