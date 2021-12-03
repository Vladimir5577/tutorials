package main

import (
	"bytes"
	"database/sql"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func main() {

	db, err := sql.Open("mysql", "root:password@tcp(88.888.888.88)/go_gin_rest?charset=utf8mb4&parseTime=True&loc=Local")
	if err != nil {
		fmt.Print(err.Error())
	}
	defer db.Close()
	// make sure connection is available
	err = db.Ping()
	if err != nil {
		fmt.Print(err.Error())
	}

	type User struct {
		Id      int
		Name    string
		Email   string
		Country string
	}

	router := gin.Default()

	// GET a person detail
	router.GET("/user", func(c *gin.Context) {
		var (
			user   User
			result gin.H
		)
		// id := c.Param("id")
		id := c.Query("id")

		if id == "" {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": fmt.Sprintf("id - required"),
			})
			return
		}

		row := db.QueryRow("select id, name, email, country from users where id = ?;", id)
		err = row.Scan(&user.Id, &user.Name, &user.Email, &user.Country)
		if err != nil {
			// If no results send null
			result = gin.H{
				"result": nil,
				"count":  0,
			}
		} else {
			result = gin.H{
				"result": user,
				"count":  1,
			}
		}
		c.JSON(http.StatusOK, result)
	})

	// GET all persons
	router.GET("/users", func(c *gin.Context) {
		var (
			user  User
			users []User
		)
		rows, err := db.Query("select id, name, email, country from users;")
		if err != nil {
			fmt.Print(err.Error())
		}
		for rows.Next() {
			err = rows.Scan(&user.Id, &user.Name, &user.Email, &user.Country)
			users = append(users, user)
			if err != nil {
				fmt.Print(err.Error())
			}
		}
		defer rows.Close()
		c.JSON(http.StatusOK, gin.H{
			"result": users,
			"count":  len(users),
		})
	})

	// POST new person details
	router.POST("/user", func(c *gin.Context) {
		var buffer bytes.Buffer

		// for json
		user := User{}
		err := c.ShouldBindJSON(&user)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		if len(user.Name) < 1 {
			c.JSON(http.StatusBadRequest, gin.H{
				"message": "Name is required.",
			})
			return
		}

		if len(user.Email) < 1 {
			c.JSON(http.StatusBadRequest, gin.H{
				"message": "Email is required.",
			})
			return
		}

		row, err := db.Query("select id from users where email = ?;", user.Email)

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Something went wrong"})
			return
		}

		if row.Next() {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Email already exists."})
			return
		}

		stmt, err := db.Prepare("insert into users (name, email, country) values(?,?,?);")
		if err != nil {
			fmt.Print(err.Error())
		}
		_, err = stmt.Exec(user.Name, user.Email, user.Country)

		if err != nil {
			fmt.Print(err.Error())
		}

		// Fastest way to append strings
		buffer.WriteString(user.Name)
		buffer.WriteString(" ")
		buffer.WriteString(user.Email)
		defer stmt.Close()
		name := buffer.String()
		c.JSON(http.StatusOK, gin.H{
			"message": fmt.Sprintf(" %s successfully created", name),
		})
	})

	// PUT - update a person details
	router.PUT("/user", func(c *gin.Context) {
		var buffer bytes.Buffer

		// for json
		user := User{}
		err := c.ShouldBindJSON(&user)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		row, err := db.Query("select id from person where id = ?;", user.Id)

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Something went wrong"})
			return
		}

		if !row.Next() {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Record not exists."})
			return
		}

		stmt, err := db.Prepare("update users set name= ?, email= ?, country= ? where id= ?;")
		if err != nil {
			fmt.Print(err.Error())
		}
		_, err = stmt.Exec(user.Name, user.Email, user.Country, user.Id)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Duplicate email exists."})
			return
		}

		// Fastest way to append strings
		buffer.WriteString(user.Name)
		buffer.WriteString(" ")
		buffer.WriteString(user.Email)
		defer stmt.Close()
		name := buffer.String()
		c.JSON(http.StatusOK, gin.H{
			"message": fmt.Sprintf("Successfully updated to %s", name),
		})
	})

	// Delete resources
	router.DELETE("/user", func(c *gin.Context) {
		id := c.Query("id")

		if id == "" {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": fmt.Sprintf("id - required"),
			})
			return
		}

		stmt, err := db.Prepare("delete from users where id= ?;")
		if err != nil {
			fmt.Print(err.Error())
		}
		_, err = stmt.Exec(id)
		if err != nil {
			fmt.Print(err.Error())
		}
		c.JSON(http.StatusOK, gin.H{
			"message": fmt.Sprintf("Successfully deleted user: %s", id),
		})
	})
	router.Run(":3000")
}
