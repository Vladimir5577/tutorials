package main

import "fmt"

func main() {
	text := "Sr, привет 途"
	for idx, symbol := range text { // range []rune(text)
		fmt.Printf("%d-%c", idx, symbol)
	}

	fmt.Println()

	for i := 0; i < len(text); i++ { // range []byte(text)
		fmt.Printf("%d-%c", i, text[i])
	}
}

/*

range - итерирует по рунам
если по индексу - то итерирует по байтово

английские символы - 1 байт
русские буквы - 2 байта
иероглифы - 2, 3 байта

*/
