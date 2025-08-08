package main

func Tee[T any](inputCh <-chan T, n int) []<-chan T {
	outputCh := make([]chan T, n)
	for i := 0; i < n; i++ {
		outputCh[i] = make(chan T)
	}

	go func() {
		for value := range inputCh {
			for i := 0; i < n; i++ {
				outputCh[i] <- value
			}
		}

		for _, ch := range outputCh {
			close(ch)
		}
	}()

	resultChs := make([]<-chan T, n)
	for i := 0; i < n; i++ {
		resultChs[i] = outputCh[i]
	}

	return resultChs
}

func main() {

}

/*

Devide channel and write in multipe places.


*/
