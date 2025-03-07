package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
    builder := strings.Builder{}

    for i := 0; i < 100_000; i++ {
        builder.WriteString(strconv.Itoa(i))
    }

    fmt.Println(builder.String())
}

/*

When we concatinate string it is like exceeded capacity array
will be allocated new memory (then garbage collector should clean up mess)
To avoid this use stringbuilder
And convert int to string, because compiler will convert it longer

*/
