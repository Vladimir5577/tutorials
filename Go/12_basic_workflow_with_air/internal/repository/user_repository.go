package repository

import (
	"fmt"
	myApp "user_data/internal/app"
	"user_data/internal/model"
)

type UserRepository struct {
	db *myApp.Database
}

func NewUserRepository(db *myApp.Database) *UserRepository {
	return &UserRepository{
		db: db,
	}
}

func (r *UserRepository) GetAllUsers() *model.UsersData {
	return r.db.InitDb()
}

func (r *UserRepository) GetUserById(id int) (*model.User, error) {
	users := r.db.InitDb().Users
	for _, u := range *users {
		if u.Id == id {
			return &u, nil
		}
	}

	return nil, fmt.Errorf("user not found with id = %v", id)
}
