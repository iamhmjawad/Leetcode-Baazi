function deleteAtEnd(head) {
    if (!head) {
        return null
    }

    if (!head.next) {
        // If the list has only one node, delete the head node
        head = null
        return head
    }

    let current = head
    let prev = null

    while (current.next) {
        prev = current
        current = current.next
    }

    prev.next = null

    return head
}