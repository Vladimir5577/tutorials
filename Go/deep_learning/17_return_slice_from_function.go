package main

import "fmt"

func main() {
	data := []int{1, 2, 3, 4}

	fmt.Println("Initial slice: ", data)
	process1(data)
	fmt.Println("After process1: ", data)
	process2(data)
	fmt.Println("After process2: ", data)

}

func process1(data []int) {
	data[2] = 5
}

func process2(data []int) {
	data = append(data, 6)
	fmt.Println("Len: ", len(data), "Cap: ", cap(data))
}

/*

Когда передаем срез в функцыю - копируется не массив а объукт структуры.
у которого есть указатель и он будет указывать на тот же самый массив.
Поэтоиу после функции process1 изменилось значение

Функция process2 делает append, добавлять некуда поэтому будет 
произведена реалокация памяти. 
Но реалокация памяти будет внутри process2 и не будет изменен 
срез в main

*/
