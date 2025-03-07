package main

import "fmt"

type User struct {
    Name string
}

func main() {
    user := User{Name: "Bob"}
    fmt.Println("Name before updating: ", user.Name)

    // all what pass as an argument to function by value 
    // everything is copied
    updateUser(user)
    fmt.Println("Name after updating: ", user.Name)
}

func updateUser(u User) {
    u.Name = "Mike"
    fmt.Println("Name inside updateUser func: ", u.Name)

    resetUser(&u)
    fmt.Println("Name after resetUser func: ", u.Name)
}

func resetUser(u *User) {

    // here we create new pointer to User and rewrite origin 
    // that was pass to function
    u = &User{Name: "Jack"}
    fmt.Println("Name inside resetUser func: ", (*u).Name) // or n.User
}
