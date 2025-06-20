package main

import "fmt"

func main() {
	str1 := "hello"
	str2 := "途hello"

	fmt.Println(len(str1), len(str2))
}


/*

Английские буквы занимают по 1 байту

len() - возвращает количество байт (но не рун "символов")


*/
