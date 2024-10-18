package repository

import "user_data/internal/model"

type UserRepositoryInterface interface {
	GetAllUsers() *model.UsersData
	GetUserById(id int) (*model.User, error)
}
