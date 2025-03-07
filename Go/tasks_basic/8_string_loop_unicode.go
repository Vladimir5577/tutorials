package main

import "fmt"

func main() {
	str := "G😊o"

	// smile size 4 bit
	// english one letter 1 bit
	fmt.Println("String length: ", len(str))

    // loop by bit
	// loop through string it's len 6
    // it will loop 6 times
	// but string contains only 3 caracter
	// for i := 0; i < len(str); i++ {
	//     fmt.Printf("%c", str[i])
	// }

    // loop by rune
	// range on string iterate it by rune
	for _, s := range str {
		fmt.Printf("%v\n", string(s)) // string
		fmt.Printf("%v\n", s)         // rune
	}

}
