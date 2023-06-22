class Queue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(val) {
        this.stack1.push(val)
    }

    dequeue() {
        // put all elements from stack 2 to stack 1 in reverse order (pop)
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
        const dequeueElement = this.stack2.pop()
        return dequeueElement
    }
}

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)

console.log(q.dequeue())