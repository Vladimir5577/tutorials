package main

import (
	"context"
	"log"
	"time"

	"github.com/segmentio/kafka-go"
)

func main() {
	// to produce messages
	topic := "my-topic"
	partition := 0

	conn, err := kafka.DialLeader(context.Background(), "tcp", "localhost:9092", topic, partition)
	if err != nil {
		log.Fatal("failed to dial leader:", err)
	}

	conn.SetWriteDeadline(time.Now().Add(10 * time.Second))
	_, err = conn.WriteMessages(
		kafka.Message{Value: []byte("one!")},
		kafka.Message{Value: []byte("two!")},
		kafka.Message{Value: []byte("three!")},
	)
	if err != nil {
		log.Fatal("failed to write messages:", err)
	}

	if err := conn.Close(); err != nil {
		log.Fatal("failed to close writer:", err)
	}

	// ctx := context.Background()

	// writer := kafka.NewWriter(kafka.WriterConfig{
	// 	Brokers: []string{"localhost:9092"},
	// 	Topic:   "my-topic",
	// })
	// defer writer.Close()

	// err := writer.WriteMessages(ctx, kafka.Message{
	// 	Value: []byte("Hello, Kafka!"),
	// })
	// if err != nil {
	// 	log.Fatal("Ошибка при отправке:", err)
	// }
}
