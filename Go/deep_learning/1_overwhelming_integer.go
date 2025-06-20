package main

import (
	"fmt"
	"math"
)

func main() {
    var signed int8 = math.MaxInt8
    signed++

    var unsigned uint8 = math.MaxUint8
    unsigned++

    fmt.Println(signed)
    fmt.Println(unsigned)


    // если в этом случае проиницыализировать и прибавит
    // будет ошибка компиляции
    // var signed int8 = math.MaxInt8 + 1
    // var unsigned uint8 = math.MaxUint8 + 1

}

/*

При переполнении максимального значения -> возвращаемся на круг наименьшего
от max ---> min

Например math.MaxInt8 = 128 - и при переполнии будет вернемся на круг -128 
math.MaxUint8 = 128 - и при переполнении вернемся на 0
*/
