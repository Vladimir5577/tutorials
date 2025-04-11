package main

import "fmt"

func main() {

    /*
    // в этом случае ничего не выведется
    // потому что copy() выбирает минимальную длинну 
    // данных срезов
    src := []int{1, 2, 3}
    var dst []int
    copy(dst, src)
    fmt.Println("Copied: ", dst)
    */

    // copy() выбирает минимальную длинну среза
    // поэтому иничиируем срез определенной длинны
    src := []int{1, 2, 3}
    dst := make([]int, 3)
    copy(dst, src)
    fmt.Println("Copied: ", dst)
}
