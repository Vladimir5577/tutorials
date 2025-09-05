package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

var (
	requestsTotal = prometheus.NewCounterVec(
		prometheus.CounterOpts{
			Name: "http_requests_total",
			Help: "Total number of HTTP requests.",
		},
		[]string{"method"},
	)
	requestDuration = prometheus.NewHistogramVec(
		prometheus.HistogramOpts{
			Name: "http_request_duration_seconds",
			Help: "Duration of HTTP requests.",
		},
		[]string{"method"},
	)
)

func main() {
	prometheus.MustRegister(requestsTotal, requestDuration)

	http.Handle("/metrics", MetricMiddleware(promhttp.Handler()))
	http.HandleFunc("/", handler)
	err := http.ListenAndServe(":8080", nil)
	log.Fatal(err)
}

func MetricMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Println(r.URL.Path, "Metric middleware before")
		next.ServeHTTP(w, r)
		log.Println(r.URL.Path, "Metric meddleware after")
	})
}

func handler(w http.ResponseWriter, r *http.Request) {
	start := time.Now()
	method := r.Method
	elapsed := time.Since(start).Seconds()

	defer func() {
		requestsTotal.WithLabelValues(method).Inc()
		requestDuration.WithLabelValues(method).Observe(elapsed)
	}()

	w.Write([]byte("Hello"))

	// Ваш код обработки запроса здесь
	fmt.Printf("%v duration = %v\n", method, elapsed)
}
