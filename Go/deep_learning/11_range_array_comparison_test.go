package main

import "testing"

type account struct {
	balance int
}

func BenchmarkWithPointers(b *testing.B) {
	account := [...]*account{ // храним не значения, а указатели
		{balance: 100},
		{balance: 200},
		{balance: 300},
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		// здесь указатель копируется но указывает на то место в памяти где надо делать изменения
		for _, a := range account {
			a.balance += 1
		}
	}
}

func BenchmarkWithIndices(b *testing.B) {
	account := [...]*account{
		{balance: 100},
		{balance: 200},
		{balance: 300},
	}

    b.ResetTimer()
	for i := 0; i < b.N; i++ {
		for i := range account {
            account[i].balance +=1
		}
	}
}

/*

Run banchmarks
    $ go test -bench=.211_range_array_comparison_test.go

С индуксами бенчмарк выполняется быстрее
*/
