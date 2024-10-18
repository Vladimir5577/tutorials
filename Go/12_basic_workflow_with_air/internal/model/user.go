package model

type User struct {
	Id      int    `json:"id"`
	Name    string `json:"name"`
	Country string `json:"country"`
}

type UsersData struct {
	Users *[]User `json:"users"`
}
