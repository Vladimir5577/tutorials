package main

import "fmt"

func main() {
	data := make([]int, 3, 6)

	fmt.Println("Initial slice: ", data)
	process(data)
	fmt.Println("After process: ", data)
	fmt.Println("After process: ", data[:4])
}

func process(data []int) {
	data = append(data, 5)
}

/*

Срез - это структура внутри pointer, size, capacity
При передаче в функцыю структура копируется.
В функции process append инкрементирует size
но внутри функции process копия size - что не отобразится в main.

Но если расширить длинну - data[:4] - тогда увидим что приапендила 
функция process

*/
