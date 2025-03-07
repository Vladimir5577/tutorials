// need to write function uniqN
// that generate slice len = N unique random number

package main

import (
	"fmt"
	"math/rand"
)

func main() {
    fmt.Println(uniqN(10))
}

func uniqN(n int) []int {
}


// possible solution 
// func uniqN(n int) []int {
//     m := make(map[int]struct{}, n)
//     res := make([]int, 0, n)
//
//     for len(res) < n {
//         tmp := rand.Intn(100)
//
//         if _, ok :=m[tmp]; !ok {
//             res = append(res, tmp)
//             m[tmp] = struct{}{}
//         }
//     }
//     
//     return res
// }
