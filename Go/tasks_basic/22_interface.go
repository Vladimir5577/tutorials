// return an error from handle function
// Don't use any additional packages


package main

func main() {
    println(handle())
}

func handle() error {

}


// Best practice
// when return interface try to olwaus 
// return pointer to struct

/*

// possible solution

package main

func main() {
    println(handle().Error())
}

type CustomError struct {
    Message string
}

func (c *CustomError) Error() string {
    return "Error occured!"
}

func handle() error {
    return &CustomError{"Error occured"}
}

*/
