package main

import "fmt"


func main() {

	fmt.Println("==== Initialize a map =======================")
	usersMap := map[string]int{
		"Bob": 25,
		"Jack": 34,
		"Mike": 28,

	}
	fmt.Println(usersMap)
	fmt.Println("=============================================")

	fmt.Println("===== Initialize an empty map ===============")
	// initialize an empty map (more offen and idiomatic way)
	workers := map[string]int{}
	fmt.Println("Empty map workers: ", workers)

	// another way to initialize a map
	users := make(map[string]int)

	users["Bob"] = 25
	users["Jack"] = 34
	users["Donna"] = 35
	users["Jessica"] = 28
	users["Luis"] = 46

	fmt.Println(users)
	fmt.Println("Bob age is: ", users["Bob"])
	fmt.Println("===== Check key exist or not ===============")
	// check if key exist in the map or not
	age, ok := users["Mike"]
	if !ok {
		fmt.Println("Mike does not exist in the map")
	} else {
		fmt.Println("Mike age: ", age)
	}

	fmt.Println("===== Delete from the map ==================")
	delete(users, "Jessica")
	fmt.Println(users)

	fmt.Println("===== Range over the map ===================")
	for k, v := range users {
		fmt.Printf("Key: %v and value: %v\n", k, v)
	}

}
