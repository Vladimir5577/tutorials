package main

import "fmt"

func main() {
    data := []int{0, 1, 2}
    for range data {
        data = append(data, 10)
        fmt.Println("Iteration")r
    }


    // here infinite loop
    // на каждой итерации новая длинна на единицу больше
    // data := []int{0, 1, 2}
    // for i := 0; i < len(data); i++ {
    //     data = append(data, 10)
    //     fmt.Println("Iteration")r
    // }
}

/*

При использовании range,
указанное выражение вычисляется только 
один раз перед началом цыкла.
Когда передаем в range - slice копируется,
и range выполняет итерацию с временной переменной.

Но при итерации во втором случаечерез len()


*/
