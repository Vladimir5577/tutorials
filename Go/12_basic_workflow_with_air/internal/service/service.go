package service

import "user_data/internal/model"

type UserServiceInterface interface {
	GetAllUsers() *model.UsersData
	GetUserById(int) (*model.User, error)
}
