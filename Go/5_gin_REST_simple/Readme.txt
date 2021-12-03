Init project:

    $ go mod init restapi

Install gin:

    $ go get -u github.com/gin-gonic/gin

Install mysql driver:

    $ go get -u github.com/go-sql-driver/mysql

// =====================================================

Postman.
---------------

1. Create person:
    post /user
    {
        "name": "Bob",
        "email": "bob@bob.com",
        "country": "Italy"
    }

2. Get all persons:
    get /users

3. Get person by id:
    get /user?id=123

4. Update:
    put /user
    {
        "id": 2,
        "name": "Mike1",
        "email": "mike@mike.com",
        "country": "Germany1"
    }

5. Delete:
    delete /user?id=123


// =====================================================

root:password@tcp(88.888.888.14)/go_gin_rest?charset=utf8mb4&parseTime=True&loc=Local

Source:
https://steemit.com/utopian-io/@elingmeyatmaja/building-restful-apis-with-the-gin-framework