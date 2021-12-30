1. Concurency:
    - is the composition of independyntly executing processes
    - is about dealing with lots of things at once.

2. Parallelism:
    - is the sumultaneous execution of (possiby related) computatioins
    - is about doing lots of things at once.

3. Gorutine:
    - independyntly executed function use the "go" key word

4. Channel:
    - mechanism through which we can send and receive values
        ch := make(chan T)
        <- indicates the data flow direction
    - by default sends and reciive block until the other side is ready.
    - keywords:
        1. close
        2. range
        3. select

5. buffered channel:
    - It's a type of buffer that has a length.

// =======================================================

1. Fall-In pattern:
    - consolidation fo multiple channels into one channel by multiplexing each receive value.


// =======================================================

https://www.youtube.com/watch?v=-xEycsoGoA8&list=PL7yAAGMOat_Fhj_px_DzNzTsXs-mRwv1t&index=1