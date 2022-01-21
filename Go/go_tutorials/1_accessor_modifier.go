package main

import "fmt"

type MyInt int

func (d MyInt) increment1() {
	d = d + 1
}

func (d *MyInt) increment2() {
	*d = *d + 1
}

func main() {
	var data MyInt = 1
	fmt.Println("Value before increment1() cal :", data)
	data.increment1()
	fmt.Println("Value before increment1() cal :", data)
	data.increment2()
	fmt.Println("Value before increment2() cal :", data)

}

/*
value before increment1() call : 1
value after increment1() call : 1
value after increment2() call : 2
*/
