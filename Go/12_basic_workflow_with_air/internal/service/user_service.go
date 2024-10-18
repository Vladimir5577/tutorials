package service

import (
	"user_data/internal/model"
	"user_data/internal/repository"
)

type UserService struct {
	userRepository repository.UserRepositoryInterface
}

func NewUserService(userRepository repository.UserRepositoryInterface) *UserService {
	return &UserService{
		userRepository: userRepository,
	}
}

func (s *UserService) GetAllUsers() *model.UsersData {
	return s.userRepository.GetAllUsers()
}

func (s *UserService) GetUserById(id int) (*model.User, error) {
	user, err := s.userRepository.GetUserById(id)
	if err != nil {
		return nil, err
	}
	return user, nil
}
