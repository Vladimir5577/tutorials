package main

import (
	"fmt"
	"time"
)

func main() {
	go fmt.Println("Hello from goroutine.")

	go fmt.Println("Hello from main()")

	time.Sleep(time.Millisecond) // without this go routine won't work
}

/*

Function main() - the main go routine in the app.
When main function finish execution the programm will stop and exit.

time.Sleep() - block the main function and give the opportunity to
execute anotner go routine.
we should block in some way the main() function to give opportunity
to execute another go routine. Because program will be exit without
execution go routine.


*/
