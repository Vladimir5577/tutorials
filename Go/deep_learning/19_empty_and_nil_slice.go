package main

import (
	"fmt"
	"unsafe"
)

func main() {
	var data []string
	fmt.Println("var data []string")
	fmt.Printf("\tempty=%t nil=%t size=%d data=%p\n", len(data) == 0, data == nil, unsafe.Sizeof(data), unsafe.SliceData(data))

	data = []string(nil)
	fmt.Println("data = []string(nil)")
	fmt.Printf("\tempty=%t nil=%t size=%d data=%p\n", len(data) == 0, data == nil, unsafe.Sizeof(data), unsafe.SliceData(data))

	data = []string{}
	fmt.Println("data = []string{}")
	fmt.Printf("\tempty=%t nil=%t size=%d data=%p\n", len(data) == 0, data == nil, unsafe.Sizeof(data), unsafe.SliceData(data))

	data = make([]string, 0)
	fmt.Println("data = make([]string, 0)")
	fmt.Printf("\tempty=%t nil=%t size=%d data=%p\n", len(data) == 0, data == nil, unsafe.Sizeof(data), unsafe.SliceData(data))

	empty := struct{}{}
	fmt.Println("Empty struct address: ", unsafe.Pointer(&empty))
}

/*

Так создается нулевой срез который никуда не указывает~                                    
	var data []string
	data = []string(nil)


Так создается ненулевой срез (но пустой) 
	data = []string{}
	data = make([]string, 0)

Если срез нулевой то никуда не указует.
Ненулевой срез имеет указатель как и у пустой структуры

Пустой срез не равен нулевому.
Проверять срезы лучше не на nil 
Проверять лучше на len(slice) == 0

*/
