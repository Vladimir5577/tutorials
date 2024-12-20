package main

import (
	"context"
	"fmt"
	"sync"
	"time"
)

type ErrorGroup struct {
	wg      *sync.WaitGroup
	err     error
	mu      *sync.Mutex
	errOnce sync.Once
	cancel  *context.CancelFunc
}

func main() {
	errGrp, ctx := NewErrorGroup()

	errGrp.Go(ctx, func(ctx context.Context) error {
		select {
		case <-ctx.Done():
			fmt.Println("func 1 canceled")
			return nil
		case <-time.After(200 * time.Millisecond):
		}
		time.Sleep(58 * time.Millisecond)
		fmt.Println("func 1 ended")
		return fmt.Errorf("some error in func 1")
	})

	errGrp.Go(ctx, func(ctx context.Context) error {
		fmt.Println("func 2 started")
		select {
		case <-ctx.Done():
			fmt.Println("func 2 canceled")
			return nil
		case <-time.After(300 * time.Millisecond):
			time.Sleep(50 * time.Millisecond)
			fmt.Println("func 2 ended")
			return nil
		}
	})

	err := errGrp.Wait()
	if err != nil {
		fmt.Println("returned error:", err)
	}
}

func NewErrorGroup() (*ErrorGroup, context.Context) {
	ctx, cancel := context.WithCancel(context.Background())
	errGroup := &ErrorGroup{
		wg:      new(sync.WaitGroup),
		mu:      new(sync.Mutex),
		errOnce: new(sync.Once),
		cancel:  &cancel,
	}
	return errGroup, ctx
}

func (e *ErrorGroup) Go(ctx context.Context, f func(ctx context.Context) error) {
	e.wg.Add(1)
	go func() {
		defer e.wg.Done()
		if err := f(ctx); err != nil {
			e.errOnce.Do(func() {
				e.mu.Lock()
				e.err = err
				e.mu.Unlock()
			})
			if e.cancel != nil {
				(*e.cancel)()
			}
		}
	}()
}
func (e *ErrorGroup) Wait() error {
	e.wg.Wait()
	return e.err
}
