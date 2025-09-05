package main

import (
    "fmt"
    "net/http"
    "os"
)

func main() {
    directoryPath := "./static"
    port := 8050

    // Check if the directory exists
    _, err := os.Stat(directoryPath)
    if os.IsNotExist(err) {
        fmt.Printf("Directory '%s' not found.\n", directoryPath)
        return
    }

    // Create a file server handler to serve the directory's contents
    fileServer := http.FileServer(http.Dir(directoryPath))

    // Create a new HTTP server and handle requests
    http.Handle("/", fileServer)

    fmt.Printf("Server started at http://localhost:%d\n", port)
    err = http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
    if err != nil {
        fmt.Printf("Error starting server: %s\n", err)
    }
}