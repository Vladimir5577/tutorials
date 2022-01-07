package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	t := time.Now()
	rand.Seed(t.UnixNano())

	go parseUrl("http://emample.com/") // 2 time faster with go routine
	parseUrl("http://youtube.com/")

	fmt.Printf("Parsing complelted. Time Elapesed: %.2f seconds\n", time.Since(t).Seconds())
}

func parseUrl(url string) {
	for i := 0; i < 5; i++ {
		latency := rand.Intn(500) + 500

		time.Sleep(time.Duration(latency) * time.Millisecond)

		fmt.Printf("Parsing <%s> - Step %d - Latency %d ms\n", url, i+1, latency)
	}
}

/*

This program executed about 7 second.
With go routine it will executed about 3.5 second

*/
