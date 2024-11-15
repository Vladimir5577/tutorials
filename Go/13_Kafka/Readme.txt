Install kafka:
    $ go get github.com/IBM/sarama

Run producer:
    $ go run producer/main.go

Run consumer:
    $ go run worker/main.go

Send request to the producer server:
    $ curl -X POST http://localhost:3000/order \
        -H "Content-Type: application/json" \
        -d '{
            "customer_name": "Bob",
            "coffee_type": "Latte"
        }'