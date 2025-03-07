package main

type User struct{}

func (u *User) Create() {}
func (u *User) Get() {}
func (u *User) List() {}
func (u *User) Delete() {}

type Reader interface {
    Get()
    List()
}

type Writer interface {
    Create()
    Delete()
}

func main() {
    var userReader Reader = &User{}
    userWriter := userReader.(Writer) // type assertion
    // userWriter.Get() // method Get it is before type assertion, now available Create and Delete
    _ = userWriter
}
