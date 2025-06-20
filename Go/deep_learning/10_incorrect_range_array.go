package main

import (
	"fmt"
	"unsafe"
)

func main() {
    values := [...]int{100, 200, 300} // ... - значит компилятор выведет разиерность массива

    for idx, value := range values { 
        value += 50
        fmt.Println("#1: ", unsafe.Pointer(&value), "#2: ", unsafe.Pointer(&values[idx]))
    }

    fmt.Println("Values: ", values)
}
//

/*

значения все копируются например новая переменная value в цыкле - это копия и мы иодифицыруем копию


*/
