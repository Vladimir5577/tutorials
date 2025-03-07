// Service to upload files from remote server
// server has limited amount of connection
// not allow to run certain amount goroutines
// number of running goroutines should be dinamic

package main

import (
	"fmt"
	"runtime"
	"sync"
	"time"
)

func downloadFile(filename string) {
	fmt.Printf("Downloading %s\n", filename)
	time.Sleep(2 * time.Second)
	fmt.Printf("Downloaded %s\n", filename)
}

func main() {
	files := []string{"file1", "file2", "file3", "file4", "file5", "file6", "file7", "file8", "file9", "file10"}
	const goroutinesLimit = 3

	wg := sync.WaitGroup{}
	semaphore := make(chan struct{}, goroutinesLimit)
	wg.Add(len(files))
	for _, file := range files {
		fmt.Println(runtime.NumGoroutine())
		semaphore <- struct{}{}
		go func() {
			defer func() {
				<-semaphore
				wg.Done()
			}()

			downloadFile(file)
		}()
	}

	wg.Wait()
}
