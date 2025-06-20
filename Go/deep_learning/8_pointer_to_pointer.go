package main

import "fmt"

func process(temp **int32) {
    var value2 int32 = 200
    *temp = &value2
}

func main() {
    var value1 int32 = 100
    pointer := &value1

    fmt.Println("value: ", *pointer)
    fmt.Println("address", pointer)

    process(&pointer) // передача указателя на указатель

    fmt.Println("value: ", *pointer)
    fmt.Println("address", pointer)
}


/*

Указатель на указатель.
В предыдущем примере в функцыю process()
передавали указатель, и изменения в process()
не изменяли данные в main().

Здесь передаем указатель на указатель,
и изменения в process() поменяют данные в main().

*/
