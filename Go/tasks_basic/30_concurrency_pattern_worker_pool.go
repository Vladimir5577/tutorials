package main

import (
	"fmt"
	"sync"
	"time"
)

type Task struct {
	ID       int64
	Filename string
}

// long running task
func ProcessImage(task Task) string {
	time.Sleep(2 * time.Second)
	return fmt.Sprintf("File processed: %s (Task ID: %d)", task.Filename, task.ID)
}

func RunWorder(id int64, taskCh <-chan Task, resCh chan<- string) {
	for task := range taskCh {
		fmt.Printf("Worker %d started task %d\n", id, task.ID)
		resCh <- ProcessImage(task)
		fmt.Printf("Worker %d finished task %d\n", id, task.ID)
	}
}

func main() {
	const (
		numWorders = 3
		numTasks   = 10
	)

	taskCh := make(chan Task, numTasks)
	resCh := make(chan string, numTasks)

	wg := sync.WaitGroup{}
	for i := 0; i < numWorders; i++ {
		wg.Add(1)
		go func() {
            defer wg.Done()
			RunWorder(int64(i), taskCh, resCh)
		}()
	}

	go func() {
		for i := 0; i < numTasks; i++ {
			taskCh <- Task{ID: int64(i), Filename: fmt.Sprintf("file: %d.jpg", i)}
		}

		close(taskCh)
	}()

    go func() {
        wg.Wait()
        close(resCh)
    }()

	for res := range resCh {
		fmt.Println(res)
	}

	fmt.Println("All task are completed!")
}
