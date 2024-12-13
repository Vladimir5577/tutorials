package main

import "fmt"

func main() {
	nums := make([]int, 1, 2) // len = 1 cap = 2
	fmt.Println(nums)

	appendSlice(nums, 1024)
	fmt.Println(nums) // what? // [0]

	mutateSlice(nums, 1, 512)
	fmt.Println(nums) // what? // panic - out of range
}

func appendSlice(sl []int, val int) {
    sl = append(sl, val)
}

func mutateSlice(sl []int, idx, val int) {
    sl[idx] = val
}
