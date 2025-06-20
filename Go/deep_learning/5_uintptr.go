package main

import (
	"fmt"
	"unsafe"
)

// чтоб не инлайнилось
// чтоб стэк горутины вырос на 1 мегабайт
func allocation(index int) byte {
	var data [1 << 20]byte
	return data[index]
}

func main() {
	var array [10]int
	address1 := (uintptr)(unsafe.Pointer(&array))
	fmt.Println("#1 array address: ", address1)

	// здесь будет рост стэка
	// стэк растет также как и слайсы
	// копируется в новое место в 2 раза больше
	// и забываем про старое место
	allocation(100)

	address2 := (uintptr)(unsafe.Pointer(&array))
	fmt.Println("#2 arraya address: ", address2)
	fmt.Println("#1 arraya address: ", address1)

}

/*

При переезде стэка на новое место в памяти,
указатели будут обновляться,
а uintptr - нет, потому что это просто челочисленное значение


*/
