package main

import "fmt"

func main() {
    var x = []string{"A", "M", "C"}

    for i, s := range x {
        println(i, s)

        x[i+1] = "M"
        x = append(x, "Z")
        x[i+1] = "Z"
    }

   fmt.Println(x)
}

/*

Когда передаем в range данные копируются.
Копия в range и var x - указывают на один и тотже массив.

При переполнении в append будет реалокация,
но реалокация будет на на копию в range - а на var x
"Z" - добавииться в var x
Объекты среза разделились и указывают на разные массивы.

*/
