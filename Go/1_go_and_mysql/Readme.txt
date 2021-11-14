To make go available after installation:
------------------------------------

	Use vim ~/.profile to edit the file and add the following:

	export PATH=$PATH:/usr/local/go/bin

	Save the file using the command 
		$ source ~/.profile
	Check the version
		$ go version


// ===============================================

Init github:
	
	$ go mod init github.com/test

Install packages:
	
		$ go get 'github.com/jinzhu/gorm'
		$ go get 'github.com/jinzhu/gorm/dialects/mysql'
		$ go get 'github.com/gorilla/mux'
		$ go get -u github.com/swaggo/swag/cmd/swag  --- ???



// ===============================================

Project run on the port 3333.

Postman.
-----------------

In pustman --- localhost:3333

1. Get all books:
	get /book

2. Get by id:
	get /book/1

3. Create a book:
	post /book
	{
		"Name": "Golang",
		"Author": "Bob",
		"Publication": "US"
	}
	
4. Update:
	put /book/1
	{
		"Name": "Golang",
		"Author": "Bob",
		"Publication": "US"
	}

5. Delete:
	delete /book/3