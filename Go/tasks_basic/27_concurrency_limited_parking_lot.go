// Find and solve problem vith code
// We have a parking lot with limited places


package main

import (
	"fmt"
	"sync"
	"time"
)

type ParkingLot struct {
    slots int64 // amount of parking places
}

func (p *ParkingLot) Park(carID int64) {
    fmt.Printf("Car %d is parked now...\n", carID)
    time.Sleep(3 * time.Second) // simulation of parking time
    fmt.Printf("The car %d leaved parking lot.\n", carID)
}

func main() {
    parking := &ParkingLot{slots: 3} // only 3 places available

    var wg sync.WaitGroup

    carIDs := []int64{1, 2, 3, 4, 5, 6}

    for _, carID := range carIDs {
        wg.Add(1)
        go func(id int64) {
            defer wg.Done()
            parking.Park(id)
        }(carID)
    }

    wg.Wait()
    fmt.Println("All car parked.")
}

/*

// possible solution with chanel
package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

type ParkingLot struct {
    slots chan struct{} // amount of parking places
}

func NewParkingLot(slots int) *ParkingLot {
    return &ParkingLot{slots: make(chan struct{}, slots)}
}

func (p *ParkingLot) Park(carID int64) {
    p.slots <- struct{}{}
    fmt.Printf("Car %d is parked now...\n", carID)
    time.Sleep(time.Duration(rand.Intn(3)) * time.Second) // simulation of parking time
    fmt.Printf("The car %d leaved parking lot.\n", carID)
    <-p.slots
}

func main() {
    parking := NewParkingLot(3) 

    var wg sync.WaitGroup

    carIDs := []int64{1, 2, 3, 4, 5, 6}

    for _, carID := range carIDs {
        wg.Add(1)
        go func(id int64) {
            defer wg.Done()
            parking.Park(id)
        }(carID)
    }

    wg.Wait()
    fmt.Println("All car parked.")
}


// possible solution with atomic
// but problem if there are no places it will give refuce
// not waiting until place will free
package main

import (
	"fmt"
	"math/rand"
	"sync"
	"sync/atomic"
	"time"
)

type ParkingLot struct {
    slots atomic.Int64 // amount of parking places
}

func NewParkingLot(slots int64) *ParkingLot {
    newParkingLot := &ParkingLot{}
    newParkingLot.slots.Store(slots)
    return newParkingLot
}

func (p *ParkingLot) Park(carID int64) {
    if p.slots.Load() == 0 {
        fmt.Printf("Car %d can not park no available places.\n", carID)
        return
    }

    p.slots.Add(-1)

    fmt.Printf("Car %d is parked now...\n", carID)
    time.Sleep(time.Duration(rand.Intn(3)) * time.Second) // simulation of parking time
    fmt.Printf("The car %d leaved parking lot.\n", carID)

    p.slots.Add(-1)
}

func main() {
    parking := NewParkingLot(3) 

    var wg sync.WaitGroup

    carIDs := []int64{1, 2, 3, 4, 5, 6}

    for _, carID := range carIDs {
        wg.Add(1)
        go func(id int64) {
            defer wg.Done()
            parking.Park(id)
        }(carID)
    }

    wg.Wait()
    fmt.Println("All car parked.")
}

*/
