package handler

import (
	"fmt"
	"strconv"
	"user_data/internal/service"

	"github.com/BryanMwangi/pine"
)

type UserHandler struct {
	userService service.UserServiceInterface
}

func NewUserHandler(s service.UserServiceInterface) *UserHandler {
	return &UserHandler{
		userService: s,
	}
}

func (h *UserHandler) GetAllUsers(c *pine.Ctx) error {
	return c.JSON(h.userService.GetAllUsers())
}

func (h *UserHandler) GetUserById(c *pine.Ctx) error {
	userId := c.Params("id")
	i, err := strconv.Atoi(userId)
	if err != nil {
		return c.JSON(fmt.Sprintf("Invalid numeric id: %v", err))
	}
	user, err := h.userService.GetUserById(i)
	if err != nil {
		return c.JSON(err.Error())
	}
	return c.JSON(user)
}
