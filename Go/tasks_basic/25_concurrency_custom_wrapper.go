// handle function getDiscount() that has long time execution
// wirte custom wrapper to handle this function


package main

import (
	"fmt"
	"time"
)

// this function request some service that sometimas fall
func getDiscount() float64 {
	time.Sleep(3 * time.Second)
	return 12.3
}

func main() {
	fmt.Printf("Your discount is: %v", getDiscount())
}


/*
// possible solution

package main

import (
	"context"
	"fmt"
	"time"
)

const defaultTimeout = 4 * time.Second

// this function request some service that sometimas fall
func getDiscount() float64 {
	time.Sleep(3 * time.Second)
	return 12.3
}

func getDiscountWithTimeout(ctx context.Context) (float64, error) {
	ch := make(chan float64)
	go func() {
		res := getDiscount()
        ch <- res
        close(ch)
	}()

    if _, ok := ctx.Deadline(); !ok {
        var cancel context.CancelFunc
        ctx, cancel = context.WithTimeout(ctx, defaultTimeout)
        defer cancel()
    }
    
    deadline, _ := ctx.Deadline()
    fmt.Printf("ctx timeout: %v\n", time.Since(deadline))

	select {
	case <-ctx.Done():
		return 0, ctx.Err()
	case val := <-ch:
		return val, nil
	}
}

func main() {
    // if we not declare timeout then it will be default from const
    ctx := context.Background()

    // declaring timeout manually
    // ctx, cancel := context.WithTimeout(context.Background(), 3 * time.Second)
    // defer cancel()
    
    res, err := getDiscountWithTimeout(ctx)
    if err != nil {
        fmt.Printf("Error occured: %v", err)
        return
    }

	fmt.Printf("Your discount is: %v", res)
}

*/
