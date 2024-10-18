package app

import "user_data/internal/model"

type Database struct {
}

func NewDatabase() *Database {
	return &Database{}
}

func (db *Database) InitDb() *model.UsersData {

	users := []model.User{}

	user_1 := model.User{
		Id:      1,
		Name:    "Bob",
		Country: "USA",
	}

	user_2 := model.User{
		Id:      2,
		Name:    "Mike",
		Country: "Germany",
	}

	user_3 := model.User{
		Id:      3,
		Name:    "Jack",
		Country: "France",
	}

	user_4 := model.User{
		Id:      4,
		Name:    "Jessica",
		Country: "Italy",
	}

	user_5 := model.User{
		Id:      5,
		Name:    "Donna",
		Country: "USA",
	}

	users = append(users, user_1, user_2, user_3, user_4, user_5)

	return &model.UsersData{
		Users: &users,
	}
}
