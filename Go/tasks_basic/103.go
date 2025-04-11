package main

import "fmt"

func main() {
    var m map[string]int
    fmt.Println(m["Hello"])
}


/*

Output ?

this map don't initialized
output will be default value

With uninitialized map we can:
1. read key
2. Can not write 
3. Check length

If uninitialized channel we will read 
it will be block, because nothing inside
(sometimes use in select to not consume cpu)

*/
