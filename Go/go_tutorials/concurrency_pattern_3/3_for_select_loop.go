package main

import "fmt"

func main() {
	charChannel := make(chan string, 3)
	chars := []string{"a", "b", "c"}

	for _, s := range chars {
		select {
		case charChannel <- s:	
		}
	}

	close(charChannel)

	for result := range charChannel {
		fmt.Println(result)
	}

}

/*
Unbuffered channel
========================
When "sending go rutine" send data to an unbuffered channel,
this go rutine will go to a "waiting state".
It means this go rutine will blocked
untile receiwer receive data from the unbuffered channel

When "receiwing go rutine" receive data from unbeffered channel 
then "sending go rutine" will be unblocked.

That means that the UNBUFFERED CHANNEL allow 
to communicate go rutines - SYNCRNOUSLY !!!

Senders should await response from the receivers.
Senders is blocked until response from the receivers come.
response came from the channels.
then senders will unblocked


Buffered channel.
=======================

With BUFFERED CHANNEL communication between
"sending go rutine" and "receiving go rutine" - ASSYNCRONOUSLY.

"Sending fo rutine" send data to the channel and "receiving go rutine"
receive data at the same time.

When "sending go rutine" will fill the capasity of buffered channel
and try to put more data to the channel, at this point this "sending go rutine" 
will blocked until data will read from the channel.

*/