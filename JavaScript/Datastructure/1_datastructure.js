/*
    1. Array [1, 2, 3]
    2. Object
    3. Set
    4. Map
    5. WeakMap, WeakSet
    
    Linked List
    [value, next] -> [value, next] -> [value, next]

*/

class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const node = new Node(data);

        if (this.tail) {
            this.tail.next = node;
        }

        if (!this.head) {
            this.head = node;
        }

        this.tail = node;
    }

    prepend (data) {
        const node = new Node(data, this.head);

        this.head = node;
        
        if (!this.tail) {
            this.tail = node;
        }
    }

    find (data) {
        if (!this.head) {
            return;
        }

        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
    }

    toArray () {
        const output = [];
        let current  = this.head;

        while (current) {
            output.push(current);
            current = current.next;
        }

        return output;
    }
}

const list = new LinkedList();

list.append('My');
list.append('name');
list.prepend('Hello');
list.append('is');
list.append('Slim');
list.append('Shady');

console.log(list.toArray());
console.log(list.find('name'));
