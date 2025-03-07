package main

import (
	"fmt"
	"unicode/utf8"
)

func main() {
    str := "ddЯЙ"
    fmt.Println("Length: ", len(str))
    fmt.Println("Length runecode ", utf8.RuneCountInString(str))

    // loop through string with help of rune
    for _, r := range []rune(str) {
        fmt.Println(string(r))
    }
}


/*

English one letter = 1 bit
Russian one letter = 2 bit

Loop string without rune will cause a problem
because russian letter 2 bit
and it will loop 2 timees
*/
