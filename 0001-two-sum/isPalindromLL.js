function isPalin(head) {
    let temp = head
    let stack = [] // creating an array as a stack

    while (temp !== null) {
        stack.push(temp.data) // pushing the linked list data in the stack
        temp = temp.next
    }

    while (head !== null) {
        let i = stack.pop() // taking the top element in the stack

        if (head.data !== i) {
            // comparing the data in the head node with the top element of the stack to check for a palindrome
            return false
        }

        head = head.next
    }

    return true
}
