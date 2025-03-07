// there is a map, where key is a string and value is slice of string
// every slice created unique value
// You need to wirte function MergeToMap, which take map and a new slice
// for certain key, analyse existing value in map and added only new
// element from new slice, that not in

// Example input data:
// Initial map:
// m := map[string][]string{
//     "group1": {"apple", "banana"},
//     "group2": {"carrot"},
// }
//
// New slice:
// newValues := []string{"banana", "cherry"}
//
// Key:
// key := "group1"
//
// Expected result
// m := map[string][]string{
//     "group1": {"apple", "banana", "cherry"},
//     "group2": {"carrot"},
// }



/*

// possible solution

package main

import (
	"fmt"
)

func MergeToMap(data map[string][]string, key string, newValue []string) {
    uniqExist := make(map[string]struct{})
    for _, v := range data[key] {
        uniqExist[v] = struct{}{}
    }

    for _, v := range newValue {
        if _, ok := uniqExist[v]; !ok {
            data[key] = append(data[key], v)
            uniqExist[v] = struct{}{}
        }
    }
}

func main() {
	oldMap := map[string][]string{
		"group1": {"apple", "banana"},
		"group2": {"carrot"},
	}

    fmt.Println(oldMap)

    newValues := []string{"banana", "cherry",  "cherry"}
    MergeToMap(oldMap, "group1", newValues)
    MergeToMap(oldMap, "group3", newValues)

    fmt.Println(oldMap)
}

*/
